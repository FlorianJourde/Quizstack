<?php

namespace App\DataFixtures\Questions;

use Doctrine\Persistence\ObjectManager;

class Question1
{
    public function createQuestionWithAnswers(ObjectManager $manager, \DateTimeImmutable $date)
    {

        $question = createQuestion(
            'What is the correct way to connect to a MySQL database using PDO in PHP ?',
            '/decoration-php.png',
            $date,
            true,
            2,
            $manager
        );

        createAnswer($question, <<<'EOT'
            `$pdo = new PDO('mysql:host=localhost;dbname=test', 'user', 'password');`
            EOT,
            true,
            $manager);

        createAnswer($question, <<<'EOT'
            `$pdo = mysqli_connect('localhost', 'user', 'password', 'test');`
            EOT,
            false,
            $manager);

        createAnswer($question, <<<'EOT'
            `$pdo = new MySQLi('localhost', 'user', 'password', 'test');`
            EOT,
            false,
            $manager);

        $manager->flush();

//        $question = new Questions();
//        $question->setContent('What is the correct way to connect to a MySQL database using PDO in PHP ?');
//        $question->setImage('/decoration-php.png');
//        $question->setCreationDate($date);
//        $question->setUpdateDate($date);
//        $question->setStatus(true);
//        $question->setDifficulty(2);
//        $manager->persist($question);
//        $manager->flush();
//
//        $answer1 = new Answers();
//        $answer1->setQuestionId($question);
//        $answer1->setContent(<<<'EOT'
//        $pdo = new PDO('mysql:host=localhost;dbname=test', 'user', 'password');
//        EOT
//        );
//        $answer1->setCorrect(true);
//        $manager->persist($answer1);
//
//        $answer2 = new Answers();
//        $answer2->setQuestionId($question);
//        $answer2->setContent(<<<'EOT'
//        $pdo = mysqli_connect('localhost', 'user', 'password', 'test');
//        EOT
//        );
//        $answer2->setCorrect(false);
//        $manager->persist($answer2);
//
//        $answer3 = new Answers();
//        $answer3->setQuestionId($question);
//        $answer3->setContent(<<<'EOT'
//        $pdo = new MySQLi('localhost', 'user', 'password', 'test');
//        EOT
//        );
//        $answer3->setCorrect(false);
//        $manager->persist($answer3);
//
//        $manager->flush();
    }
}