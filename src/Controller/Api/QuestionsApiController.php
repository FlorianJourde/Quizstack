<?php

namespace App\Controller\Api;

use App\Entity\Questions;
use App\Repository\ChoicesRepository;
use App\Repository\QuestionsRepository;
use App\Service\QuestionFinderService;
use App\Service\QuestionFormatterService;
use App\Service\QuestionLimitService;
use App\Service\ScoresService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api', name: 'api_question_')]
class QuestionsApiController extends AbstractController
{
    #[Route('/question', name: 'get_random_question', methods: ['GET'])]
    public function getRandomQuestion(
        Request                  $request,
        QuestionFinderService    $finderService,
        QuestionFormatterService $formatterService,
        QuestionLimitService     $limitService
    ): JsonResponse
    {
        $difficultyLevel = $request->query->get('difficulty') ?? null;
        $categories = $request->query->all('category');

        $question = $finderService->findRandomQuestion($difficultyLevel, $categories);

        if (!$question) {
            return new JsonResponse('No question found.', 404);
        }

        $questionData = $formatterService->formatQuestionData($question);

        if ($this->getUser() === null) {
            if ($limitService->isLimitReached($request)) {
                return $limitService->getLimitResponse();
            }

            return $limitService->createResponseWithCookie($questionData, $request);
        }

        return $this->json($questionData);
    }

    #[Route('/question/{id}', name: 'get_question', methods: ['GET'])]
    public function getQuestion(
        QuestionFormatterService $formatterService,
        QuestionsRepository      $questionsRepository,
        ChoicesRepository        $choicesRepository,
        int                      $id
    ): JsonResponse
    {
        $question = $questionsRepository->find($id);

        if (!$question) {
            return new JsonResponse('No question found.', 404);
        }

        assert($question instanceof Questions);

        $questionData = $formatterService->formatQuestionData($question);
        $correctChoices = $choicesRepository->findCorrectAnswerIdsByQuestionId($id);
        $questionData['correctChoices'] = $correctChoices;

        return $this->json($questionData);
    }

    #[Route('/question/{id}/check', name: 'check_answers', methods: ['POST'])]
    public function checkAnswers(
        ScoresService       $scoresService,
        ChoicesRepository   $choicesRepository,
        QuestionsRepository $questionsRepository,
        Request             $request,
        int                 $id
    ): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $answers = $data['answers'] ?? null;
        $user = $this->getUser();

        if ($answers === null) {
            return $this->json(['error' => 'No answer provided'], 400);
        }

        $correctChoices = $choicesRepository->findCorrectAnswerIdsByQuestionId($id);
        $diff1 = array_diff($correctChoices, $answers);
        $diff2 = array_diff($answers, $correctChoices);
        $match = (empty($diff1) && empty($diff2));

        $question = $questionsRepository->find($id);

        if ($user && $match) {
            $scoresService->setScores($user, $question->getDifficulty());
        }

        return $this->json([
            'correctChoices' => $correctChoices
        ]);
    }
}