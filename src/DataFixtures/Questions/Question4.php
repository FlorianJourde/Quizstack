<?php

namespace App\DataFixtures\Questions;

use App\Entity\Choice;
use App\Entity\Question;
use App\Entity\User;
use App\Utils\CategoryHelper;
use Doctrine\Persistence\ObjectManager;

class Question4
{
    public function createQuestionWithChoices(ObjectManager $manager, \DateTimeImmutable $date, CategoryHelper $categories)
    {
        $question = new Question();
        $question->setContent(
            <<<'EOT'
            What is the output of the following JavaScript code?
            ```javascript
            function makeCounter() {
            let count = 0;
            
            function counter() {
              return count++;
            }
            
            return counter;
            }
            
            const counter1 = makeCounter();
            const counter2 = makeCounter();
            
            console.log(counter1());
            console.log(counter1());
            console.log(counter2());
            ```
            EOT
        );
        $question->setCreationDate($date);
        $question->setUpdateDate($date);
        $question->setDifficulty(2);
        $question->setStatus(true);
        $question->setExplanation(
            <<<'EOT'
            This code demonstrates closures in JavaScript.

            The `makeCounter` function creates a lexical environment that contains a `count` variable, then returns a function that has access to that environment :
            1. When we call `makeCounter()`, it creates a new lexical environment with `count = 0` and returns a function that can access and modify that environment.
            2. `counter1` and `counter2` are two different functions, each with their own separate lexical environments and separate `count` variables.
            3. The `counter1()` call returns the current value of `count` (0) and then increments it to 1 (post-increment).
            4. The second `counter1()` call returns the now-current value of `count` (1) and increments it to 2.
            5. `counter2()` operates on its own separate `count` variable, which starts at 0, so it returns 0.
            
            Therefore, the output is: 0, 1, 0
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