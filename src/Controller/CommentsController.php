<?php

namespace App\Controller;

use App\Entity\Comments;
use App\Entity\Users;
use App\Repository\CommentsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class CommentsController extends AbstractController
{
    #[IsGranted('ROLE_USER')]
    #[Route('/activity', name: 'activity')]
    public function activity(
        Security               $security,
        Request                $request,
        EntityManagerInterface $entityManager,
        CommentsRepository     $commentsRepository
    ): Response
    {
        /* @var Users $user */
        $user = $security->getUser();

        $offset = max(0, $request->query->getInt('offset', 0));
        $paginator = $commentsRepository->getCommentPaginator($user, $offset);

        return $this->render('activity.html.twig', [
            'comments' => $paginator,
            'previous' => $offset - CommentsRepository::COMMENTS_PER_PAGE,
            'next' => min(count($paginator), $offset + CommentsRepository::COMMENTS_PER_PAGE),
        ]);
    }

//    #[IsGranted('ROLE_USER')]
//    #[Route('/activity/{id}', name: 'activity')]
//    public function activity(
//        Request $request,
//        Environment $twig,
//        Users $user,
//        CommentsRepository $commentRepository
//    ): Response
//    {
//        $offset = max(0, $request->query->getInt('offset', 0));
//        $paginator = $commentRepository->getCommentPaginator($user, $offset);
//
////        foreach ($paginator as $comment) {
////            $entityManager->initializeObject($comment->getUser());
////            $entityManager->initializeObject($comment->getQuestion());
////        }
////        dump($paginator);
////        dump($paginator->getItems());
////        die();
//
////        echo $paginator->count();
////        echo $page;
////        echo $limit;
//
////        return $this->render('activity.html.twig', [
//        return new Response($twig->render('activity.html.twig', [
//            'comments' => $paginator,
//            'previous' => $offset - CommentsRepository::COMMENTS_PER_PAGE,
//            'next' => min(count($paginator), $offset + CommentsRepository::COMMENTS_PER_PAGE),
//        ]));
//    }

//    #[IsGranted('ROLE_USER')]
//    #[Route('/activity/{page}/{limit}', name: 'activity')]
//    public function question(
//        Security               $security,
//        Request                $request,
//        EntityManagerInterface $entityManager,
//        int                    $page = 1,
//        int                    $limit = 100
//    ): Response
//    {
//        /* @var Users $user */
//        $user = $security->getUser();
//
//        /* @var CommentsRepository $commentRepository */
//        $commentRepository = $entityManager->getRepository(Comments::class);
//        $paginator = $commentRepository->getAllPaginate($page, $limit, $user->getId());
//
////        foreach ($paginator as $comment) {
////            $entityManager->initializeObject($comment->getUser());
////            $entityManager->initializeObject($comment->getQuestion());
////        }
////        dump($paginator);
////        dump($paginator->getItems());
////        die();
//
////        echo $paginator->count();
////        echo $page;
////        echo $limit;
//
//        return $this->render('activity.html.twig', [
//            'comments' => $paginator,
//        ]);
//    }
}