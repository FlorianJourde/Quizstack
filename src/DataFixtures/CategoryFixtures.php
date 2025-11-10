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

        $category = new Category();
        $category->setName('Frontend');
        $category->setStatus(true);
        $category->setColor('blue');
        $manager->persist($category);

        $category = new Category();
        $category->setName('Backend');
        $category->setStatus(true);
        $category->setColor('red');
        $manager->persist($category);

        $category = new Category();
        $category->setName('Accessibility');
        $category->setStatus(true);
        $category->setColor('lightblue');
        $manager->persist($category);

        $category = new Category();
        $category->setName('Culture');
        $category->setStatus(true);
        $category->setColor('turquoise');
        $manager->persist($category);

        $category = new Category();
        $category->setName('SEO');
        $category->setStatus(true);
        $category->setColor('orange');
        $manager->persist($category);

        $category = new Category();
        $category->setName('Security');
        $category->setStatus(true);
        $category->setColor('blue');
        $manager->persist($category);

        $category = new Category();
        $category->setName('Performance');
        $category->setStatus(true);
        $category->setColor('blue');
        $manager->persist($category);

        $manager->flush();
    }
}
