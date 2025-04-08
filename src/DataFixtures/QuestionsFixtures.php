<?php

namespace App\DataFixtures;

use App\DataFixtures\Questions\Question1;
use App\DataFixtures\Questions\Question2;
use App\DataFixtures\Questions\Question3;
use App\Utils\CategoryHelper;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class QuestionsFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $date = new \DateTimeImmutable();
        $categories = new CategoryHelper($manager);

        $question1 = new Question1();
        $question1->createQuestionWithChoices($manager, $date, $categories);

        $question2 = new Question2();
        $question2->createQuestionWithChoices($manager, $date, $categories);

        $question3 = new Question3();
        $question3->createQuestionWithChoices($manager, $date, $categories);
    }

    public function getDependencies(): array
    {
        return [
            CategoriesFixtures::class,
        ];
    }
}
