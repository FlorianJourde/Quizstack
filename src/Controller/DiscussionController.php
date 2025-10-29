<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class DiscussionController extends AbstractController
{
    #[Route('/discussions', name: 'discussions')]
    public function discussions(): Response
    {
        return $this->render('discussions.html.twig', [
            'mode' => 'display',
        ]);
    }
}