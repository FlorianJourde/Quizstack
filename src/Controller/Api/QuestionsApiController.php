<?php

namespace App\Controller\Api;

//use App\Entity\Question;
use App\Entity\Questions;
use App\Repository\QuestionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/question', name: 'api_question_')]
class QuestionsApiController extends AbstractController
{
    #[Route('/{id}/check', name: 'check_answer', methods: ['POST'])]
    public function checkAnswer(Questions $question, Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $userAnswer = $data['answer'] ?? null;

        if ($userAnswer === null) {
            return $this->json(['error' => 'No answer provided'], 400);
        }

        // Logique pour vérifier si la réponse est correcte
        $correctAnswer = $question->getCorrectAnswer();
        $isCorrect = $userAnswer === $correctAnswer;

        return $this->json([
            'correct' => $isCorrect,
            'explanation' => $isCorrect || true ? $question->getExplanation() : null, // On envoie toujours l'explication dans cet exemple
            'correctAnswer' => $correctAnswer
        ]);
    }

    #[Route('/{id}', name: 'get', methods: ['GET'])]
    public function getQuestion(Question $question): JsonResponse
    {
        return $this->json([
            'id' => $question->getId(),
            'title' => $question->getTitle(),
            'content' => $question->getContent(),
            'difficulty' => $question->getDifficulty(),
            'categories' => array_map(function ($category) {
                return $category->getName();
            }, $question->getCategories()->toArray()),
            'answers' => $question->getAnswers(),
// Ne pas inclure l'explication ici
        ]);
    }
}