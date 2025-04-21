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
        $scores = $scoresRepository->findScoreWithLimit(20, 'Anonymous');

        return $this->render('scores.html.twig', [
            'scores' => $scores
        ]);
    }
}