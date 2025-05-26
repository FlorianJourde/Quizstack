<?php

namespace App\Service;

use App\Entity\User;
use InvalidArgumentException;
use Symfony\Component\Security\Core\User\UserInterface;
use Doctrine\ORM\EntityManagerInterface;

class ScoreService
{
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function setScores(UserInterface $user, int $difficulty): void
    {
        if (!$user instanceof User) {
            throw new InvalidArgumentException('Invalid user !');
        }

        $score = $user->getScore();
        $points = $difficulty;

        $score->setWeek($score->getWeek() + $points);
        $score->setMonth($score->getMonth() + $points);
        $score->setAllTime($score->getAllTime() + $points);

        $this->entityManager->flush();
    }
}