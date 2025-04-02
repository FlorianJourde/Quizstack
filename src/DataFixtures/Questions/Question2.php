<?php

namespace App\DataFixtures\Questions;

use Doctrine\Persistence\ObjectManager;

class Question2
{
    public function createQuestionWithAnswers(ObjectManager $manager, \DateTimeImmutable $date)
    {

        $question = createQuestion(
            'Which of the following methods can be used to prevent SQL injection in PHP ?',
            '',
            $date,
            3,
            'Prepared statements with PDO bind parameters to SQL queries, ensuring that user input is treated as data and not executable code.',
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