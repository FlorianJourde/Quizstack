<?php

namespace App\DataFixtures;

use App\Entity\Comment;
use App\Entity\Question;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

use Doctrine\Persistence\ObjectManager;

class CommentFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $date = new \DateTimeImmutable();
        $admin = $manager->getRepository(User::class)->findOneBy(['username' => 'Admin']);
        $editor = $manager->getRepository(User::class)->findOneBy(['username' => 'Editor']);
        $user = $manager->getRepository(User::class)->findOneBy(['username' => 'User']);
        $questions = $manager->getRepository(Question::class)->findBy([], ['id' => 'ASC']);


        for ($i = 0; $i < 4; $i++) {
            $comment = new Comment();
            $comment->setQuestion($questions[0]);
            $comment->setUser($admin);
            $comment->setContent("Nice, I didn't know that ! I'm the {$i} comment.");
            $comment->setCreationDate($date);
            $comment->setUpdateDate($date);
            $manager->persist($comment);

            $date = (clone $date)->modify('+2 minute');
        }

        for ($i = 0; $i < 5; $i++) {
            $comment = new Comment();
            $comment->setQuestion($questions[1]);
            $comment->setUser($editor);
            $comment->setContent("Mh, interesting.. My comment is number {$i}..");
            $comment->setCreationDate($date);
            $comment->setUpdateDate($date);
            $manager->persist($comment);

            $date = (clone $date)->modify('+1 minute');
        }

        for ($i = 0; $i < 3; $i++) {
            $comment = new Comment();
            $comment->setQuestion($questions[2]);
            $comment->setUser($user);
            $comment->setContent("This is the comment number {$i} !");
            $comment->setCreationDate($date);
            $comment->setUpdateDate($date);
            $manager->persist($comment);

            $date = (clone $date)->modify('+3 minute');
        }

        $manager->flush();
    }

    public function getDependencies(): array
    {
        return [
            QuestionFixtures::class,
            UserFixtures::class,
        ];
    }
}
