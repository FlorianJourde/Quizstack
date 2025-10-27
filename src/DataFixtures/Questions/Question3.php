<?php

namespace App\DataFixtures\Questions;

use App\Entity\Choice;
use App\Entity\Question;
use App\Entity\User;
use App\Utils\CategoryHelper;
use Doctrine\Persistence\ObjectManager;

class Question3
{
    public function createQuestionWithChoices(ObjectManager $manager, \DateTimeImmutable $date, CategoryHelper $categories)
    {
        $question = new Question();
        $question->setContent(
            <<<'EOT'
            What will be logged in the console when executing the following JavaScript snippet ?
            ```js
            console.log(0.1 + 0.2 === 0.3);
            ```
            EOT
        );
        $question->setImage('pattern-js.png');
        $question->setCreationDate($date);
        $question->setUpdateDate($date);
        $question->setDifficulty(2);
        $question->setStatus(true);
        $question->setExplanation(
            <<<'EOT'
            Due to floating point precision issues in JavaScript, `0.1 + 0.2` does not exactly equal `0.3`. The result is `false`.
            EOT
        );

        $categories = $categories->getCategoriesByNames(['JavaScript']);
        foreach ($categories as $category) {
            $question->addCategory($category);
        }

        $user = $manager->getRepository(User::class)->findOneBy(['username' => 'User']);
        $question->setUser($user);

        $manager->persist($question);

        $choice1 = new Choice();
        $choice1->setQuestion($question);
        $choice1->setContent(
            <<<'EOT'
            `true`
            EOT
        );
        $choice1->setCorrect(false);
        $manager->persist($choice1);

        $choice2 = new Choice();
        $choice2->setQuestion($question);
        $choice2->setContent(
            <<<'EOT'
            `false`
            EOT
        );
        $choice2->setCorrect(true);
        $manager->persist($choice2);

        $choice3 = new Choice();
        $choice3->setQuestion($question);
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