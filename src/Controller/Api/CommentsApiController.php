<?php

namespace App\Controller\Api;

//use App\Entity\Question;
use App\Entity\Questions;
use App\Repository\AnswersRepository;
use App\Repository\CommentsRepository;
use App\Repository\QuestionRepository;
use App\Repository\QuestionsRepository;
use App\Repository\UsersRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

//use Symfony\Component\HttpFoundation\Request;
//use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

//#[Route('/api/question', name: 'api_question_')]
#[Route('/api', name: 'api_question_')]
class CommentsApiController extends AbstractController
{

//    #[Route('/{id}', name: 'get', methods: ['GET'])]
    #[Route('/comment', name: 'get', methods: ['GET'])]
    public function getComment(Request $request, QuestionsRepository $questionsRepository): JsonResponse
    {
        return $this->json([
        ]);
    }

    #[Route('/question/{id}/comments', name: 'get_comments', methods: ['GET'])]
    public function getCommentsByQuestionId(int $id, CommentsRepository $commentsRepository, UsersRepository $usersRepository, QuestionsRepository $questionsRepository): JsonResponse
    {
        $comments = $commentsRepository->findCommentsByQuestionId($id);
//        $user = $usersRepository->find($comment->getUserId());

        if (!$comments) {
            return new JsonResponse('No question found.', 404);
        }

        $commentArray = [];
        foreach ($comments as $comment) {
            $userId = $comment->getUserId();
            $user = $userId ? $usersRepository->find($userId) : null;

//            $user = $usersRepository->find($comment->getUserId());

//             $user = $comment->getUser();

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

        return $this->json($commentArray);
    }
}