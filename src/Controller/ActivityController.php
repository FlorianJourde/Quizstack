<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ActivityController extends AbstractController
{
    #[Route('/activity', name: 'activity')]
    public function activity(): Response
    {
        return $this->render('activity.html.twig', [
            'mode' => 'display',
        ]);
    }
}