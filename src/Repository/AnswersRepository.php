<?php

namespace App\Repository;

use App\Entity\Answers;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Answers>
 */
class AnswersRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Answers::class);
    }

    public function findCorrectAnswerIdsByQuestionId(int $questionId): ?array
    {
        $results = $this->createQueryBuilder('a')
            ->select('a.id')
            ->innerJoin('a.question', 'q')
            ->where('a.question = :questionId')
            ->andWhere('a.correct = true')
            ->setParameter('questionId', $questionId)
            ->getQuery()
            ->getResult();

        return array_column($results, 'id');
    }
}
