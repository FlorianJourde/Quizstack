<?php

namespace App\DataFixtures\Articles;

use App\Entity\Article;
use Doctrine\Persistence\ObjectManager;

class Article3
{
    public function createArticle(ObjectManager $manager, \DateTimeImmutable $date): void
    {
        $article = new Article();

        $article->setTitle('How Artificial Intelligence Is Transforming Software Development');
        $article->setSlug('ai-and-software-development');
        $article->setExcerpt('Artificial intelligence is now part of many developers\' daily workflows.');
        $article->setImage('desktop.png');
        $article->setStatus(false);
        $article->setCreationDate($date);
        $article->setUpdateDate($date);

        $article->setContent(
            <<<'MARKDOWN'
            Artificial intelligence is now part of many developers' daily workflows.
            
            ## Code Generation
            
            AI-powered tools can help developers:
            
            - Write code faster
            - Generate tests
            - Produce documentation
            - Explore alternative implementations
            
            ## Code Review and Refactoring
            
            AI is particularly useful for:
            
            - Detecting simple bugs
            - Suggesting optimizations
            - Explaining complex codebases
            - Identifying code smells
            
            ## Limitations
            
            Human review remains essential.
            
            The quality of AI-generated output depends heavily on the context and instructions provided.
            
            ## Conclusion
            
            AI is not replacing developers. Instead, it acts as a productivity multiplier that allows teams to focus on higher-value tasks.
            MARKDOWN);

        $manager->persist($article);
        $manager->flush();
    }
}