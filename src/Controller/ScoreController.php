<?php

namespace App\Controller;

use App\Repository\ScoreRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ScoreController extends AbstractController
{
    #[Route('/hall-of-fame', name: 'scores')]
    public function users(ScoreRepository $scoreRepository): Response
    {
        $allTimeScore = $scoreRepository->findScoreWithLimit(20, 'all_time', ['Anonymous', 'User', 'Editor']);
        $weeklyScores = $scoreRepository->findScoreWithLimit(20, 'week', ['Anonymous', 'User', 'Editor']);
        $monthlyScores = $scoreRepository->findScoreWithLimit(20, 'month', ['Anonymous', 'User', 'Editor']);

        return $this->render('scores.html.twig', [
            'allTimeScores' => $allTimeScore,
            'monthlyScores' => $monthlyScores,
            'weeklyScores' => $weeklyScores,
        ]);
    }
}