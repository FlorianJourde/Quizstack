<?php

namespace App\Controller;

use App\Repository\CategoriesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class CategoriesController extends AbstractController
{
    #[IsGranted('ROLE_ADMIN')]
    #[Route('/categories/edit', name: 'categories_edit')]
    public function edit(CategoriesRepository $categoriesRepository): Response
    {
        $categories = $categoriesRepository->findAll();

        return $this->render('categories/edit.html.twig', [
            'categories' => $categories,
        ]);
    }

    #[IsGranted('ROLE_ADMIN')]
    #[Route('/categories', name: 'categories')]
    public function users(CategoriesRepository $categoriesRepository): Response
    {
        $categories = $categoriesRepository->findAll();

        return $this->render('categories/index.html.twig', [
            'categories' => $categories
        ]);
    }
}