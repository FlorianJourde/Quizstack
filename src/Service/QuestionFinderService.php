<?php

namespace App\Service;

use App\Entity\Question;
use App\Repository\QuestionRepository;

class QuestionFinderService
{
    public function __construct(
        private QuestionRepository $questionRepository
    )
    {
    }

    public function findRandomQuestion(?string $difficultyLevel, array $categories): ?Question
    {
        return $this->questionRepository->findRandomQuestionByFilters($difficultyLevel, $categories);
    }
}