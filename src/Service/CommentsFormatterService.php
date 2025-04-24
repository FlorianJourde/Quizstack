<?php

namespace App\Service;

use App\Repository\UsersRepository;

class CommentsFormatterService
{
    public function __construct(
        private UsersRepository $usersRepository
    )
    {
    }

    public function formatCommentsData($comments): array
    {
        $commentArray = [];
        foreach ($comments as $comment) {
            $userId = $comment->getUser();
            $user = $userId ? $this->usersRepository->find($userId) : null;

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