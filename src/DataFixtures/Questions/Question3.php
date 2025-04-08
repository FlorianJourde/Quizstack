<?php

namespace App\DataFixtures\Questions;

use App\Entity\Choices;
use App\Entity\Questions;
use App\Entity\Users;
use App\Utils\CategoryHelper;
use Doctrine\Persistence\ObjectManager;

class Question3
{
    public function createQuestionWithChoices(ObjectManager $manager, \DateTimeImmutable $date, CategoryHelper $categories)
    {
        $question = new Questions();
        $question->setContent(
            <<<'EOT'
            What will be logged in the console when executing the following JavaScript snippet?\n```js\nconsole.log(0.1 + 0.2 === 0.3);\n```
            EOT
        );
        $question->setImage('/pattern-js.png');
        $question->setCreationDate($date);
        $question->setUpdateDate($date);
        $question->setDifficulty(2);
        $question->setExplanation(
            <<<'EOT'
            Due to floating point precision issues in JavaScript, `0.1 + 0.2` does not exactly equal `0.3`. The result is `false`.
            EOT
        );

        $categories = $categories->getCategoriesByNames(['JavaScript']);
        foreach ($categories as $category) {
            $question->addCategory($category);
        }

        $user = $manager->getRepository(Users::class)->findOneBy(['username' => 'User']);
        $question->setUser($user);

        $manager->persist($question);

        $choice1 = new Choices();
        $choice1->setQuestionId($question);
        $choice1->setContent(
            <<<'EOT'
            `true`
            EOT
        );
        $choice1->setCorrect(false);
        $manager->persist($choice1);

        $choice2 = new Choices();
        $choice2->setQuestionId($question);
        $choice2->setContent(
            <<<'EOT'
            `false`
            EOT
        );
        $choice2->setCorrect(true);
        $manager->persist($choice2);

        $choice3 = new Choices();
        $choice3->setQuestionId($question);
        $choice3->setContent(
            <<<'EOT'
            `undefined`
            EOT
        );
        $choice3->setCorrect(false);
        $manager->persist($choice3);

        $manager->flush();
    }
}