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
        $category->setName('HTML');
        $manager->persist($category);

        $category = new Categories();
        $category->setName('CSS');
        $manager->persist($category);

        $category = new Categories();
        $category->setName('PHP');
        $manager->persist($category);

        $category = new Categories();
        $category->setName('JavaScript');
        $manager->persist($category);

        $category = new Categories();
        $category->setName('SQL');
        $manager->persist($category);

        $manager->flush();
    }
}
