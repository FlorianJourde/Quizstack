<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;

class QuestionLimitService
{
    private const MAX_QUESTIONS = 10;
    private const COOKIE_NAME = 'viewed_questions_count';
//    private const COOKIE_DURATION = 24 * 60 * 60;
    private const COOKIE_DURATION = 60;

    public function __construct(
        private Security $security
    ) {}

    public function isLimitReached(Request $request): bool
    {
        if ($this->security->getUser()) {
            return false;
        }

        $viewedQuestions = (int)$request->cookies->get(self::COOKIE_NAME, 0);
        return $viewedQuestions >= self::MAX_QUESTIONS;
    }

    public function getLimitResponse(): JsonResponse
    {
        return new JsonResponse([
            'questionLimitReached' => true,
//            'message' => 'Vous avez atteint la limite de questions pour les utilisateurs non connectés.'
        ], 403);
    }

//    public function getLimitResponse(): RedirectResponse
//    {
//        // Rediriger vers la route qui affiche votre template limit-reached.html.twig
//        return new RedirectResponse($this->urlGenerator->generate('limit_reached'));
//    }


    public function createResponseWithCookie(array $data, Request $request): JsonResponse
    {
        $viewedQuestions = (int)$request->cookies->get(self::COOKIE_NAME, 0);
        $response = new JsonResponse($data);

        $response->headers->setCookie(
            new Cookie(
                self::COOKIE_NAME,
                $viewedQuestions + 1,
                time() + self::COOKIE_DURATION
            )
        );

        return $response;
    }
}