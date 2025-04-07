<?php

namespace App\DataFixtures;

//use App\DataFixtures\Questions\Question1;
//use App\DataFixtures\Questions\Question2;
//use App\DataFixtures\Questions\Question3;
//use App\Helper\CategoryHelper;
use App\Entity\Scores;
use App\Entity\Users;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

//use Doctrine\Persistence\ObjectManager;

class ScoresFixtures extends Fixture implements DependentFixtureInterface
{

    public function load(ObjectManager $manager): void
    {
        $admin = $manager->getRepository(Users::class)->findOneBy(['username' => 'Admin']);
        $editor = $manager->getRepository(Users::class)->findOneBy(['username' => 'Editor']);
        $user = $manager->getRepository(Users::class)->findOneBy(['username' => 'User']);

        $score1 = new Scores();
        $score1->setUsers($admin);
        $score1->setWeek(10);
        $score1->setMonth(100);
        $score1->setAllTime(100);
        $manager->persist($score1);

        $score2 = new Scores();
        $score2->setUsers($editor);
        $score2->setWeek(0);
        $score2->setMonth(100);
        $score2->setAllTime(100);
        $manager->persist($score2);

        $score3 = new Scores();
        $score3->setUsers($user);
        $score3->setWeek(50);
        $score3->setMonth(500);
        $score3->setAllTime(1000);
        $manager->persist($score3);

        $manager->flush();
    }

    public function getDependencies(): array
    {
        return [
            UsersFixtures::class,
        ];
    }
}