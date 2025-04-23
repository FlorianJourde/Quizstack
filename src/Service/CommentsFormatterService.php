<?php

namespace App\Service;

use App\Entity\Questions;
use App\Repository\ChoicesRepository;
use App\Repository\QuestionsRepository;
use App\Repository\UsersRepository;

class CommentsFormatterService
{
    public function __construct(
        private UsersRepository     $usersRepository,
        private ChoicesRepository   $choicesRepository,
        private QuestionsRepository $questionsRepository
    )
    {
    }

    public function formatCommentsData($comments): array
    {
//        $choiceArray = [];
//        foreach ($question->getChoices() as $choice) {
//            $choiceArray[] = [
//                'id' => $choice->getId(),
//                'content' => $choice->getContent()
//            ];
//        }

        $commentArray = [];
        foreach ($comments as $comment) {
            $userId = $comment->getUser();
            $user = $userId ? $this->usersRepository->find($userId) : null;
//$comment;


            $commentArray[] = [
                'id' => $comment->getId(),
                'content' => $comment->getContent(),
                'creationDate' => $comment->getCreationDate(),
                'questionId' => $comment->getQuestion()->getId(),
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

        return [
            'comments' => $commentArray,
        ];
    }
}