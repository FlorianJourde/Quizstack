<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class QuizController extends AbstractController
{
    #[Route('/web-development-quiz', name: 'quiz')]
    public function question(): Response
    {
        return $this->render('quiz.html.twig', [
            'mode' => 'game',
        ]);
    }
}