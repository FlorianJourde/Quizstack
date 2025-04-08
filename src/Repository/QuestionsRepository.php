<?php

namespace App\Repository;

use App\Entity\Answers;
use App\Entity\Questions;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\AbstractQuery;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Questions>
 */
class QuestionsRepository extends ServiceEntityRepository
{
//    private Connection $connection;
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Questions::class);
    }

    public function findRandomQuestionByFilters(?string $difficulty, array $categories): ?Questions
    {
        $qb = $this->createQueryBuilder('q')
            ->leftJoin('q.categories', 'ca')
            ->leftJoin('q.choices', 'ch');

        if (!empty($categories)) {
            $qb->andWhere('ca.name IN (:categories)')
                ->setParameter('categories', $categories);
        }

        if ($difficulty) {
            $qb->andWhere('q.difficulty = :difficulty')
                ->setParameter('difficulty', $difficulty);
        }

        $qb->orderBy('RAND()');

        return $qb->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findExplanationByQuestionId(int $questionId): ?string
    {
        return $this->createQueryBuilder('q')
            ->select('q.explanation')
            ->where('q.id = :questionId')
            ->setParameter('questionId', $questionId)
            ->getQuery()
            ->getOneOrNullResult(AbstractQuery::HYDRATE_SINGLE_SCALAR);
    }

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
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Questions
    //    {
    //        return $this->createQueryBuilder('q')
    //            ->andWhere('q.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
