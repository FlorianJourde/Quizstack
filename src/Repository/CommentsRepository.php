<?php

namespace App\Repository;

use App\Entity\Comments;
use App\Entity\Users;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Comments>
 */
class CommentsRepository extends ServiceEntityRepository
{
    public const COMMENTS_PER_PAGE = 50;

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

    public function findCommentsByUserId(Users $user): ?Query
    {
        return $this->createQueryBuilder('c')
//            ->join('c.user', 'u')
//            ->join('c.question', 'q')
            ->where('c.user = :userId')
            ->setParameter('userId', $user)
            ->orderBy('c.creation_date', 'ASC')
            ->getQuery();
    }

    public function getCommentPaginator(Users $user, int $offset): Paginator
    {
        $query = $this->createQueryBuilder('c')
            ->andWhere('c.user = :user')
            ->setParameter('user', $user)
            ->orderBy('c.creation_date', 'DESC')
            ->setMaxResults(self::COMMENTS_PER_PAGE)
            ->setFirstResult($offset)
            ->getQuery();

        return new Paginator($query);
    }

//    public function getAllPaginate(int $page, int $limit, int $userId): Paginator
//    {
//        $query = $this->createQueryBuilder('c')
//            ->orderBy('c.creation_date', 'DESC')
//            ->andWhere('c.user = :user')
//            ->setParameter('user', $userId);
//
//        $paginator = new Paginator($query->getQuery(), true);
//        $paginator->getQuery()
//            ->setFirstResult($limit * ($page - 1))
//            ->setMaxResults($limit);
//        return $paginator;
//    }
}
