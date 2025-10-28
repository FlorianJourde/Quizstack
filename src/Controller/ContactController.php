<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Form\ContactFormType;
use App\Repository\ContactRepository;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class ContactController extends AbstractController
{

    #[Route('/contact', name: 'app_contact')]
    public function contact(
        Request                $request,
        EntityManagerInterface $entityManager,
        MailerInterface        $mailer
    ): Response
    {
        $contact = new Contact();
        $user = $this->getUser();

        if ($user) {
            $contact->setUsername($user->getUsername());
            $contact->setEmail($user->getEmail());
        }

        $form = $this->createForm(ContactFormType::class, $contact, [
            'is_logged_in' => $user !== null
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $contact->setCreationDate(new DateTimeImmutable());
            $entityManager->persist($contact);
            $entityManager->flush();

            $email = (new Email())
                ->from('contact@quizstack.io')
                ->replyTo($contact->getEmail())
                ->to('jourdeflorian@gmail.com')
                ->subject('New message from : ' . $contact->getUsername())
                ->html('<p>De: ' . $contact->getUsername() . ' (' . $contact->getEmail() . ')</p>
                   <p>Message: ' . nl2br(htmlspecialchars($contact->getMessage())) . '</p>');

            $mailer->send($email);

            $this->addFlash('success', 'Your message have been sent.');

            return $this->redirectToRoute('app_contact');
        }

        return $this->render('contact/contact.html.twig', [
            'form' => $form->createView()
        ]);
    }

    #[IsGranted('ROLE_ADMIN')]
    #[Route('/messages', name: 'messages')]
    public function messages(
        Request           $request,
        ContactRepository $contactRepository
    ): Response
    {
        $offset = max(0, $request->query->getInt('offset', 0));
        $paginator = $contactRepository->getMessagesPaginator($offset);

        return $this->render('contact/index.html.twig', [
            'messages' => $paginator,
            'previous' => $offset - ContactRepository::MESSAGES_PER_PAGE,
            'next' => min(count($paginator), $offset + ContactRepository::MESSAGES_PER_PAGE),
        ]);
    }

    #[IsGranted('ROLE_ADMIN')]
    #[Route('/message/{id}', name: 'message', requirements: ['id' => '\d+'])]
    public function message(
        int               $id,
        ContactRepository $contactRepository
    ): Response
    {
        $message = $contactRepository->find($id);

        return $this->render('contact/message.html.twig', [
            'message' => $message
        ]);
    }
}