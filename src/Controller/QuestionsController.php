<?php

namespace App\Controller;

use App\Repository\QuestionsRepository;
use App\Utils\EnumUtility;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class QuestionsController extends AbstractController
{
    #[Route('/question', name: 'question')]
    public function index(Request $request, QuestionsRepository $questionsRepository): Response
    {

        $difficultyLevel = $request->query->get('difficulty') ?? null;
        $categories = $request->query->all('category');
//        $categories = $categoriesString ? explode(',', $categoriesString) : [];
//        dump($difficultyLevel);
//        die();

        $question = $questionsRepository->findQuestionsByFilters($difficultyLevel, $categories);

        $answers = $question->getAnswers();
        $answers->initialize();

        dump($question);
        dump($answers);

        if (!$question) {
            return new Response('No question found.', 404);
        }

        if (!$answers) {
            return new Response('No answers found.', 404);
        }

        return $this->render('question.html.twig', [
            'question' => $question,
            'answers' => $answers
        ]);
    }
}
