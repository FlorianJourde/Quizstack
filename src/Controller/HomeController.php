<?php

namespace App\Controller;

use App\Repository\CategoriesRepository;
use App\Repository\QuestionsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(CategoriesRepository $categoriesRepository, QuestionsRepository $questionsRepository): Response
    {
        $categories = $categoriesRepository->findAll();
//        $difficulty = $questionsRepository->findQuestionsDifficulties();

//        dump($difficulty);

//        return new Response(
//            '<html><body>Home</body></html>'
//        );

        return $this->render('index.html.twig', [
            'categories' => $categories
//            'difficulty' => $difficulty
        ]);
    }
}