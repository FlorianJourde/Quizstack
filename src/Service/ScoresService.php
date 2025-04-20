<?php

namespace App\Service;

use App\Entity\Users;
use http\Exception\InvalidArgumentException;
use Symfony\Component\Security\Core\User\UserInterface;
use Doctrine\ORM\EntityManagerInterface;

class ScoresService
{
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function setScores(UserInterface $user, int $difficulty): void
    {
        if (!$user instanceof Users) {
            throw new InvalidArgumentException('Invalid user !');
        }

        $scores = $user->getScores();
        $points = $difficulty;

        $scores->setWeek($scores->getWeek() + $points);
        $scores->setMonth($scores->getMonth() + $points);
        $scores->setAllTime($scores->getAllTime() + $points);

        $this->entityManager->flush();
    }
}