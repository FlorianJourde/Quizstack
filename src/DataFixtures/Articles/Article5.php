<?php

namespace App\DataFixtures\Articles;

use App\Entity\Article;
use Doctrine\Persistence\ObjectManager;

class Article5
{
    public function createArticle(ObjectManager $manager, \DateTimeImmutable $date): void
    {
        $article = new Article();

        $article->setTitle('Modern JavaScript Features Every Developer Should Know');
        $article->setSlug('modern-javascript-features');
        $article->setExcerpt('JavaScript has evolved significantly with ES6+ features that make code cleaner and more powerful.');
        $article->setImage('cube.png');
        $article->setStatus(true);
        $article->setCreationDate($date);
        $article->setUpdateDate($date);

        $article->setContent(
            <<<'MARKDOWN'
            JavaScript continues to evolve with **powerful** features that simplify *everyday* tasks.
            
            ## Optional Chaining
            
            Safely access deeply nested properties without checking each level.
            
            Example:
            
            ```javascript
            const city = user?.address?.city ?? 'Unknown';
            ```
            
            ## Array Methods
            
            Modern array methods like **at()** and **findLast()** improve readability.
            
            Example:
            
            ```javascript
            const numbers = [1, 2, 3, 4, 5];
            const last = numbers.at(-1); // 5
            const lastEven = numbers.findLast(n => n % 2 === 0); // 4
            ```
            
            ## Structured Clone
            
            Deep cloning objects is now native and handles complex data types.
            
            Example:
            
            ```javascript
            const original = { date: new Date(), items: [1, 2, 3] };
            const clone = structuredClone(original);
            ```
            
            ## Top-level Await
            
            **Async** operations can now be awaited at the module level.
            
            Example:
            
            ```javascript
            const response = await fetch('/api/data');
            const data = await response.json();
            export default data;
            ```
            
            ## Conclusion
            
            Staying updated with modern JavaScript features leads to cleaner and more maintainable code.
            MARKDOWN);

        $manager->persist($article);
        $manager->flush();
    }
}