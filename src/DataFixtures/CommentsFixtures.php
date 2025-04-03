<?php

namespace App\DataFixtures;

use App\Entity\Comments;
use App\Entity\Questions;
use App\Entity\Users;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

use Doctrine\Persistence\ObjectManager;

class CommentsFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $date = new \DateTimeImmutable();
        $admin = $manager->getRepository(Users::class)->findOneBy(['username' => 'Admin']);
        $editor = $manager->getRepository(Users::class)->findOneBy(['username' => 'Editor']);
        $user = $manager->getRepository(Users::class)->findOneBy(['username' => 'User']);

        $question1 = $manager->getRepository(Questions::class)->findOneBy(
            ['content' => <<<'EOT'
            What is the correct way to connect to a MySQL database using PDO in PHP ?
            EOT]);
        $comment1 = new Comments();
        $comment1->setQuestionId($question1);
        $comment1->setUserId($admin);
        $comment1->setContent("Nice, I didn't know that !");
        $comment1->setCreationDate($date);
        $comment1->setUpdateDate($date);
        $manager->persist($comment1);

        $question2 = $manager->getRepository(Questions::class)->findOneBy(
            ['content' => <<<'EOT'
            Which of the following methods can be used to prevent SQL injection in PHP ?
            EOT]);
        $comment2 = new Comments();
        $comment2->setQuestionId($question2);
        $comment2->setUserId($editor);
        $comment2->setContent("Mh, interesting..");
        $comment2->setCreationDate($date);
        $comment2->setUpdateDate($date);
        $manager->persist($comment2);

        $question3 = $manager->getRepository(Questions::class)->findOneBy(
            ['content' => <<<'EOT'
            What will be logged in the console when executing the following JavaScript snippet?\n```js\nconsole.log(0.1 + 0.2 === 0.3);\n```
            EOT]);
        $comment3 = new Comments();
        $comment3->setQuestionId($question3);
        $comment3->setUserId($user);
        $comment3->setContent("Wow, incredible !");
        $comment3->setCreationDate($date);
        $comment3->setUpdateDate($date);
        $manager->persist($comment3);

        $manager->flush();
    }

    public function getDependencies(): array
    {
        return [
            QuestionsFixtures::class,
            UsersFixtures::class,
        ];
    }
}
