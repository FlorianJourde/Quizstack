<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class LegalsController extends AbstractController
{

    #[Route('/legals', name: 'app_legals')]
    public function legals(): Response
    {
//        $categories = $categoriesRepository->findAll();
//        $categories = $categoriesRepository->findCategoriesByOrder();

        return $this->render('legals.html.twig');
    }
}