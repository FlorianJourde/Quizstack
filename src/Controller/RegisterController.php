<?php

namespace App\Controller;

use App\Repository\QuestionsRepository;
use App\Utils\EnumUtility;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class RegisterController extends AbstractController
{
    #[Route('/register', name: 'register')]
    public function question(Request $request, QuestionsRepository $questionsRepository): Response
    {

        return $this->render('register.html.twig');
    }
}