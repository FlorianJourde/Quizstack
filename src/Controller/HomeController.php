<?php

namespace App\Controller;

use App\Repository\ArticleRepository;
use App\Repository\CategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(CategoryRepository $categoryRepository, ArticleRepository $articleRepository): Response
    {
        $categories = $categoryRepository->findCategoriesByOrder(true);

        $articles = $articleRepository->findBy(
            ['status' => true],
            ['creationDate' => 'DESC'],
            3
        );

        return $this->render('index.html.twig', [
            'categories' => $categories,
            'articles' => $articles,
        ]);
    }
}