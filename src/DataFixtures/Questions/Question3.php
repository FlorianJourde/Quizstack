<?php

namespace App\DataFixtures\Questions;

//use App\DataFixtures\CategoryHelper;
use App\Entity\Answers;
use App\Entity\Questions;
use App\Helper\CategoryHelper;
use Doctrine\Persistence\ObjectManager;

class Question3
{
    public function createQuestionWithAnswers(ObjectManager $manager, \DateTimeImmutable $date, CategoryHelper $categories)
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
//        $categories->getCategoriesByNames(['JavaScript']);

//        $categories = new CategoryHelper($manager);
        $categories = $categories->getCategoriesByNames(['JavaScript']);

        foreach ($categories as $category) {
            $question->addCategory($category);
        }

        $manager->persist($question);

        $answer1 = new Answers();
        $answer1->setQuestionId($question);
        $answer1->setContent(
            <<<'EOT'
            `true`
            EOT
        );
        $answer1->setCorrect(false);
        $manager->persist($answer1);

        $answer2 = new Answers();
        $answer2->setQuestionId($question);
        $answer2->setContent(
            <<<'EOT'
            `false`
            EOT
        );
        $answer2->setCorrect(true);
        $manager->persist($answer2);

        $answer3 = new Answers();
        $answer3->setQuestionId($question);
        $answer3->setContent(
            <<<'EOT'
            `undefined`
            EOT
        );
        $answer3->setCorrect(false);
        $manager->persist($answer3);

        $manager->flush();
    }
}