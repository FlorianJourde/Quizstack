<?php

namespace App\DataFixtures;

use App\DataFixtures\Questions\Question1;
use App\DataFixtures\Questions\Question2;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class QuestionsFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $date = new \DateTimeImmutable();

        $question1 = new Question1();
        $question1->createQuestionWithAnswers($manager, $date);

        $question1 = new Question2();
        $question1->createQuestionWithAnswers($manager, $date);
    }
}
