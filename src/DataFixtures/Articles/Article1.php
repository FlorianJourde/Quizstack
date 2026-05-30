<?php

namespace App\DataFixtures\Articles;

use App\Entity\Article;
use Doctrine\Persistence\ObjectManager;

class Article1
{
    public function createArticle(ObjectManager $manager, \DateTimeImmutable $date): void
    {
        $article = new Article();

        $article->setTitle('CSS Features That Truly Change the Way We Build Interfaces');
        $article->setSlug('modern-css-features');
        $article->setImage('css.webp');
        $article->setStatus(true);
        $article->setCreationDate($date);
        $article->setUpdateDate($date);

        $article->setContent(
            <<<'MARKDOWN'
            CSS continues to **evolve** rapidly, bringing *powerful* features that improve developer productivity.
            
            ## :has()
            
            The parent selector finally allows elements to be styled based on their children.
            
            Example:
            
            ```css
            .card:has(img) { padding: 20px; }
            ```
            
            ## Container Queries
            
            **Components** can now adapt based on their own size rather than the viewport.
            
            > Docker images are immutable.
            
            Example:
            
            ```css
            @container (min-width: 500px) {
                .card {
                    display: flex;
                }
            }
            ```
            
            ## Anchor Positioning
            
            Anchor positioning introduces a new way to place elements relative to others.
            
            ## Conclusion
            
            Modern CSS reduces the need for JavaScript in many common UI scenarios.
            MARKDOWN);

        $manager->persist($article);
        $manager->flush();
    }
}