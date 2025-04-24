<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Form\ContactFormType;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Attribute\Route;

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
        $form = $this->createForm(ContactFormType::class, $contact);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $contact->setCreationDate(new DateTimeImmutable());
            $entityManager->persist($contact);
            $entityManager->flush();

            $email = (new Email())
                ->from($contact->getEmail())
                ->to('jourdeflorian@gmail.com')
                ->subject('New message from : ' . $contact->getMessage())
                ->html('<p>De: ' . $contact->getUsername() . ' (' . $contact->getEmail() . ')</p>
                       <p>Message: ' . nl2br($contact->getMessage()) . '</p>');

            $mailer->send($email);

            $this->addFlash('success', 'Your message have been sent.');
        }

        return $this->render('contact.html.twig', [
            'form' => $form->createView()
        ]);
    }
}