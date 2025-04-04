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
    #[Route('/questions', name: 'questions')]
    public function index(Request $request, QuestionsRepository $questionsRepository): Response
    {

        $difficultyLevel = EnumUtility::DIFFICULTY[$request->query->get('difficulty')] ?? null;
        $categories = $request->query->all('category');

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

        return $this->render('partials/question.html.twig', [
            'question' => $question,
            'answers' => $answers
        ]);
    }
}
