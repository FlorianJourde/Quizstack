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

    public function findScoreWithLimit(int $limit, string $period = 'all_time', string $excludedUsername = 'Anonymous'): ?array
    {
        $orderField = match ($period) {
            'week' => 's.week',
            'month' => 's.month',
            default => 's.all_time'
        };

        return $this->createQueryBuilder('s')
            ->leftJoin('s.users', 'u')
            ->addSelect('u')
            ->where('u.username != :excludedUsername')
            ->setParameter('excludedUsername', $excludedUsername)
            ->orderBy($orderField, 'DESC')
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

    public function resetAllTimeScores(): int
    {
        return $this->createQueryBuilder('s')
            ->update()
            ->set('s.all_time', 0)
            ->getQuery()
            ->execute();
    }
}
