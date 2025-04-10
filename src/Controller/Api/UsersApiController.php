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
        Request                  $request
    ): JsonResponse
    {
        $user = $this->getUser();

        if (!$user) {
            return $this->json(['error' => 'No logged user.']);
        }

        return $this->json([
            'success' => true,
            'id' => $user->getId()
        ]);

//        return $this->json($user);
    }
}