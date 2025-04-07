<?php

namespace App\Controller;

use App\Repository\QuestionsRepository;
use App\Utils\EnumUtility;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

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

        return $this->render('questions.html.twig', [
            'questions' => $questions
        ]);

//        return $this->render('question.html.twig', [
//            'question' => $question,
//            'answers' => $answers
//        ]);
    }


    #[Route('/question/{id}', name: 'question')]
    public function user(int $id, QuestionsRepository $questionsRepository): Response
    {
//        $id = 232;
        $question = $questionsRepository->find($id);

        if (!$question) {
            throw $this->createNotFoundException('No question found !');
        }

        return $this->render('question.html.twig', [
            'question' => $question,
        ]);
    }
}
