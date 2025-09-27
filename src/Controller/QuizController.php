<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class QuizController extends AbstractController
{
    #[Route('/web-development-quiz', name: 'quiz')]
    public function question(Request $request): Response
    {
        $currentUrl = $request->getRequestUri();

        if (str_contains($currentUrl, '%5B') || str_contains($currentUrl, '%5D')) {
            $cleanUrl = str_replace(['%5B', '%5D'], ['[', ']'], $currentUrl);
            return $this->redirect($cleanUrl, 301);
        }

        return $this->render('quiz.html.twig', [
            'mode' => 'game',
        ]);
    }
}