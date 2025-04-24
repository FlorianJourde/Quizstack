<?php

namespace App\Service;

use App\Entity\Questions;
use App\Repository\QuestionsRepository;

class QuestionFinderService
{
    public function __construct(
        private QuestionsRepository $questionsRepository
    )
    {
    }

    public function findRandomQuestion(?string $difficultyLevel, array $categories): ?Questions
    {
        return $this->questionsRepository->findRandomQuestionByFilters($difficultyLevel, $categories);
    }
}