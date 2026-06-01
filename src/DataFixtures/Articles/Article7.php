<?php

namespace App\DataFixtures\Articles;

use App\Entity\Article;
use Doctrine\Persistence\ObjectManager;

class Article7
{
    public function createArticle(ObjectManager $manager, \DateTimeImmutable $date): void
    {
        $article = new Article();

        $article->setTitle('SQL Query Optimization Techniques for Better Performance');
        $article->setSlug('sql-query-optimization');
        $article->setExcerpt('Understanding SQL optimization helps build faster applications and reduces database load.');
        $article->setImage('room.jpg');
        $article->setStatus(true);
        $article->setCreationDate($date);
        $article->setUpdateDate($date);

        $article->setContent(
            <<<'MARKDOWN'
            SQL optimization is **essential** for building *performant* applications at scale.
            
            ## Use Indexes Wisely
            
            Indexes speed up read queries but slow down writes. Choose indexed columns carefully.
            
            Example:
            
            ```sql
            CREATE INDEX idx_users_email ON users(email);
            CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);
            ```
            
            ## Avoid SELECT *
            
            Always specify the columns you need to reduce data transfer.
            
            Example:
            
            ```sql
            -- Avoid
            SELECT * FROM users WHERE status = 'active';
            
            -- Prefer
            SELECT id, name, email FROM users WHERE status = 'active';
            ```
            
            ## Use EXPLAIN
            
            **Analyze** your queries to understand how the database executes them.
            
            Example:
            
            ```sql
            EXPLAIN ANALYZE
            SELECT u.name, COUNT(o.id) as order_count
            FROM users u
            LEFT JOIN orders o ON u.id = o.user_id
            GROUP BY u.id;
            ```
            
            ## Window Functions
            
            Perform calculations across rows without collapsing results.
            
            Example:
            
            ```sql
            SELECT 
                name,
                salary,
                AVG(salary) OVER (PARTITION BY department) as dept_avg,
                RANK() OVER (ORDER BY salary DESC) as salary_rank
            FROM employees;
            ```
            
            ## Conclusion
            
            Mastering SQL optimization techniques significantly improves application performance and scalability.
            MARKDOWN);

        $manager->persist($article);
        $manager->flush();
    }
}