<?php

namespace App\Repository;

use App\Entity\Article;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Article>
 */
class ArticleRepository extends ServiceEntityRepository
{
    public const ARTICLES_PER_PAGE = 12;

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Article::class);
    }

    public function getArticlesPaginator(int $offset, bool $publishedOnly = true): Paginator
    {
        $query = $this->createQueryBuilder('a')
            ->orderBy('a.creationDate', 'DESC')
            ->setMaxResults(self::ARTICLES_PER_PAGE)
            ->setFirstResult($offset);

        if ($publishedOnly) {
            $query->andWhere('a.status = :status')
                ->setParameter('status', true);
        }

        return new Paginator($query);
    }
}