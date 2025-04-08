<?php

namespace App\Controller\Api;

use App\Repository\AnswersRepository;
use App\Repository\QuestionsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api', name: 'api_question_')]
class QuestionsApiController extends AbstractController
{
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
            'answers' => $answerArray,
        ]);
    }

    #[Route('/question/{id}/check', name: 'check_answer', methods: ['POST'])]
    public function checkAnswer(AnswersRepository $answersRepository, QuestionsRepository $questionsRepository, Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $questionId = $data['questionId'] ?? null;
        $userAnswer = $data['answer'] ?? null;

        if ($userAnswer === null) {
            return $this->json(['error' => 'No answer provided'], 400);
        }

        $correctAnswer = $answersRepository->findCorrectAnswerIdsByQuestionId($questionId);
        $diff1 = array_diff($correctAnswer, $userAnswer);
        $diff2 = array_diff($userAnswer, $correctAnswer);

        $match = (empty($diff1) && empty($diff2));
        $explanation = $questionsRepository->findExplanationByQuestionId($questionId);

        return $this->json([
            'correct' => $match,
            'explanation' => $explanation,
            'correctAnswer' => $correctAnswer
        ]);
    }
}