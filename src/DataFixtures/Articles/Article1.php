<?php

namespace App\DataFixtures\Articles;

use App\Entity\Article;
use Doctrine\Persistence\ObjectManager;

class Article1
{
    public function createArticle(ObjectManager $manager, \DateTimeImmutable $date): void
    {
        $article = new Article();

        $article->setTitle('Docker: Understanding Containers in 5 Minutes');
        $article->setSlug('docker-understanding-containers');
        $article->setImage('docker.webp');
        $article->setStatus(true);
        $article->setCreationDate($date);
        $article->setUpdateDate($date);

        $article->setContent(<<<'MARKDOWN'
# Docker: Understanding Containers in 5 Minutes

Docker has become a standard tool in modern software development.

## Why Use Docker?

A container allows an application to run in an isolated environment.

Benefits include:

- Consistent environments everywhere
- Simplified deployments
- Fewer dependency conflicts

## Example

    docker run nginx

This command starts an Nginx server inside a container.

## Conclusion

Docker significantly simplifies application development and deployment.
MARKDOWN);

        $manager->persist($article);
        $manager->flush();
    }
}