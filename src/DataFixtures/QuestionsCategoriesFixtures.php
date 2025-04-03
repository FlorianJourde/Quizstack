<?php

namespace App\DataFixtures;

use App\Entity\Users;
use App\Entity\Categories;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class QuestionsCategoriesFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
//        $html = $manager->getRepository(Categories::class)->findOneBy(['name' => 'HTML']);
//        $css = $manager->getRepository(Categories::class)->findOneBy(['name' => 'CSS']);
//        $php = $manager->getRepository(Categories::class)->findOneBy(['name' => 'PHP']);
//        $javaScript = $manager->getRepository(Categories::class)->findOneBy(['name' => 'JavaScript']);
//        $sql = $manager->getRepository(Categories::class)->findOneBy(['name' => 'SQL']);
        
//        $manager->flush();
    }
}
