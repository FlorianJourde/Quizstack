<?php

namespace App\Controller\Api;

use App\Entity\Question;
use App\Repository\ChoiceRepository;
use App\Service\QuestionFinderService;
use App\Service\QuestionFormatterService;
use App\Service\QuestionLimitService;
use App\Service\ScoreService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api', name: 'api_question_')]
class QuestionApiController extends AbstractController
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
        ChoiceRepository         $choiceRepository,
        Question $question
    ): JsonResponse
    {
        $questionData = $formatterService->formatQuestionData($question);
        $correctChoices = $choiceRepository->findCorrectAnswerIdsByQuestionId($question->getId());
        $questionData['correctChoices'] = $correctChoices;

        return $this->json($questionData);
    }

    #[Route('/question/{id}/check', name: 'check_answers', methods: ['POST'])]
    public function checkAnswers(
        ScoreService     $scoreService,
        ChoiceRepository $choiceRepository,
        Request          $request,
        Question         $question
    ): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $answers = $data['answers'] ?? null;
        $user = $this->getUser();

        if ($answers === null) {
            return $this->json(['error' => 'No answer provided'], 400);
        }

        $correctChoices = $choiceRepository->findCorrectAnswerIdsByQuestionId($question->getId());
        $diff1 = array_diff($correctChoices, $answers);
        $diff2 = array_diff($answers, $correctChoices);
        $match = (empty($diff1) && empty($diff2));

        if ($user && $match) {
            $scoreService->setScores($user, $question->getDifficulty());
        }

        return $this->json([
            'correctChoices' => $correctChoices,
            'isMatch' => $match
        ]);
    }
}