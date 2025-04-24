<?php

namespace App\Controller\Api;

use App\Entity\Comments;
use App\Entity\Users;
use App\Repository\CommentsRepository;
use App\Repository\QuestionsRepository;
use App\Service\CommentsFormatterService;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api', name: 'api_comments_')]
class CommentsApiController extends AbstractController
{
    private DateTimeImmutable $currentDate;
    private $security;

    public function __construct(Security $security)
    {
        $this->currentDate = new DateTimeImmutable();
        $this->security = $security;
    }

    #[Route('/question/{id}/comment/add', name: 'add_comment', methods: ['POST'])]
    public function addComment(
        QuestionsRepository    $questionsRepository,
        Request                $request,
        EntityManagerInterface $entityManager
    ): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $questionId = $data['questionId'] ?? null;
        $commentText = $data['content'];

        /* @var Users $user */
        $user = $this->getUser();
        $question = $questionsRepository->find($questionId);

        if (!$question) {
            return $this->json(['error' => 'Question not found'], 404);
        }

        $comment = new Comments();
        $comment->setContent($commentText);
        $comment->setUser($user);
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

    #[Route('/comment/{id}/edit', name: 'edit_comment', methods: ['PUT'])]
    public function editComment(
        Request                $request,
        EntityManagerInterface $entityManager,
        Comments               $comment
    ): JsonResponse
    {
        /* @var Users $user */
        $user = $this->getUser();
        $isAuthor = $user && $comment->getUser()->getId() === $user->getId();
        $isAdmin = $this->security->isGranted('ROLE_ADMIN');
        $canEditComment = $isAuthor || $isAdmin;

        $data = json_decode($request->getContent(), true);
        $content = $data['content'];

        if (!$canEditComment) {
            return $this->json(['error' => 'You cannot edit this comment.'], 403);
        }

        if (!$content || trim($content) === '') {
            return $this->json(['error' => 'Comment cannot be empty.'], 400);
        }

        $comment->setContent($content);
        $comment->setUpdateDate(new $this->currentDate);

        $entityManager->flush();

        return $this->json([
            'id' => $comment->getId(),
            'content' => $comment->getContent(),
            'creationDate' => $comment->getCreationDate(),
            'updateDate' => $comment->getUpdateDate(),
            'author' => [
                'id' => $user->getId(),
                'username' => $user->getUsername(),
                'image' => $user->getImage(),
            ]
        ]);
    }

    #[Route('/comment/{id}/delete', name: 'delete_comment', methods: ['DELETE'])]
    public function deleteComment(
        EntityManagerInterface $entityManager,
        Comments               $comment
    ): JsonResponse
    {
        /* @var Users $user */
        $user = $this->getUser();

        $isAuthor = $user && $comment->getUser()->getId() === $user->getId();
        $isAdmin = $this->security->isGranted('ROLE_ADMIN');
        $canDeleteComment = $isAuthor || $isAdmin;

        if (!$canDeleteComment) {
            return $this->json(['error' => 'You cannot delete this comment.'], 403);
        }

        $entityManager->remove($comment);
        $entityManager->flush();

        return $this->json([
            'success' => true,
            'message' => 'Comment deleted successfully',
            'commentId' => $comment->getId()
        ]);
    }

    #[Route('/comments/last', name: 'get_last_comments', methods: ['GET'])]
    public function getLastComments(
        CommentsRepository       $commentsRepository,
        CommentsFormatterService $formatterService
    ): JsonResponse
    {
        $comments = $commentsRepository->getLastComments();
        $commentsData = $formatterService->formatCommentsData($comments);

        return $this->json($commentsData);
    }
}