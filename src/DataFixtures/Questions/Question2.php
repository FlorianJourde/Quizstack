<?php

namespace App\DataFixtures\Questions;

use App\Entity\Answers;
use App\Entity\Questions;
use App\Entity\Users;
use App\Utils\CategoryHelper;
use Doctrine\Persistence\ObjectManager;

class Question2
{
    public function createQuestionWithAnswers(ObjectManager $manager, \DateTimeImmutable $date, CategoryHelper $categories)
    {
        $question = new Questions();
        $question->setContent(
            <<<'EOT'
            Which of the following methods can be used to prevent SQL injection in PHP ?
            EOT
        );
        $question->setImage('');
        $question->setCreationDate($date);
        $question->setUpdateDate($date);
        $question->setDifficulty(3);
        $question->setExplanation(
            <<<'EOT'
            Prepared statements with PDO bind parameters to SQL queries, ensuring that user input is treated as data and not executable code.
            EOT
        );

        $categories = $categories->getCategoriesByNames(['PHP', 'SQL']);
        foreach ($categories as $category) {
            $question->addCategory($category);
        }

        $user = $manager->getRepository(Users::class)->findOneBy(['username' => 'Editor']);
        $question->setUser($user);

        $manager->persist($question);

        $answer1 = new Answers();
        $answer1->setQuestionId($question);
        $answer1->setContent(
            <<<'EOT'
            Using prepared statements with PDO.
            EOT
        );
        $answer1->setCorrect(true);
        $manager->persist($answer1);

        $answer2 = new Answers();
        $answer2->setQuestionId($question);
        $answer2->setContent(
            <<<'EOT'
            Escaping user input with `addslashes()`.
            EOT
        );
        $answer2->setCorrect(false);
        $manager->persist($answer2);

        $answer3 = new Answers();
        $answer3->setQuestionId($question);
        $answer3->setContent(
            <<<'EOT'
            Validating and sanitizing input properly.
            EOT
        );
        $answer3->setCorrect(true);
        $manager->persist($answer3);

        $manager->flush();
    }
}