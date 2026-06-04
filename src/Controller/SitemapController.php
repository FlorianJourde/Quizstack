<?php

namespace App\Controller;

use App\Repository\ArticleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SitemapController extends AbstractController
{
    #[Route('/sitemap.xml', name: 'sitemap')]
    public function index(ArticleRepository $articleRepository): Response
    {
        $articles = $articleRepository->findBy(
            ['status' => true],
            ['creationDate' => 'DESC']
        );

        $response = $this->render('sitemap.xml.twig', [
            'articles' => $articles,
        ]);

        $response->headers->set('Content-Type', 'application/xml');

        return $response;
    }
}