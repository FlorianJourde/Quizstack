<?php

namespace App\Service;

use App\Entity\Questions;
use App\Repository\ChoicesRepository;
use App\Repository\QuestionsRepository;
use App\Repository\UsersRepository;

class QuestionFormatterService
{
    public function __construct(
        private UsersRepository $usersRepository,
        private ChoicesRepository $choicesRepository,
        private QuestionsRepository $questionsRepository
    ) {}

    public function formatQuestionData(Questions $question): array
    {
        $choiceArray = [];
        foreach ($question->getChoices() as $choice) {
            $choiceArray[] = [
                'id' => $choice->getId(),
                'content' => $choice->getContent()
            ];
        }

        $commentArray = [];
        foreach ($question->getComments() as $comment) {
            $userId = $comment->getUserId();
            $user = $userId ? $this->usersRepository->find($userId) : null;

            $commentArray[] = [
                'id' => $comment->getId(),
                'content' => $comment->getContent(),
                'creationDate' => $comment->getCreationDate(),
                'author' => $user ? [
                    'id' => $user->getId(),
                    'email' => $user->getEmail(),
                    'username' => $user->getUsername(),
                ] : [
                    'username' => 'Anonyme',
                ],
            ];
        }

        $numberOfCorrectChoices = count(
            $this->choicesRepository->findCorrectAnswerIdsByQuestionId($question->getId())
        );

        return [
            'id' => $question->getId(),
            'content' => $question->getContent(),
            'difficulty' => $question->getDifficulty(),
            'choices' => $choiceArray,
            'explanation' => $this->questionsRepository->findExplanationByQuestionId($question->getId()),
            'comments' => $commentArray,
            'numberOfCorrectChoices' => $numberOfCorrectChoices
        ];
    }
}