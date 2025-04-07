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
//        dump($difficulty);
//        die();

        $qb = $this->createQueryBuilder('q')
            ->leftJoin('q.categories', 'c')
            ->leftJoin('q.answers', 'a');

        if (!empty($categories)) {
            $qb->andWhere('c.name IN (:categories)')
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
//            ->getResult();
            ->getOneOrNullResult(AbstractQuery::HYDRATE_SINGLE_SCALAR);
//            ->getScalarResult();

//        return $result;
    }

//    public function findAnswersByQuestionId(int $questionId): ?array
//    {
//        return $this->createQueryBuilder('a')
//            ->innerJoin('a.questions', 'q')
//            ->where('a.question_id = :questionId')
//            ->andWhere('a.isCorrect = true')  // Ajout d'une condition pour les réponses correctes
//            ->setParameter('questionId', $questionId)
//            ->getQuery()
//            ->getResult();
//    }

//    public function findRandomQuestion(): ?Questions
//    {
//        return $this->createQueryBuilder('q')
//            ->orderBy('RAND()')
//            ->setMaxResults(1)
//            ->getQuery()
//            ->getOneOrNullResult();
//    }


//    public function findQuestionsDifficulties(): ?array
//    {
//        return $this->createQueryBuilder('q')
//            ->select('DISTINCT q.difficulty')
//            ->orderBy('q.difficulty', 'ASC')
//            ->getQuery()
//            ->getResult();
////            ->setMaxResults(1)
////            ->getQuery()
////            ->getOneOrNullResult();
//    }
//
//    public function findRandomQuestionByCategories(array $categories): ?Questions
//    {
//        return $this->createQueryBuilder('q')
//            ->leftJoin('q.categories', 'c')
//            ->leftJoin('q.answers', 'a')
//            ->where('c.name IN (:categories)')
//            ->setParameter('categories', $categories)
//            ->orderBy('RAND()')
//            ->setMaxResults(1)
//            ->getQuery()
//            ->getOneOrNullResult();
//    }

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
