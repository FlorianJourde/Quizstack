<?php

//namespace App\DataFixtures;

use App\DataFixtures\Questions\Question1;
use App\DataFixtures\Questions\Question2;
use App\DataFixtures\Questions\Question3;
use App\Entity\Questions;
use App\Helper\CategoryHelper;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

//class AnswersFixtures extends Fixture
//{
//    public function load(ObjectManager $manager): void
//    {
//
//
////        $date = new \DateTimeImmutable();
//        $question1 = $manager->getRepository(Questions::class)->findOneBy(
//            ['content' => "What is the correct way to connect to a MySQL database using PDO in PHP ?"]
//        );
//
//        $answer = new Answers();
//        $answer->setQuestionId($question1);
//        $answer->setContent(
//            <<<'EOT'
//            `$pdo = new PDO('mysql:host=localhost;dbname=test', 'user', 'password');`
//            EOT,
//        );
//        $answer->setCorrect(true);
//
//        $manager->persist($answer);
//    }
//
//    public function getDependencies(): array
//    {
//        return [
//            QuestionsFixtures::class,
//        ];
//    }
//}
