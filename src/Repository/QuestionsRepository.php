<?php

namespace App\Repository;

use App\Entity\Questions;
use App\Entity\Users;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\AbstractQuery;
use Doctrine\ORM\Query;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Questions>
 */
class QuestionsRepository extends ServiceEntityRepository
{
    public const QUESTIONS_PER_PAGE = 20;

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Questions::class);
    }

    public function findRandomQuestionByFilters(?string $difficulty, array $categories): ?Questions
    {
        $qb = $this->createQueryBuilder('q')
            ->leftJoin('q.categories', 'ca')
            ->leftJoin('q.choices', 'ch')
            ->where('q.status = :status')
            ->setParameter('status', true);

        if (!empty($categories)) {
            $qb->andWhere('ca.name IN (:categories)')
                ->setParameter('categories', $categories);
        }

        if ($difficulty) {
            $qb->andWhere('q.difficulty = :difficulty')
                ->setParameter('difficulty', $difficulty);
        }

        $countQb = clone $qb;
        $total = $countQb->select('COUNT(q.id)')
            ->getQuery()
            ->getSingleScalarResult();

        if ($total == 0) {
            return null;
        }

        $offset = mt_rand(0, $total - 1);

        return $qb->setFirstResult($offset)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

//    public function findRandomQuestionByFilters(?string $difficulty, array $categories): ?Questions
//    {
//        $qb = $this->createQueryBuilder('q')
//            ->leftJoin('q.categories', 'ca')
//            ->leftJoin('q.choices', 'ch')
//            ->where('q.status = :status')
//            ->setParameter('status', true);
//
//        if (!empty($categories)) {
//            $qb->andWhere('ca.name IN (:categories)')
//                ->setParameter('categories', $categories);
//        }
//
//        if ($difficulty) {
//            $qb->andWhere('q.difficulty = :difficulty')
//                ->setParameter('difficulty', $difficulty);
//        }
//
//        $qb->orderBy('RAND()');
//
//        return $qb->setMaxResults(1)
//            ->getQuery()
//            ->getOneOrNullResult();
//    }

    public function findExplanationByQuestionId(int $questionId): ?string
    {
        return $this->createQueryBuilder('q')
            ->select('q.explanation')
            ->where('q.id = :questionId')
            ->setParameter('questionId', $questionId)
            ->getQuery()
            ->getOneOrNullResult(AbstractQuery::HYDRATE_SINGLE_SCALAR);
    }

//    public function findAllByUpdateDateQuery(): ?Query
//    {
//        return $this->createQueryBuilder('q')
//            ->orderBy('q.update_date', 'DESC')
//            ->getQuery();
//    }

    public function getQuestionsPaginator(int $offset): Paginator
    {
        $query = $this->createQueryBuilder('q')
            ->orderBy('q.update_date', 'DESC')
            ->setMaxResults(self::QUESTIONS_PER_PAGE)
            ->setFirstResult($offset)
            ->getQuery();

        return new Paginator($query);
    }

//    public function findAllByUserIdAndUpdateDateQuery($user): ?Query
//    {
//        return $this->createQueryBuilder('q')
//            ->where('q.user = :user')
//            ->setParameter('user', $user)
//            ->orderBy('q.update_date', 'DESC')
//            ->getQuery();
//    }


    public function getQuestionsByUserIdPaginator(Users $user, int $offset): Paginator
    {
        $query = $this->createQueryBuilder('q')
            ->andWhere('q.user = :user')
            ->setParameter('user', $user)
            ->orderBy('q.creation_date', 'DESC')
            ->setMaxResults(self::QUESTIONS_PER_PAGE)
            ->setFirstResult($offset)
            ->getQuery();

        return new Paginator($query);
    }


//    public function getCommentPaginator(Users $user, int $offset): Paginator
//    {
//        $query = $this->createQueryBuilder('c')
//            ->andWhere('c.user = :user')
//            ->setParameter('user', $user)
//            ->orderBy('c.creation_date', 'DESC')
//            ->setMaxResults(self::QUESTIONS_PER_PAGE)
//            ->setFirstResult($offset)
//            ->getQuery();
//
//        return new Paginator($query);
//    }

//    public function findAllByUpdateDate(): ?array
//    {
//        return $this->createQueryBuilder('q')
//            ->orderBy('q.update_date', 'DESC')
//            ->getQuery()
//            ->getResult();
//    }
//
//    public function findAllByUserIdAndUpdateDate($userId): ?array
//    {
//        return $this->createQueryBuilder('q')
//            ->where('q.user = :userId')
//            ->setParameter('userId', $userId)
//            ->orderBy('q.update_date', 'DESC')
//            ->getQuery()
//            ->getResult();
//    }
//
//    /**
//     * @return Questions[] Returns an array of Questions objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('q')
//            ->andWhere('q.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('q.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult();
//    }
//
//    public function findOneBySomeField($value): ?Questions
//    {
//        return $this->createQueryBuilder('q')
//            ->andWhere('q.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult();
//    }
}
