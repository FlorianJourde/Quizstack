<?php

namespace App\DataFixtures;

use App\Entity\Category;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class CategoryFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $category = new Category();
        $category->setName('HTML');
        $category->setStatus(true);
        $category->setColor('orange');
        $manager->persist($category);

        $category = new Category();
        $category->setName('CSS');
        $category->setStatus(true);
        $category->setColor('pink');
        $manager->persist($category);

        $category = new Category();
        $category->setName('PHP');
        $category->setStatus(true);
        $category->setColor('purple');
        $manager->persist($category);

        $category = new Category();
        $category->setName('JavaScript');
        $category->setStatus(true);
        $category->setColor('yellow');
        $manager->persist($category);

        $category = new Category();
        $category->setName('SQL');
        $category->setStatus(true);
        $category->setColor('green');
        $manager->persist($category);

        $manager->flush();
    }
}
