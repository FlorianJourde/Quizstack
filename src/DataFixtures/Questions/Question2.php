<?php

namespace App\DataFixtures\Questions;

use App\Entity\Choice;
use App\Entity\Question;
use App\Entity\User;
use App\Utils\CategoryHelper;
use Doctrine\Persistence\ObjectManager;

class Question2
{
    public function createQuestionWithChoices(ObjectManager $manager, \DateTimeImmutable $date, CategoryHelper $categories)
    {
        $question = new Question();
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

        $user = $manager->getRepository(User::class)->findOneBy(['username' => 'Editor']);
        $question->setUser($user);

        $manager->persist($question);

        $choice1 = new Choice();
        $choice1->setQuestion($question);
        $choice1->setContent(
            <<<'EOT'
            Using prepared statements with PDO.
            EOT
        );
        $choice1->setCorrect(true);
        $manager->persist($choice1);

        $choice2 = new Choice();
        $choice2->setQuestion($question);
        $choice2->setContent(
            <<<'EOT'
            Escaping user input with `addslashes()`.
            EOT
        );
        $choice2->setCorrect(false);
        $manager->persist($choice2);

        $choice3 = new Choice();
        $choice3->setQuestion($question);
        $choice3->setContent(
            <<<'EOT'
            Validating and sanitizing input properly.
            EOT
        );
        $choice3->setCorrect(true);
        $manager->persist($choice3);

        $manager->flush();
    }
}