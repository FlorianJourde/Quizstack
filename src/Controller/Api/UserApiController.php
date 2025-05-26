<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api', name: 'api_user_')]
class UserApiController extends AbstractController
{
    #[Route('/user/current', name: 'get', methods: ['GET'])]
    public function getCurrentUser(): JsonResponse
    {
        $user = $this->getUser();

        if (!$user) {
            return $this->json(['error' => 'No logged user.']);
        }

        return $this->json([
            'success' => true,
            'id' => $user->getId(),
            'roles' => $user->getRoles()
        ]);
    }
}