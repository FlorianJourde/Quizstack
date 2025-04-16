<?php

namespace App\DataFixtures;

use App\Entity\Users;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UsersFixtures extends Fixture
{
    private UserPasswordHasherInterface $passwordHasher;

    public function __construct(UserPasswordHasherInterface $passwordHasher)
    {
        $this->passwordHasher = $passwordHasher;
    }
    public function load(ObjectManager $manager): void
    {
        $date = new \DateTimeImmutable();
        $role = [];

        $user = new Users();
        $user->setUsername('Admin');
        $user->setEmail('admin@email.com');
        $user->setPassword(
            $this->passwordHasher->hashPassword(
                $user,
                '123456'
            )
        );
        $user->setInscriptionDate($date);
        $user->setLastAuthenticationDate($date);
        $user->setRoles(['ROLE_ADMIN']);
        $manager->persist($user);

        $user = new Users();
        $user->setUsername('Editor');
        $user->setEmail('editor@email.com');
        $user->setPassword(
            $this->passwordHasher->hashPassword(
                $user,
                '123456'
            )
        );
        $user->setInscriptionDate($date);
        $user->setLastAuthenticationDate($date);
        $user->setRoles(['ROLE_EDITOR']);
        $manager->persist($user);

        $user = new Users();
        $user->setUsername('User');
        $user->setEmail('user@email.com');
        $user->setPassword(
            $this->passwordHasher->hashPassword(
                $user,
                '123456'
            )
        );
        $user->setInscriptionDate($date);
        $user->setLastAuthenticationDate($date);
        $user->setRoles(['ROLE_USER']);
        $manager->persist($user);

        $manager->flush();
    }
}
