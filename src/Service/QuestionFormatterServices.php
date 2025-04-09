<?php

namespace App\Service;

use App\Entity\Questions;
use App\Repository\QuestionsRepository;
use App\Repository\UsersRepository;

class QuestionsService
{
    public function __construct(
        private QuestionsRepository $questionsRepository,
        private UsersRepository $usersRepository
    ) {}

    public function findRandomQuestionByFilters(?string $difficultyLevel, array $categories): ?Questions
    {
        return $this->questionsRepository->findRandomQuestionByFilters($difficultyLevel, $categories);
    }
}