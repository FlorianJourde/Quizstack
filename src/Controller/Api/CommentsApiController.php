<?php

namespace App\Controller\Api;

use App\Entity\Comments;
use App\Repository\QuestionsRepository;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api', name: 'api_comments_')]
class CommentsApiController extends AbstractController
{
    private DateTimeImmutable $currentDate;

    public function __construct()
    {
        $this->currentDate = new DateTimeImmutable();
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
}