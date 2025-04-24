<?php

namespace App\Repository;

use App\Entity\Categories;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Categories>
 */
class CategoriesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Categories::class);
    }

    public function findCategoriesByOrder()
    {
        return $this->createQueryBuilder('c')
            ->orderBy('CASE WHEN c.position IS NULL THEN 1 ELSE 0 END', 'ASC')
            ->addOrderBy('c.position', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
