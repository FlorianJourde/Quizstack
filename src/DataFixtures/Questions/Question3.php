<?php

namespace App\DataFixtures\Questions;

use Doctrine\Persistence\ObjectManager;

class Question3
{
    public function createQuestionWithAnswers(ObjectManager $manager, \DateTimeImmutable $date)
    {

        $question = createQuestion(
            'What will be logged in the console when executing the following JavaScript snippet?\n```js\nconsole.log(0.1 + 0.2 === 0.3);\n```',
            '/pattern-js.png',
            $date,
            true,
            2,
            $manager
        );

        createAnswer($question, <<<'EOT'
            `true`
            EOT,
            false,
            $manager);

        createAnswer($question, <<<'EOT'
            `false`
            EOT,
            true,
            $manager);

        createAnswer($question, <<<'EOT'
            `undefined`
            EOT,
            false,
            $manager);

        $manager->flush();
    }
}