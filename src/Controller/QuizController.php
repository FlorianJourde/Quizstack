<?php

namespace App\Controller;

use App\Repository\QuestionsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class QuizController extends AbstractController
{
    #[Route('/quiz', name: 'quiz')]
    public function question(Request $request, QuestionsRepository $questionsRepository): Response
    {
        return $this->render('quiz.html.twig', [
            'mode' => 'game',
        ]);
    }
}