<?php

namespace App\Controller;

use App\Repository\ScoresRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ScoresController extends AbstractController
{
    #[Route('/scores', name: 'scores')]
    public function users(ScoresRepository $scoresRepository): Response
    {
        $allTimeScore = $scoresRepository->findScoreWithLimit(20);
        $weeklyScores = $scoresRepository->findScoreWithLimit(20, 'week');
        $monthlyScores = $scoresRepository->findScoreWithLimit(20, 'month');

        return $this->render('scores.html.twig', [
            'allTimeScores' => $allTimeScore,
            'monthlyScores' => $monthlyScores,
            'weeklyScores' => $weeklyScores,
        ]);
    }
}