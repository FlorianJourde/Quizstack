<?php

namespace App\Repository;

use App\Entity\Score;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Score>
 */
class ScoreRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Score::class);
    }

    public function findScoreWithLimit(int $limit, string $period = 'all_time', array $excludedUsernames = ['Anonymous']): ?array
    {
        $orderField = match ($period) {
            'week' => 's.week',
            'month' => 's.month',
            default => 's.all_time'
        };

        $queryBuilder = $this->createQueryBuilder('s')
            ->leftJoin('s.users', 'u')
            ->addSelect('u')
            ->orderBy($orderField, 'DESC')
            ->setMaxResults($limit);

        if (!empty($excludedUsernames)) {
            $queryBuilder
                ->andWhere('u.username NOT IN (:excludedUsernames)')
                ->setParameter('excludedUsernames', $excludedUsernames);
        }

        return $queryBuilder
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
