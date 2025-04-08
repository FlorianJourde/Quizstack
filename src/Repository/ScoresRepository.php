<?php

namespace App\Repository;

use App\Entity\Scores;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Scores>
 */
class ScoresRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Scores::class);
    }

    public function findScoreWithLimit(int $limit): ?array
    {
        return $this->createQueryBuilder('s')
            ->leftJoin('s.users', 'u')
            ->addSelect('u')
            ->orderBy('s.week', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
    }

    public function resetWeeklyScores(): int
    {
        return $this->createQueryBuilder('s')
            ->update()
            ->set('s.week', 0)
            ->getQuery()
            ->execute();
    }

    public function resetMonthlyScores(): int
    {
        return $this->createQueryBuilder('s')
            ->update()
            ->set('s.month', 0)
            ->getQuery()
            ->execute();
    }
}
