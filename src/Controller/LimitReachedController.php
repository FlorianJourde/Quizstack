<?php

namespace App\Controller;

use App\Repository\CategoriesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class LimitReachedController extends AbstractController
{
    #[Route('/limit-reached', name: 'app_limit_reached')]
    public function index(CategoriesRepository $categoriesRepository): Response
    {
//        $categories = $categoriesRepository->findAll();

        return $this->render('limit-reached.html.twig', [
//            'categories' => $categories
        ]);
    }
}