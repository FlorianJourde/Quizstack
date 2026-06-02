<?php

namespace App\DataFixtures\Articles;

use App\Entity\Article;
use Doctrine\Persistence\ObjectManager;

class Article2
{
    public function createArticle(ObjectManager $manager, \DateTimeImmutable $date): void
    {
        $article = new Article();

        $article->setTitle('Docker: Understanding Containers in 5 Minutes');
        $article->setSlug('docker-understanding-containers');
        $article->setExcerpt('Docker has become a standard tool in modern software development.');
        $article->setImage('vector.jpg');
        $article->setStatus(true);
        $article->setCreationDate($date);
        $article->setUpdateDate($date);

        $article->setContent(
            <<<'MARKDOWN'
            Docker has become a standard tool in modern software development. Here's the [documentation](https://www.docker.com/).
            
            ## Why Use Docker?
            
            A container allows an application to run in an isolated environment.
            
            Benefits include:
            
            - Consistent environments everywhere
            - Simplified deployments
            - Fewer dependency conflicts
            
            > Docker images are immutable.
            
            ## Example
            
            ```bash
            docker run nginx
            ```
            
            This is a list :
            1. **Gérer les images** : `pull`, `build`, `push`, `tag`, `history`
            2. **Manipuler les conteneurs** : `run`, `ps`, `stop`, `rm`, `restart`
            3. **Debugger efficacement** : `logs`, `exec`, `inspect`, `stats`
            4. **Volumes et persistance** : `create`, `mount`, `prune`
            5. **Réseaux Docker** : `create`, `connect`, `inspect`
            
            This command starts an Nginx server inside a container.
            
            ## Conclusion
            
            Docker significantly simplifies application development and deployment.
            MARKDOWN);

        $manager->persist($article);
        $manager->flush();
    }
}