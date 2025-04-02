<?php

namespace App\DataFixtures;

use App\Entity\Users;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class UsersFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $date = new \DateTimeImmutable();

        $user = new Users();
        $user->setUsername('Admin');
        $user->setEmail('admin@email.com');
        $user->setPassword('password');
        $user->setRole(3);
        $user->setInscriptionDate($date);
        $user->setLastAuthenticationDate($date);
        $manager->persist($user);

        $user = new Users();
        $user->setUsername('Editor');
        $user->setEmail('editor@email.com');
        $user->setPassword('password');
        $user->setRole(2);
        $user->setInscriptionDate($date);
        $user->setLastAuthenticationDate($date);
        $manager->persist($user);

        $user = new Users();
        $user->setUsername('User');
        $user->setEmail('user@email.com');
        $user->setPassword('password');
        $user->setRole(1);
        $user->setInscriptionDate($date);
        $user->setLastAuthenticationDate($date);
        $manager->persist($user);

        $manager->flush();
    }
}
