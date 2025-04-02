<?php

namespace App\DataFixtures\Questions;

use Doctrine\Persistence\ObjectManager;
use App\Entity\Answers;
use App\Entity\Questions;

class Question2
{
    public function createQuestionWithAnswers(ObjectManager $manager, \DateTimeImmutable $date)
    {

        $question = createQuestion(
            'Which of the following methods can be used to prevent SQL injection in PHP ?',
            '',
            $date,
            true,
            3,
            $manager
        );

        createAnswer($question, <<<'EOT'
            `Using prepared statements with PDO`
            EOT,
            true,
            $manager);

        createAnswer($question, <<<'EOT'
            `Escaping user input with `addslashes()`
            EOT,
            false,
            $manager);

        createAnswer($question, <<<'EOT'
            `Validating and sanitizing input properly`
            EOT,
            true,
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