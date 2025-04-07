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
//            ->getScalarResult();

        return array_column($results, 'id');
    }


//        public function findOneBySomeField($value): ?Answers
//        {
//            return $this->createQueryBuilder('a')
//                ->andWhere('a.exampleField = :val')
//                ->setParameter('val', $value)
//                ->getQuery()
//                ->getOneOrNullResult()
//            ;
//        }

    //    /**
    //     * @return Answers[] Returns an array of Answers objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('a')
    //            ->andWhere('a.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('a.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Answers
    //    {
    //        return $this->createQueryBuilder('a')
    //            ->andWhere('a.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
