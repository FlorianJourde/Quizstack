<?php

namespace App\DataFixtures;

use App\DataFixtures\Articles\Article1;
use App\DataFixtures\Articles\Article2;
use App\DataFixtures\Articles\Article3;
use App\DataFixtures\Articles\Article4;
use App\DataFixtures\Articles\Article5;
use App\DataFixtures\Articles\Article6;
use App\DataFixtures\Articles\Article7;
use DateTimeImmutable;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class ArticleFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $date = new DateTimeImmutable();

        $article1 = new Article1();
        $article1->createArticle($manager, $date);

        $article2 = new Article2();
        $article2->createArticle($manager, $date);

        $article3 = new Article3();
        $article3->createArticle($manager, $date);

        $article3 = new Article4();
        $article3->createArticle($manager, $date);

        $article3 = new Article5();
        $article3->createArticle($manager, $date);

        $article3 = new Article6();
        $article3->createArticle($manager, $date);

        $article3 = new Article7();
        $article3->createArticle($manager, $date);
    }
}