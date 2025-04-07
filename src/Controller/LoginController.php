<?php

namespace App\Controller;

use App\Repository\QuestionsRepository;
use App\Utils\EnumUtility;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class LoginController extends AbstractController
{
    #[Route('/login', name: 'login')]
    public function question(Request $request, QuestionsRepository $questionsRepository): Response
    {

        return $this->render('login.html.twig');
    }
}