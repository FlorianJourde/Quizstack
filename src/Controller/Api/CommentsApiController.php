<?php

namespace App\Controller\Api;

use App\Entity\Comments;
use App\Repository\CommentsRepository;
use App\Repository\QuestionsRepository;
use App\Repository\UsersRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api', name: 'api_comments_')]
class CommentsApiController extends AbstractController
{

    private \DateTimeImmutable $currentDate;

    public function __construct()
    {
        // Initialise la DateTime une seule fois à la création du contrôleur
        $this->currentDate = new \DateTimeImmutable();
    }
    #[Route('/question/{id}/comment/add', name: 'add_comment', methods: ['POST'])]
    public function addComment(QuestionsRepository $questionsRepository, Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $questionId = $data['questionId'] ?? null;
        $user = $this->getUser();
        $commentText = $data['comment'];
        $question = $questionsRepository->find($questionId);

        if (!$question) {
            return $this->json(['error' => 'Question not found'], 404);
        }

        $comment = new Comments();
        $comment->setContent($commentText);
//        $comment->setUser($user);
        $comment->setUserId($user);
        $comment->setCreationDate($this->currentDate);
        $comment->setUpdateDate($this->currentDate);
        $question->addComment($comment);
        $entityManager->persist($comment);
        $entityManager->flush();

        return $this->json([
            'id' => $comment->getId(),
            'content' => $comment->getContent(),
            'creationDate' => $comment->getCreationDate(),
            'updateDate' => $comment->getUpdateDate(),
            'author' => [
                'id' => $user->getId(),
                'username' => $user->getUsername()
            ]
        ]);
    }

//    #[Route('/question/{id}/comment/add', name: 'add_comment', methods: ['POST'])]
//    public function addComment(QuestionsRepository $questionsRepository, Request $request): JsonResponse
//    {
//        $data = json_decode($request->getContent(), true);
//        $questionId = $data['questionId'] ?? null;
//        $user = $this->getUser();
//        $comment = $data['comment'];
//        $question = $questionsRepository->find($questionId);
//
//        $question->addComment($comment);
//
//        dump($question);
//        dump($data);
//        dump($comment);
//        dump($questionId);
//        dump($user);
//        die();
//
////        private ?int $id = null;
//        //    private ?Users $user = null;
//        //    private ?string $content = null;
//        //    private ?bool $status = true;
//        //    private ?\DateTimeImmutable $creation_date = null;
//        //    private ?\DateTimeImmutable $update_date = null;
//
////        $data = json_decode($request->getContent(), true);
////        $questionId = $data['questionId'] ?? null;
////        $answers = $data['answers'] ?? null;
////        $user = $this->getUser();
////
////        if ($answers === null) {
////            return $this->json(['error' => 'No answer provided'], 400);
////        }
////
////        $correctChoices = $choicesRepository->findCorrectAnswerIdsByQuestionId($questionId);
////        $diff1 = array_diff($correctChoices, $answers);
////        $diff2 = array_diff($answers, $correctChoices);
////
////        $match = (empty($diff1) && empty($diff2));
////
////        $question = $questionsRepository->find($questionId);
////
////        if ($user) {
////            $scoresService->setScores($user, $question->getDifficulty());
////        }
//
//        return $this->json([
//            'content' => $content,
//            'author' => $user
//        ]);
//    }

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