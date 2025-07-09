<?php

namespace App\DataFixtures;

use App\Entity\Score;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class ScoreFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $admin = $manager->getRepository(User::class)->findOneBy(['username' => 'Admin']);
        $editor = $manager->getRepository(User::class)->findOneBy(['username' => 'Editor']);
        $user = $manager->getRepository(User::class)->findOneBy(['username' => 'User']);

//        $score1 = new Score();
//        $score1->setUser($admin);
//        $score1->setWeek(10);
//        $score1->setMonth(100);
//        $score1->setAllTime(100);
//        $manager->persist($score1);
//
//        $score2 = new Score();
//        $score2->setUser($editor);
//        $score2->setWeek(0);
//        $score2->setMonth(100);
//        $score2->setAllTime(100);
//        $manager->persist($score2);
//
//        $score3 = new Score();
//        $score3->setUser($user);
//        $score3->setWeek(50);
//        $score3->setMonth(500);
//        $score3->setAllTime(1000);
//        $manager->persist($score3);
//
//        $manager->flush();
    }

    public function getDependencies(): array
    {
        return [
            UserFixtures::class,
        ];
    }
}