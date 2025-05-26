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
        $manager->persist($category);

        $category = new Category();
        $category->setName('CSS');
        $manager->persist($category);

        $category = new Category();
        $category->setName('PHP');
        $manager->persist($category);

        $category = new Category();
        $category->setName('JavaScript');
        $manager->persist($category);

        $category = new Category();
        $category->setName('SQL');
        $manager->persist($category);

        $manager->flush();
    }
}
