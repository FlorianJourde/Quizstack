<?php

namespace App\Controller;

use App\Repository\CategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class FiltersController extends AbstractController
{
    #[Route('/filters', name: 'app_filters')]
    public function index(CategoryRepository $categoryRepository): Response
    {
        $categories = $categoryRepository->findCategoriesByOrder(true);

        return $this->render('filters.html.twig', [
            'categories' => $categories
        ]);
    }
}