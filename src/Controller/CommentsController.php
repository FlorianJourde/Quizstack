<?php

namespace App\Controller;

use App\Entity\Users;
use App\Repository\CommentsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class CommentsController extends AbstractController
{
    #[IsGranted('ROLE_USER')]
    #[Route('/comments', name: 'comments')]
    public function activity(
        Security               $security,
        Request                $request,
        CommentsRepository     $commentsRepository
    ): Response
    {
        /* @var Users $user */
        $user = $security->getUser();

        $offset = max(0, $request->query->getInt('offset', 0));
        $paginator = $commentsRepository->getCommentPaginator($user, $offset);

        return $this->render('comments.html.twig', [
            'comments' => $paginator,
            'previous' => $offset - CommentsRepository::COMMENTS_PER_PAGE,
            'next' => min(count($paginator), $offset + CommentsRepository::COMMENTS_PER_PAGE),
        ]);
    }
}