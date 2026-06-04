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
            JavaScript has evolved dramatically over the past decade. What was once considered standard practice is now often outdated or harmful to your codebase. Yet many developers continue to use patterns that belong in the past.

            This article explores the most persistent bad habits in JavaScript and their modern alternatives.
            
            ## Forget `var`: Use `let` and `const`
            
            The `var` keyword uses function scoping, which leads to unexpected behavior:
            
            ```js
            if (true) {
              var message = "Hello";
            }
            console.log(message); // "Hello" — var ignores block scope
            ```
            
            Variables declared with `var` are also hoisted, which can mask bugs:
            
            ```js
            console.log(name); // undefined, not an error
            var name = "Alice";
            ```
            
            **The fix:** Use `const` by default, and `let` only when reassignment is needed. Both respect block scope and behave predictably.
            
            ## Use `querySelector` Over Older DOM Methods
            
            Methods like `getElementById` and `getElementsByClassName` have inconsistencies. The latter returns live HTMLCollections that don't support array methods:
            
            ```js
            const items = document.getElementsByClassName("item");
            items.forEach(item => console.log(item)); // TypeError
            ```
            
            **The fix:** Use `querySelector` and `querySelectorAll`. They accept any CSS selector and return consistent, iterable results:
            
            ```js
            const items = document.querySelectorAll(".item");
            items.forEach(item => console.log(item)); // Works perfectly
            ```
            
            ## Template Literals Over String Concatenation
            
            Building strings with `+` is verbose and error-prone:
            
            ```js
            const greeting = "Hello, " + name + ". You are " + age + " years old.";
            ```
            
            **The fix:** Template literals are cleaner and support multiline strings:
            
            ```js
            const greeting = `Hello, ${name}. You are ${age} years old.`;
            ```
            
            ## Async/Await Over Callback Hell
            
            Nested callbacks create unreadable code:
            
            ```js
            getUser(id, function(user) {
              getOrders(user.id, function(orders) {
                getDetails(orders[0].id, function(details) {
                  console.log(details);
                });
              });
            });
            ```
            
            **The fix:** `async/await` flattens the structure and centralizes error handling:
            
            ```js
            async function getOrderDetails(id) {
              try {
                const user = await getUser(id);
                const orders = await getOrders(user.id);
                const details = await getDetails(orders[0].id);
                console.log(details);
              } catch (error) {
                console.error(error);
              }
            }
            ```
            
            ## Strict Equality Over Loose Equality
            
            The `==` operator performs type coercion with confusing results:
            
            ```js
            console.log(0 == "0");  // true
            console.log(0 == []);   // true
            ```
            
            **The fix:** Always use `===` and `!==` to compare both value and type.
            
            ## Default Parameters Over Logical OR
            
            The old pattern fails with valid falsy values:
            
            ```js
            function greet(name) {
              name = name || "Guest";
            }
            greet(""); // Uses "Guest" instead of empty string
            ```
            
            **The fix:** Use default parameters or nullish coalescing:
            
            ```js
            function greet(name = "Guest") { }
            
            const value = input ?? "default"; // Only defaults for null/undefined
            ```
            
            ## Immutable Array Operations
            
            Methods like `push`, `sort`, and `splice` mutate the original array, causing bugs in frameworks like React.
            
            **The fix:** Create new arrays instead:
            
            ```js
            const sorted = [...numbers].sort();
            const withNewItem = [...numbers, 4];
            const filtered = numbers.filter(n => n !== 2);
            ```
            
            ES2023 also introduced `toSorted()`, `toReversed()`, and `toSpliced()` as non-mutating alternatives.
            
            ## Conclusion
            
            Modern JavaScript is more readable and predictable. By adopting these patterns—`const`/`let`, template literals, `async/await`, strict equality, and immutable operations—you'll write code that's easier to understand and maintain.
            
            Take a look at your current projects. How many of these old habits can you spot?
            MARKDOWN);

        $manager->persist($article);
        $manager->flush();
    }
}