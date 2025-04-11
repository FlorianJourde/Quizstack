<?php

namespace App\Controller;

use App\Entity\Questions;
use App\Form\QuestionsFormType;
use App\Repository\QuestionsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

final class QuestionsController extends AbstractController
{
    #[IsGranted('ROLE_EDITOR')]
    #[Route('/questions', name: 'questions')]
    public function questions(QuestionsRepository $questionsRepository): Response
    {
        $questions = $questionsRepository->findAll();

        return $this->render('questions/index.html.twig', [
            'questions' => $questions
        ]);
    }

    #[IsGranted('ROLE_EDITOR')]
    #[Route('/question/{id}', name: 'question', requirements: ['id' => '\d+'])]
    public function question(int $id, QuestionsRepository $questionsRepository): Response
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
    public function edit(Request $request, Questions $question, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(QuestionsFormType::class, $question);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            $this->addFlash('success', 'Question updated.');

            return $this->redirectToRoute('question_show', ['id' => $question->getId()]);
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
    public function new(): Response
    {
        $question = new Questions();
        $form = $this->createForm(QuestionsFormType::class, $question);

        return $this->render('questions/new.html.twig', [
            'question' => $question,
            'form' => $form->createView(),
        ]);
    }
}
