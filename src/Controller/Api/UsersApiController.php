<?php

namespace App\Controller\Api;

use App\Repository\ChoicesRepository;
use App\Repository\CommentsRepository;
use App\Repository\QuestionsRepository;
use App\Repository\UsersRepository;
use App\Service\QuestionFinderService;
use App\Service\QuestionFormatterService;
use App\Service\QuestionLimitService;
use App\Service\ScoresService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api', name: 'api_user_')]
class UsersApiController extends AbstractController
{
    #[Route('/user/current', name: 'get', methods: ['GET'])]
    public function getCurrentUser(
        Request                  $request,
//        QuestionFinderService    $finderService,
//        QuestionFormatterService $formatterService,
//        QuestionLimitService     $limitService
    ): JsonResponse
    {
        $user = $this->getUser();
//        $user->getId();

//        if (!$user || $comment->getUserId()->getId() !== $user->getId()) {
//            return $this->json(['error' => 'You cannot delete this comment.'], 403);
//        }

        if (!$user) {
            return $this->json(['error' => 'No logged user.'], 403);
        }

//        dump($user);
//        dump($user->getId());
//        die();

//        $entityManager->remove($comment);
//        $entityManager->flush();

        return $this->json([
            'success' => true,
            'id' => $user->getId()
//            'message' => 'Comment deleted successfully',
//            'commentId' => $comment->getId()
        ]);

//        return $this->json($user);
    }
}