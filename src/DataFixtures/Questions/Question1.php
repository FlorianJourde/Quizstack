<?php

namespace App\DataFixtures\Questions;

use App\DataFixtures\QuestionsCategoriesFixtures;
use App\Entity\Answers;
use App\Entity\Questions;
use App\Entity\Users;
use App\Helper\CategoryHelper;
use Doctrine\Persistence\ObjectManager;

class Question1
{
    public function createQuestionWithAnswers(ObjectManager $manager, \DateTimeImmutable $date, CategoryHelper $categories)
    {
        $question = new Questions();
        $question->setContent(
            <<<'EOT'
            What is the correct way to connect to a MySQL database using PDO in PHP ?
            EOT
        );
        $question->setImage('/decoration-php.png');
        $question->setCreationDate($date);
        $question->setUpdateDate($date);
        $question->setDifficulty(2);
        $question->setExplanation(
            <<<'EOT'
            Using PDO is a secure and flexible way to interact with databases. It supports prepared statements, which help prevent SQL injection.
            EOT
        );

        $categories = $categories->getCategoriesByNames(['PHP', 'SQL']);
        foreach ($categories as $category) {
            $question->addCategory($category);
        }

        $user = $manager->getRepository(Users::class)->findOneBy(['username' => 'Admin']);
        $question->setUser($user);

        $manager->persist($question);

        $answer1 = new Answers();
        $answer1->setQuestionId($question);
        $answer1->setContent(
            <<<'EOT'
            `$pdo = new PDO('mysql:host=localhost;dbname=test', 'user', 'password');`
            EOT
        );
        $answer1->setCorrect(true);
        $manager->persist($answer1);

        $answer2 = new Answers();
        $answer2->setQuestionId($question);
        $answer2->setContent(
            <<<'EOT'
            `$pdo = mysqli_connect('localhost', 'user', 'password', 'test');`
            EOT
        );
        $answer2->setCorrect(false);
        $manager->persist($answer2);


        $answer2 = new Answers();
        $answer2->setQuestionId($question);
        $answer2->setContent(
            <<<'EOT'
            `$pdo = new MySQLi('localhost', 'user', 'password', 'test');`
            EOT
        );
        $answer2->setCorrect(false);
        $manager->persist($answer2);

        $manager->flush();
    }
}