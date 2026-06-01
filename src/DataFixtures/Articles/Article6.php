<?php

namespace App\DataFixtures\Articles;

use App\Entity\Article;
use Doctrine\Persistence\ObjectManager;

class Article6
{
    public function createArticle(ObjectManager $manager, \DateTimeImmutable $date): void
    {
        $article = new Article();

        $article->setTitle('PHP 8.x Features That Transform Your Codebase');
        $article->setSlug('php-8-modern-features');
        $article->setExcerpt('PHP 8 introduced revolutionary features like attributes, named arguments, and match expressions.');
        $article->setImage('ai.jpg');
        $article->setStatus(true);
        $article->setCreationDate($date);
        $article->setUpdateDate($date);

        $article->setContent(
            <<<'MARKDOWN'
            PHP 8.x brings **major** improvements that modernize the language significantly.
            
            ## Constructor Property Promotion
            
            Reduce boilerplate code by declaring and initializing properties directly in the constructor.
            
            Example:
            
            ```php
            class User
            {
                public function __construct(
                    private string $name,
                    private string $email,
                    private bool $active = true
                ) {}
            }
            ```
            
            ## Match Expression
            
            A more powerful and safer alternative to switch statements.
            
            Example:
            
            ```php
            $result = match($status) {
                'draft' => 'Document is pending',
                'published' => 'Document is live',
                'archived' => 'Document is stored',
                default => 'Unknown status'
            };
            ```
            
            ## Attributes
            
            **Native** metadata annotations replace docblock comments.
            
            Example:
            
            ```php
            #[Route('/api/users', methods: ['GET'])]
            public function list(): Response
            {
                // ...
            }
            ```
            
            ## Enums
            
            First-class *enumerations* provide type-safe constants.
            
            Example:
            
            ```php
            enum Status: string
            {
                case Draft = 'draft';
                case Published = 'published';
                case Archived = 'archived';
            }
            ```
            
            ## Conclusion
            
            PHP 8.x makes the language more expressive, type-safe, and enjoyable to work with.
            MARKDOWN);

        $manager->persist($article);
        $manager->flush();
    }
}