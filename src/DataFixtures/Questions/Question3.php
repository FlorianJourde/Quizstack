<?php

namespace App\DataFixtures\Questions;

use App\DataFixtures\CategoryHelper;
use Doctrine\Persistence\ObjectManager;

class Question3
{
    public function createQuestionWithAnswers(ObjectManager $manager, \DateTimeImmutable $date, CategoryHelper $categoryHelper)
    {

        $question = createQuestion(
            'What will be logged in the console when executing the following JavaScript snippet?\n```js\nconsole.log(0.1 + 0.2 === 0.3);\n```',
            '/pattern-js.png',
            $date,
            2,
            'Due to floating point precision issues in JavaScript, `0.1 + 0.2` does not exactly equal `0.3`. The result is `false`.',
            $categoryHelper->getCategoriesByNames(['JavaScript']),
            $manager
        );

        createAnswer($question, <<<'EOT'
            true
            EOT,
            false,
            $manager);

        createAnswer($question, <<<'EOT'
            false
            EOT,
            true,
            $manager);

        createAnswer($question, <<<'EOT'
            undefined
            EOT,
            false,
            $manager);

        $manager->flush();
    }
}