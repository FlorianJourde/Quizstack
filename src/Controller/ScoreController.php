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
        $allTimeScore = $scoreRepository->findScoreWithLimit(12, 'all_time', ['Anonymous', 'User', 'Editor']);
        $weeklyScores = $scoreRepository->findScoreWithLimit(12, 'week', ['Anonymous', 'User', 'Editor']);
        $monthlyScores = $scoreRepository->findScoreWithLimit(12, 'month', ['Anonymous', 'User', 'Editor']);

        return $this->render('scores.html.twig', [
            'allTimeScores' => $allTimeScore,
            'monthlyScores' => $monthlyScores,
            'weeklyScores' => $weeklyScores,
        ]);
    }
}