<?php

namespace App\DataFixtures;

use App\Entity\Categories;
use App\Entity\Comments;
use App\Entity\Questions;
use App\Entity\Users;
use App\Repository\CommentsRepository;
use App\Repository\UsersRepository;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
//use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class CommentsFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {

        $date = new \DateTimeImmutable();
        $question1 = $manager->getRepository(Questions::class)->findOneBy(
            ['content' => "What is the correct way to connect to a MySQL database using PDO in PHP ?"]
        );
        $user1 = $manager->getRepository(Users::class)->findOneBy(
            ['username' => 'Admin']
        );
//        dump($question1, $user1); die;
//        dump($user1);
//        dump($question1); die;

        $comment1 = new Comments();
        $comment1->setQuestionId($question1);
        $comment1->setUserId($user1);
        $comment1->setContent("Nice, I didn't know that !");
        $comment1->setCreationDate($date);
        $comment1->setUpdateDate($date);
        $manager->persist($comment1);

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
