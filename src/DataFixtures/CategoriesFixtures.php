<?php

namespace App\DataFixtures;

use App\Entity\Categories;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class CategoriesFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $category = new Categories();
        $category->setId(1);
        $category->setName('HTML');
        $manager->persist($category);

        $category = new Categories();
        $category->setId(2);
        $category->setName('CSS');
        $manager->persist($category);

        $category = new Categories();
        $category->setId(3);
        $category->setName('PHP');
        $manager->persist($category);

        $category = new Categories();
        $category->setId(4);
        $category->setName('JavaScript');
        $manager->persist($category);

        $category = new Categories();
        $category->setId(5);
        $category->setName('SQL');
        $manager->persist($category);

        $manager->flush();
    }
}
