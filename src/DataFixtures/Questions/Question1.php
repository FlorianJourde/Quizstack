<?php

namespace App\DataFixtures\Questions;

//use App\DataFixtures\Helper\CategoryHelper;
use App\DataFixtures\CategoryHelper;
use App\DataFixtures\QuestionsCategoriesFixtures;
use App\Entity\Categories;
use Doctrine\Persistence\ObjectManager;

class Question1
{
    public function createQuestionWithAnswers(ObjectManager $manager, \DateTimeImmutable $date, CategoryHelper $categoryHelper)
    {

        $question = createQuestion(
            'What is the correct way to connect to a MySQL database using PDO in PHP ?',
            '/decoration-php.png',
            $date,
            2,
            'Using PDO is a secure and flexible way to interact with databases. It supports prepared statements, which help prevent SQL injection.',
            $categoryHelper->getCategoriesByNames(['PHP', 'SQL']),
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
    }
}