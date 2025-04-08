<?php

namespace App\Repository;

use App\Entity\Comments;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Comments>
 */
class CommentsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Comments::class);
    }

    public function findCommentsByQuestionId(int $questionId): ?array
    {
        return $this->createQueryBuilder('c')
            ->where('c.question = :questionId')
            ->setParameter('questionId', $questionId)
            ->orderBy('c.creation_date', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
