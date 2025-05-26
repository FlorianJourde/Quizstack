<?php

namespace App\Service;

use App\Entity\Question;
use App\Repository\ChoiceRepository;
use App\Repository\QuestionRepository;
use App\Repository\UserRepository;

class QuestionFormatterService
{
    public function __construct(
        private UserRepository      $userRepository,
        private ChoiceRepository    $choiceRepository,
        private QuestionRepository $questionRepository
    )
    {
    }

    public function formatQuestionData(Question $question): array
    {
        $choiceArray = [];
        foreach ($question->getChoice() as $choice) {
            $choiceArray[] = [
                'id' => $choice->getId(),
                'content' => $choice->getContent()
            ];
        }

        $commentArray = [];
        foreach ($question->getComments() as $comment) {
            $userId = $comment->getUser();
            $user = $userId ? $this->userRepository->find($userId) : null;

            $commentArray[] = [
                'id' => $comment->getId(),
                'content' => $comment->getContent(),
                'creationDate' => $comment->getCreationDate(),
                'author' => $user ? [
                    'id' => $user->getId(),
                    'email' => $user->getEmail(),
                    'username' => $user->getUsername(),
                    'image' => $user->getImage(),
                ] : [
                    'username' => 'Anonyme',
                ],
            ];
        }

        $categoriesArray = [];
        foreach ($question->getCategories() as $category) {
            $categoriesArray[] = [
                'id' => $category->getId(),
                'name' => $category->getName()
            ];
        }

        $numberOfCorrectChoices = count(
            $this->choiceRepository->findCorrectAnswerIdsByQuestionId($question->getId())
        );

        return [
            'id' => $question->getId(),
            'categories' => $categoriesArray,
            'choices' => $choiceArray,
            'comments' => $commentArray,
            'content' => $question->getContent(),
            'difficulty' => $question->getDifficulty(),
            'explanation' => $this->questionRepository->findExplanationByQuestionId($question->getId()),
            'image' => $question->getImage(),
            'numberOfCorrectChoices' => $numberOfCorrectChoices
        ];
    }
}