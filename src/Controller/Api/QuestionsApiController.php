<?php

namespace App\Controller\Api;

//use App\Entity\Question;
use App\Entity\Questions;
use App\Repository\AnswersRepository;
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

    #[Route('/question/{id}/check', name: 'check_answer', methods: ['POST'])]
    public function checkAnswer(/*Questions $question*/ AnswersRepository $answersRepository, QuestionsRepository $questionsRepository, Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $questionId = $data['questionId'] ?? null;
        $userAnswer = $data['answer'] ?? null;

//        $questionId = json_decode($request->getContent(), true);

//        dump($questionId);
//        dump($userAnswer);
//        dump($request);
//        die();

        if ($userAnswer === null) {
            return $this->json(['error' => 'No answer provided'], 400);
        }

//        $correctAnswer = $question->getCorrectAnswer();
//        $isCorrect = $userAnswer === $correctAnswer;
//        $correctAnswer = $questionsRepository->findAnswersByQuestionId($questionId);
        $correctAnswer = $answersRepository->findCorrectAnswerIdsByQuestionId($questionId);
//        dump($correctAnswer);
//        dump($userAnswer);
//        $match = ($correctAnswer == $userAnswer);
//        dump($match);

        $diff1 = array_diff($correctAnswer, $userAnswer);
        $diff2 = array_diff($userAnswer, $correctAnswer);

        $match = (empty($diff1) && empty($diff2));
        $explanation = $questionsRepository->findExplanationByQuestionId($questionId);

//        dump($match);
//        dump($explanation);
//        die();

//        dump($diff1);
//        dump($diff2);
//        dump($match);
//
//        die();

        return $this->json([
            'correct' => $match,
//            'explanation' => $match || true ? $questionId->getExplanation() : null,
//            'explanation' => $match || true ? $questionId->getExplanation() : null,
            'explanation' => $explanation,
            'correctAnswer' => $correctAnswer
        ]);
    }

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