<?php

namespace App\Controller;

use App\Repository\ScoresRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ScoresController extends AbstractController
{
    #[Route('/hall-of-fame', name: 'scores')]
    public function users(ScoresRepository $scoresRepository): Response
    {
        $allTimeScore = $scoresRepository->findScoreWithLimit(20, 'all_time', ['Anonymous', 'User', 'Editor']);
        $weeklyScores = $scoresRepository->findScoreWithLimit(20, 'week', ['Anonymous', 'User', 'Editor']);
        $monthlyScores = $scoresRepository->findScoreWithLimit(20, 'month', ['Anonymous', 'User', 'Editor']);

        return $this->render('scores.html.twig', [
            'allTimeScores' => $allTimeScore,
            'monthlyScores' => $monthlyScores,
            'weeklyScores' => $weeklyScores,
        ]);
    }
}