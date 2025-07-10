<?php

namespace App\Tests\Service;

use App\Entity\Score;
use App\Entity\User;
use App\Service\ScoreService;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

class ScoreServiceTest extends TestCase
{
    private ScoreService $scoreService;
    private EntityManagerInterface|MockObject $entityManager;

    protected function setUp(): void
    {
        $this->entityManager = $this->createMock(EntityManagerInterface::class);
        $this->scoreService = new ScoreService($this->entityManager);
    }

    public function testSetScoresIncreases(): void
    {
        $score = new Score();
        $score->setWeek(10);
        $score->setMonth(50);
        $score->setAllTime(100);

        $user = new User();
        $user->setScore($score);

        $difficulty = 3;

        $this->entityManager
            ->expects($this->once())
            ->method('flush');

        $this->scoreService->setScores($user, $difficulty);

        $this->assertEquals(13, $score->getWeek());
        $this->assertEquals(53, $score->getMonth());
        $this->assertEquals(103, $score->getAllTime());
    }

    public function testWeekScoreCannotExceedAllTimeScore(): void
    {
        $score = new Score();
        $score->setAllTime(100);
        $score->setWeek(150);

        $this->assertGreaterThan($score->getAllTime(), $score->getWeek());
    }

    public function testMonthScoreCannotExceedAllTimeScore(): void
    {
        $score = new Score();
        $score->setAllTime(100);
        $score->setMonth(150);

        $this->assertGreaterThan($score->getAllTime(), $score->getMonth());
    }
}