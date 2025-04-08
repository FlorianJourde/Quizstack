<?php

namespace App\Controller;

use App\Entity\Questions;
use App\Form\QuestionsFormType;
use App\Repository\QuestionsRepository;
use App\Utils\EnumUtility;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

final class QuestionsController extends AbstractController
{
//    #[Route('/quiz', name: 'quiz')]
//    public function question(Request $request, QuestionsRepository $questionsRepository): Response
//    {
////
////        $difficultyLevel = $request->query->get('difficulty') ?? null;
////        $categories = $request->query->all('category');
////        $question = $questionsRepository->findRandomQuestionByFilters($difficultyLevel, $categories);
////
////        $answers = $question->getAnswers();
////        $answers->initialize();
////
////        if (!$question) {
////            return new Response('No question found.', 404);
////        }
////
////        if (!$answers) {
////            return new Response('No answers found.', 404);
////        }
//
//        return $this->render('quiz.html.twig');
//
////        return $this->render('question.html.twig', [
////            'question' => $question,
////            'answers' => $answers
////        ]);
//    }

//    #[Route('/users', name: 'users')]
//    public function users(UsersRepository $usersRepository): Response
//    {
//        $users = $usersRepository->findAll();
//
//        return $this->render('users.html.twig', [
//            'users' => $users
//        ]);
//    }

    #[IsGranted('ROLE_EDITOR')]
    #[Route('/question/{id}', name: 'question', requirements: ['id' => '\d+'])]
    public function question(int $id, QuestionsRepository $questionsRepository): Response
    {
//        $id = 232;
        $question = $questionsRepository->find($id);

        if (!$question) {
            throw $this->createNotFoundException('No question found !');
        }

        return $this->render('questions/question.html.twig', [
            'question' => $question,
        ]);
    }
    #[IsGranted('ROLE_EDITOR')]
    #[Route('/questions', name: 'questions')]
    public function questions(Request $request, QuestionsRepository $questionsRepository): Response
    {
        $questions = $questionsRepository->findAll();
//
//        $difficultyLevel = $request->query->get('difficulty') ?? null;
//        $categories = $request->query->all('category');
//        $question = $questionsRepository->findRandomQuestionByFilters($difficultyLevel, $categories);
//
//        $answers = $question->getAnswers();
//        $answers->initialize();
//
//        if (!$question) {
//            return new Response('No question found.', 404);
//        }
//
//        if (!$answers) {
//            return new Response('No answers found.', 404);
//        }
//        dump($questions);

        return $this->render('questions/index.html.twig', [
            'questions' => $questions
        ]);

//        return $this->render('question.html.twig', [
//            'question' => $question,
//            'answers' => $answers
//        ]);
    }

    #[IsGranted('ROLE_EDITOR')]
//    #[Route('/question/{id}/edit', name: 'question_edit')]
    #[Route('/question/{id}/edit', name: 'question_edit', requirements: ['id' => '\d+'])]
    public function edit(Request $request, Questions $question, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(QuestionsFormType::class, $question);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            $this->addFlash('success', 'La question a été modifiée avec succès.');

            return $this->redirectToRoute('question_show', ['id' => $question->getId()]);
        }

        return $this->render('questions/edit.html.twig', [
            'question' => $question,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/question/new', name: 'question_new')]
    #[IsGranted('ROLE_USER')]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $question = new Questions();
        $form = $this->createForm(QuestionsFormType::class, $question);
//        $form->handleRequest($request);
//
//        if ($form->isSubmitted() && $form->isValid()) {
//            $entityManager->persist($question);
//            $entityManager->flush();
//
//            $this->addFlash('success', 'La question a été créée avec succès.');
//
//            return $this->redirectToRoute('question_show', ['id' => $question->getId()]);
//        }
//
        return $this->render('questions/new.html.twig', [
            'question' => $question,
            'form' => $form->createView(),
        ]);
    }
}
