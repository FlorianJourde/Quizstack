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

        for ($i = 0; $i < 4; $i++) {
            $question1 = $manager->getRepository(Questions::class)->findOneBy(
                ['content' => <<<'EOT'
            What is the correct way to connect to a MySQL database using PDO in PHP ?
            EOT]);
            $comment1 = new Comments();
            $comment1->setQuestion($question1);
            $comment1->setUser($admin);
            $comment1->setContent("Nice, I didn't know that ! I'm the {$i} comment.");
            $comment1->setCreationDate($date);
            $comment1->setUpdateDate($date);
            $manager->persist($comment1);

            $date = (clone $date)->modify('+2 minute');
        }

        for ($i = 0; $i < 5; $i++) {
            $question2 = $manager->getRepository(Questions::class)->findOneBy(
                ['content' => <<<'EOT'
            Which of the following methods can be used to prevent SQL injection in PHP ?
            EOT]);
            $comment2 = new Comments();
            $comment2->setQuestion($question2);
            $comment2->setUser($editor);
            $comment2->setContent("Mh, interesting.. My comment is number {$i}..");
            $comment2->setCreationDate($date);
            $comment2->setUpdateDate($date);
            $manager->persist($comment2);

            $date = (clone $date)->modify('+1 minute');
        }

        for ($i = 0; $i < 3; $i++) {
            $question3 = $manager->getRepository(Questions::class)->findOneBy(
                ['content' => <<<'EOT'
            What will be logged in the console when executing the following JavaScript snippet?\n```js\nconsole.log(0.1 + 0.2 === 0.3);\n```
            EOT]);
            $comment3 = new Comments();
            $comment3->setQuestion($question3);
            $comment3->setUser($user);
            $comment3->setContent("This is the comment number {$i} !");
            $comment3->setCreationDate($date);
            $comment3->setUpdateDate($date);
            $manager->persist($comment3);
            $date = (clone $date)->modify('+3 minute');

            $manager->flush();
        }
    }

    public function getDependencies(): array
    {
        return [
            QuestionsFixtures::class,
            UsersFixtures::class,
        ];
    }
}
