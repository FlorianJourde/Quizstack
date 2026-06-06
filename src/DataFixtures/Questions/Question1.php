<?php

namespace App\DataFixtures\Questions;

use App\Entity\Choice;
use App\Entity\Question;
use App\Entity\User;
use App\Utils\CategoryHelper;
use Doctrine\Persistence\ObjectManager;

class Question1
{
    public function createQuestionWithChoices(ObjectManager $manager, \DateTimeImmutable $date, CategoryHelper $categories)
    {
        $question = new Question();
        $question->setContent(
            <<<'EOT'
            What is the fundamental difference between `localStorage` and `sessionStorage`?
            EOT
        );
        $question->setCreationDate($date);
        $question->setUpdateDate($date);
        $question->setDifficulty(2);
        $question->setStatus(true);
        $question->setImage('bug-691226583edd9.webp');
        $question->setExplanation(
            <<<'EOT'
            Using PDO is a secure and flexible way to interact with databases. It supports prepared statements, which help prevent SQL injection.
            EOT
        );

        $categories = $categories->getCategoriesByNames(['PHP', 'SQL']);
        foreach ($categories as $category) {
            $question->addCategory($category);
        }

        $user = $manager->getRepository(User::class)->findOneBy(['username' => 'Admin']);
        $question->setUser($user);

        $manager->persist($question);

        $choice1 = new Choice();
        $choice1->setQuestion($question);
        $choice1->setContent(
            <<<'EOT'
            `$pdo = new PDO('mysql:host=localhost;dbname=test', 'user', 'password');`
            EOT
        );
        $choice1->setCorrect(true);
        $manager->persist($choice1);

        $choice2 = new Choice();
        $choice2->setQuestion($question);
        $choice2->setContent(
            <<<'EOT'
            `$pdo = mysqli_connect('localhost', 'user', 'password', 'test');`
            EOT
        );
        $choice2->setCorrect(false);
        $manager->persist($choice2);

        $choice3 = new Choice();
        $choice3->setQuestion($question);
        $choice3->setContent(
            <<<'EOT'
            `$pdo = new MySQLi('localhost', 'user', 'password', 'test');`
            EOT
        );
        $choice3->setCorrect(false);
        $manager->persist($choice3);

        $choice4 = new Choice();
        $choice4->setQuestion($question);
        $choice4->setContent(
            <<<'EOT'
            `localStorage` is synchronous, while `sessionStorage` is asynchronous.
            EOT
        );
        $choice4->setCorrect(false);
        $manager->persist($choice4);

        $manager->flush();
    }
}