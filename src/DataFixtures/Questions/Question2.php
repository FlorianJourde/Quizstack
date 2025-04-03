<?php

namespace App\DataFixtures\Questions;

//use App\DataFixtures\CategoryHelper;
use App\Helper\CategoryHelper;
use Doctrine\Persistence\ObjectManager;

class Question2
{
    public function createQuestionWithAnswers(ObjectManager $manager, \DateTimeImmutable $date, CategoryHelper $categoryHelper)
    {

        $question = createQuestion(
            'Which of the following methods can be used to prevent SQL injection in PHP ?',
            '',
            $date,
            3,
            'Prepared statements with PDO bind parameters to SQL queries, ensuring that user input is treated as data and not executable code.',
            $categoryHelper->getCategoriesByNames(['PHP', 'SQL']),
            $manager
        );

        createAnswer($question, <<<'EOT'
            Using prepared statements with PDO.
            EOT,
            true,
            $manager);

        createAnswer($question, <<<'EOT'
            Escaping user input with `addslashes()`.
            EOT,
            false,
            $manager);

        createAnswer($question, <<<'EOT'
            Validating and sanitizing input properly.
            EOT,
            true,
            $manager);

        $manager->flush();
    }
}