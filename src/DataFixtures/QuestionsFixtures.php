<?php

namespace App\DataFixtures;

use App\DataFixtures\Questions\Question1;
use App\DataFixtures\Questions\Question2;
use App\DataFixtures\Questions\Question3;
use App\Helper\CategoryHelper;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class QuestionsFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $date = new \DateTimeImmutable();
        $categories = new CategoryHelper($manager);

        $question1 = new Question1();
        $question1->createQuestionWithAnswers($manager, $date, $categories);

        $question1 = new Question2();
        $question1->createQuestionWithAnswers($manager, $date, $categories);

        $question1 = new Question3();
        $question1->createQuestionWithAnswers($manager, $date, $categories);
    }


    public function getDependencies(): array
    {
        return [
            CommentsFixtures::class,
//            UsersFixtures::class,
        ];
    }

//    public function getDependencies(): array
//    {
//        return [
//            CategoriesFixtures::class,
//        ];
//    }
}
