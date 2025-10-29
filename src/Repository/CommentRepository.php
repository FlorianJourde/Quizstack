<?php

namespace App\Repository;

use App\Entity\Comment;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Comment>
 */
class CommentRepository extends ServiceEntityRepository
{
    public const COMMENTS_PER_PAGE = 10;

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Comment::class);
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

    public function findCommentsByUserId(User $user): ?Query
    {
        return $this->createQueryBuilder('c')
            ->where('c.user = :userId')
            ->setParameter('userId', $user)
            ->orderBy('c.creation_date', 'ASC')
            ->getQuery();
    }

    public function getLastComments(): array
    {
        $query = $this->createQueryBuilder('c')
            ->orderBy('c.creation_date', 'DESC')
            ->setMaxResults(self::COMMENTS_PER_PAGE)
            ->getQuery()
            ->getResult();

        return $query;
    }
}
