<?php

namespace App\Repository;

use App\Entity\Choices;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Choices>
 */
class ChoicesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Choices::class);
    }

    public function findCorrectAnswerIdsByQuestionId(int $questionId): ?array
    {
        $results = $this->createQueryBuilder('c')
            ->select('c.id')
            ->innerJoin('c.question', 'q')
            ->where('c.question = :questionId')
            ->andWhere('c.correct = true')
            ->setParameter('questionId', $questionId)
            ->getQuery()
            ->getResult();

        return array_column($results, 'id');
    }
}
