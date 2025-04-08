<?php

namespace App\Controller\Api;

use App\Entity\Choices;
use App\Repository\ChoicesRepository;
use App\Repository\CommentsRepository;
use App\Repository\QuestionsRepository;
use App\Repository\UsersRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api', name: 'api_question_')]
class QuestionsApiController extends AbstractController
{
    #[Route('/question', name: 'get', methods: ['GET'])]
    public function getQuestion(Request $request, QuestionsRepository $questionsRepository, ChoicesRepository $choicesRepository, CommentsRepository $commentsRepository, UsersRepository $usersRepository): JsonResponse
    {
        $difficultyLevel = $request->query->get('difficulty') ?? null;
        $categories = $request->query->all('category');
        $question = $questionsRepository->findRandomQuestionByFilters($difficultyLevel, $categories);

        if (!$question) {
            return new JsonResponse('No question found.', 404);
        }

        $choices = $question->getChoices();
        $choiceArray = [];
        foreach ($choices as $choice) {
            $choiceArray[] = [
                'id' => $choice->getId(),
                'content' => $choice->getContent()
            ];
        }

//        $comments = $commentsRepository->findCommentsByQuestionId($question->getId());
        $comments = $question->getComments();
        $commentArray = [];
        foreach ($comments as $comment) {
            $userId = $comment->getUserId();
            $user = $userId ? $usersRepository->find($userId) : null;

            $commentArray[] = [
                'id' => $comment->getId(),
                'content' => $comment->getContent(),
                'creation_date' => $comment->getCreationDate(),
                'author' => $user ? [
                    'id' => $user->getId(),
                    'email' => $user->getEmail(),
                    'username' => $user->getUsername(),
                ] : [
                    'username' => 'Anonyme',
                ],
            ];
        }

        return $this->json([
            'id' => $question->getId(),
            'content' => $question->getContent(),
            'difficulty' => $question->getDifficulty(),
            'choices' => $choiceArray,
            'explanation' => $questionsRepository->findExplanationByQuestionId($question->getId()),
            'comments' => $commentArray
        ]);
    }

    #[Route('/question/{id}/check', name: 'check_answers', methods: ['POST'])]
    public function checkAnswers(ChoicesRepository $choicesRepository, QuestionsRepository $questionsRepository, Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $questionId = $data['questionId'] ?? null;
        $answers = $data['answers'] ?? null;

        if ($answers === null) {
            return $this->json(['error' => 'No answer provided'], 400);
        }

        $correctChoices = $choicesRepository->findCorrectAnswerIdsByQuestionId($questionId);
        $diff1 = array_diff($correctChoices, $answers);
        $diff2 = array_diff($answers, $correctChoices);

        $match = (empty($diff1) && empty($diff2));

        return $this->json([
            'correct' => $match,
            'correctChoices' => $correctChoices
        ]);
    }
}