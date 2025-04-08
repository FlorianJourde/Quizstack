<?php

namespace App\Controller\Api;

use App\Repository\CommentsRepository;
use App\Repository\UsersRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api', name: 'api_question_')]
class CommentsApiController extends AbstractController
{
//    #[Route('/question/{id}/comments', name: 'get_comments', methods: ['GET'])]
//    public function getCommentsByQuestionId(int $id, CommentsRepository $commentsRepository, UsersRepository $usersRepository): JsonResponse
//    {
////        $comments = $commentsRepository->findCommentsByQuestionId($id);
////
////        if (!$comments) {
////            return new JsonResponse('No question found.', 404);
////        }
////
////        $commentArray = [];
////        foreach ($comments as $comment) {
////            $userId = $comment->getUserId();
////            $user = $userId ? $usersRepository->find($userId) : null;
////
////            $commentArray[] = [
////                'id' => $comment->getId(),
////                'content' => $comment->getContent(),
////                'creation_date' => $comment->getCreationDate(),
////                'author' => $user ? [
////                    'id' => $user->getId(),
////                    'email' => $user->getEmail(),
////                    'username' => $user->getUsername(),
////                ] : [
////                    'username' => 'Anonyme',
////                ],
////            ];
////        }
//
////        return $this->json($commentArray);
//    }
}