<?php

namespace App\Service;

use App\Entity\Questions;
use App\Repository\ChoicesRepository;
use App\Repository\QuestionsRepository;
use App\Repository\UsersRepository;

class QuestionFormatterService
{
    public function __construct(
        private UsersRepository     $usersRepository,
        private ChoicesRepository   $choicesRepository,
        private QuestionsRepository $questionsRepository
    )
    {
    }

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
            $userId = $comment->getUser();
            $user = $userId ? $this->usersRepository->find($userId) : null;

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
            $this->choicesRepository->findCorrectAnswerIdsByQuestionId($question->getId())
        );

        return [
            'id' => $question->getId(),
            'categories' => $categoriesArray,
            'choices' => $choiceArray,
            'comments' => $commentArray,
            'content' => $question->getContent(),
            'difficulty' => $question->getDifficulty(),
            'explanation' => $this->questionsRepository->findExplanationByQuestionId($question->getId()),
            'image' => $question->getImage(),
            'numberOfCorrectChoices' => $numberOfCorrectChoices
        ];
    }
}