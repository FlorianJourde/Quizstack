<?php

namespace App\Repository;

use App\Entity\Category;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Category>
 */
class CategoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Category::class);
    }

    public function findCategoriesByOrder(?bool $status = null): array
    {
        $categories = $this->createQueryBuilder('c')
            ->orderBy('CASE WHEN c.position IS NULL THEN 1 ELSE 0 END', 'ASC')
            ->addOrderBy('c.position', 'ASC');

            if ($status !== null) {
                $categories->andWhere('c.status = :status')
                    ->setParameter('status', $status);
            }

        $categories = $categories
            ->getQuery()
            ->getResult();

        if (empty($categories)) {
            return [];
        }

        $categoryIds = array_map(function ($category) {
            return $category->getId();
        }, $categories);

        $countsQuery = $this->createQueryBuilder('c')
            ->select('c.id', 'COUNT(q.id) as questionsCount')
            ->leftJoin('c.questions', 'q')
            ->where('c.id IN (:ids)')
            ->setParameter('ids', $categoryIds)
            ->groupBy('c.id')
            ->getQuery();

        $counts = $countsQuery->getResult();

        $countsMap = [];
        foreach ($counts as $count) {
            $countsMap[$count['id']] = $count['questionsCount'];
        }

        foreach ($categories as $category) {
            $categoryId = $category->getId();
            if (isset($countsMap[$categoryId])) {
                $category->setQuestionsCount($countsMap[$categoryId]);
            } else {
                $category->setQuestionsCount(0);
            }
        }

        return $categories;
    }
}
