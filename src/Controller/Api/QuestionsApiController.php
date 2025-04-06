<?php

namespace App\Controller\Api;

//use App\Entity\Question;
use App\Entity\Questions;
use App\Repository\QuestionRepository;
use App\Repository\QuestionsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
//use Symfony\Component\HttpFoundation\Request;
//use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

//#[Route('/api/question', name: 'api_question_')]
#[Route('/api', name: 'api_question_')]
class QuestionsApiController extends AbstractController
{

//    #[Route('/{id}', name: 'get', methods: ['GET'])]
    #[Route('/question', name: 'get', methods: ['GET'])]
    public function getQuestion(Request $request, QuestionsRepository $questionsRepository): JsonResponse
    {

        $difficultyLevel = $request->query->get('difficulty') ?? null;
        $categories = $request->query->all('category');
        $question = $questionsRepository->findRandomQuestionByFilters($difficultyLevel, $categories);

//        dump($difficultyLevel);
//        dump($categories);
//        die();

        if (!$question) {
            return new JsonResponse('No question found.', 404);
        }

        $answers = $question->getAnswers();
        $answers->initialize();

        if (!$answers) {
            return new JsonResponse('No answers found.', 404);
        }

        $answerArray = [];
        foreach ($answers as $answer) {
            $answerArray[] = [
                'id' => $answer->getId(),
                'content' => $answer->getContent()
            ];
        }

        return $this->json([
            'id' => $question->getId(),
            'content' => $question->getContent(),
            'difficulty' => $question->getDifficulty(),
//            'categories' => array_map(function ($category) {
//                return $category->getName();
//            }, $question->getCategories()->toArray()),
            'answers' => $answerArray,
        ]);
    }

//    #[Route('/{id}/check', name: 'check_answer', methods: ['POST'])]
//    public function checkAnswer(Questions $question, Request $request): JsonResponse
//    {
//        $data = json_decode($request->getContent(), true);
//        $userAnswer = $data['answer'] ?? null;
//
//        if ($userAnswer === null) {
//            return $this->json(['error' => 'No answer provided'], 400);
//        }
//
//        // Logique pour vérifier si la réponse est correcte
//        $correctAnswer = $question->getCorrectAnswer();
//        $isCorrect = $userAnswer === $correctAnswer;
//
//        return $this->json([
//            'correct' => $isCorrect,
//            'explanation' => $isCorrect || true ? $question->getExplanation() : null, // On envoie toujours l'explication dans cet exemple
//            'correctAnswer' => $correctAnswer
//        ]);
//    }

//    #[\Symfony\Component\Routing\Attribute\Route('/{id}', name: 'question')]
//    public function index(Request $request, QuestionsRepository $questionsRepository): Response
//    {
//
//        $difficultyLevel = $request->query->get('difficulty') ?? null;
//        $categories = $request->query->all('category');
////        $categories = $categoriesString ? explode(',', $categoriesString) : [];
////        dump($difficultyLevel);
////        die();
//
//        $question = $questionsRepository->findRandomQuestionByFilters($difficultyLevel, $categories);
//
//        $answers = $question->getAnswers();
//        $answers->initialize();
//
////        dump($question);
////        dump($answers);
//
//        if (!$question) {
//            return new Response('No question found.', 404);
//        }
//
//        if (!$answers) {
//            return new Response('No answers found.', 404);
//        }
//
//        return $this->render('question.html.twig', [
//            'question' => $question,
//            'answers' => $answers
//        ]);
//    }
}