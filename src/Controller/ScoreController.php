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
        $excludedUsernames = ['Anonymous', 'User', 'Editor', 'Ctrl_FJ'];

        $allTimeScore = $scoreRepository->findScoreWithLimit(12, 'all_time', $excludedUsernames);
        $weeklyScores = $scoreRepository->findScoreWithLimit(12, 'week', $excludedUsernames);
        $monthlyScores = $scoreRepository->findScoreWithLimit(12, 'month', $excludedUsernames);

        return $this->render('scores.html.twig', [
            'allTimeScores' => $allTimeScore,
            'monthlyScores' => $monthlyScores,
            'weeklyScores' => $weeklyScores,
        ]);
    }
}