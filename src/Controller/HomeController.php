<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function list(): Response
    {
//        return new Response(
//            '<html><body>Home</body></html>'
//        );

        return $this->render('base.html.twig');
    }
}