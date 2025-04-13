<?php

namespace App\Controller;

use App\Entity\Questions;
use App\Form\QuestionsFormType;
use App\Repository\QuestionsRepository;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

final class QuestionsController extends AbstractController
{
    private DateTimeImmutable $currentDate;

    public function __construct()
    {
        $this->currentDate = new DateTimeImmutable();
    }

    #[IsGranted('ROLE_EDITOR')]
    #[Route('/questions', name: 'questions')]
    public function questions(QuestionsRepository $questionsRepository): Response
    {
//        $questions = $questionsRepository->findAll();
        $questions = $questionsRepository->findAllByUpdateDate();

        return $this->render('questions/index.html.twig', [
            'questions' => $questions
        ]);
    }

    #[IsGranted('ROLE_EDITOR')]
    #[Route('/question/{id}', name: 'question', requirements: ['id' => '\d+'])]
    public function question(
        int                 $id,
        QuestionsRepository $questionsRepository
    ): Response
    {
        $question = $questionsRepository->find($id);

        if (!$question) {
            throw $this->createNotFoundException('No question found !');
        }

        return $this->render('questions/question.html.twig', [
            'question' => $question,
            'mode' => 'display',
            'questionId' => $question->getId(),
        ]);
    }

    #[IsGranted('ROLE_EDITOR')]
    #[Route('/question/{id}/edit', name: 'question_edit', requirements: ['id' => '\d+'])]
    public function edit(
        Request                $request,
        Questions              $question,
        EntityManagerInterface $entityManager,
        Security               $security
    ): Response
    {
//        $form = $this->createForm(QuestionsFormType::class, $question);

        $question->setUser($security->getUser());
        $isAdmin = $security->isGranted('ROLE_ADMIN');

        $form = $this->createForm(QuestionsFormType::class, $question, [
            'is_admin' => $isAdmin,
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if ($form->get('delete')->isClicked()) {
                $entityManager->remove($question);
                $entityManager->flush();

                $this->addFlash('success', 'Question has been deleted');
                return $this->redirectToRoute('questions');
            }

            $question->setUpdateDate($this->currentDate);
            $entityManager->flush();

            $this->addFlash('success', 'Question updated.');
//            return $this->redirectToRoute('question', ['id' => $question->getId()]);
        }

        return $this->render('questions/edit.html.twig', [
            'question' => $question,
            'form' => $form->createView(),
            'mode' => 'display',
            'questionId' => $question->getId(),
            'showComments' => 'false'
        ]);
    }

    #[Route('/question/new', name: 'question_new')]
    #[IsGranted('ROLE_USER')]
    public function new(
        Request                $request,
        Security               $security,
        EntityManagerInterface $entityManager
    ): Response
    {
        $question = new Questions();
        $question->setUser($security->getUser());
        $isAdmin = $security->isGranted('ROLE_ADMIN');

        $form = $this->createForm(QuestionsFormType::class, $question, [
            'is_admin' => $isAdmin,
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $question->setCreationDate($this->currentDate);
            $question->setUpdateDate($this->currentDate);
            $entityManager->persist($question);
            $entityManager->flush();

            return $this->redirectToRoute('questions');
        }

        return $this->render('questions/new.html.twig', [
            'question' => $question,
            'form' => $form->createView(),
        ]);
    }
}
