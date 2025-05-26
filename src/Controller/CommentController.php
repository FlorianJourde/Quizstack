<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\CommentRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class CommentController extends AbstractController
{
    #[IsGranted('ROLE_USER')]
    #[Route('/comments', name: 'comments')]
    public function activity(
        Security               $security,
        Request                $request,
        CommentRepository $commentRepository
    ): Response
    {
        /* @var User $user */
        $user = $security->getUser();

        $offset = max(0, $request->query->getInt('offset', 0));
        $paginator = $commentRepository->getCommentPaginator($user, $offset);

        return $this->render('comments.html.twig', [
            'comments' => $paginator,
            'previous' => $offset - CommentRepository::COMMENTS_PER_PAGE,
            'next' => min(count($paginator), $offset + CommentRepository::COMMENTS_PER_PAGE),
        ]);
    }
}