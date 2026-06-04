<?php

namespace App\DataFixtures\Articles;

use App\Entity\Article;
use Doctrine\Persistence\ObjectManager;

class Article4
{
    public function createArticle(ObjectManager $manager, \DateTimeImmutable $date): void
    {
        $article = new Article();

        $article->setTitle('HTML Semantics: Building Accessible and Meaningful Web Pages');
        $article->setSlug('html-semantics-accessibility');
        $article->setExcerpt('Semantic HTML improves accessibility, SEO, and code maintainability by giving meaning to your markup.');
        $article->setImage('megaphone.jpg');
        $article->setStatus(true);
        $article->setCreationDate($date);
        $article->setUpdateDate($date);

        $article->setContent(
            <<<'MARKDOWN'
            Semantic HTML is the foundation of **accessible** and *well-structured* web pages.
            
            ## Why Semantics Matter
            
            Using the right HTML elements helps screen readers, search engines, and developers understand your content.
            
            Example:
            
            ```html
            <article>
                <header>
                    <h1>Article Title</h1>
                    <time datetime="2025-01-15">January 15, 2025</time>
                </header>
                <p>Content goes here...</p>
            </article>
            ```
            
            ## The dialog Element
            
            Native modals are now possible without JavaScript for basic functionality.
            
            Example:
            
            ```html
            <dialog id="modal">
                <h2>Confirmation</h2>
                <p>Are you sure you want to proceed?</p>
                <button onclick="this.closest('dialog').close()">Close</button>
            </dialog>
            ```
            
            ## The details and summary Elements
            
            **Accordions** and collapsible content can be created without any JavaScript.
            
            Example:
            
            ```html
            <details>
                <summary>Click to expand</summary>
                <p>Hidden content revealed on click.</p>
            </details>
            ```
            
            ## Conclusion
            
            Semantic HTML reduces complexity and improves the user experience for everyone.
            MARKDOWN);

        $manager->persist($article);
        $manager->flush();
    }
}