<?php

namespace App\Controller;

use App\Repository\CategoriesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(CategoriesRepository $categoriesRepository): Response
    {
        $categories = $categoriesRepository->findAll();

        return $this->render('index.html.twig', [
            'categories' => $categories
        ]);
    }
}