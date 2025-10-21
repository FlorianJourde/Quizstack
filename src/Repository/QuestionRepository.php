<?php

namespace App\Repository;

use App\Entity\Category;
use App\Entity\Question;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\AbstractQuery;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Question>
 */
class QuestionRepository extends ServiceEntityRepository
{
    public const QUESTIONS_PER_PAGE = 50;

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Question::class);
    }

    public function findRandomQuestionByFilters(?string $difficulty, array $category): ?Question
    {
        $qb = $this->createQueryBuilder('q')
            ->leftJoin('q.categories', 'ca')
            ->leftJoin('q.choices', 'ch')
            ->where('q.status = :questionStatus')
            ->andWhere('ca.status = :categoryStatus')
            ->setParameter('questionStatus', true)
            ->setParameter('categoryStatus', true);

        if (!empty($category)) {
            $qb->andWhere('ca.name IN (:categories)')
                ->setParameter('categories', $category);
        }

        if ($difficulty) {
            $qb->andWhere('q.difficulty = :difficulty')
                ->setParameter('difficulty', $difficulty);
        }

        $countQb = clone $qb;
        $total = $countQb->select('COUNT(DISTINCT q.id)')
            ->getQuery()
            ->getSingleScalarResult();

        if ($total == 0) {
            return null;
        }

        $offset = mt_rand(0, $total - 1);

        return $qb->select('q')
            ->distinct(true)
            ->setFirstResult($offset)
            ->setMaxResults(1)
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

    public function getQuestionsPaginator(int $offset, ?Category $category = null): Paginator
    {
        $query = $this->createQueryBuilder('q')
            ->orderBy('q.update_date', 'DESC')
            ->setMaxResults(self::QUESTIONS_PER_PAGE)
            ->setFirstResult($offset);

        if ($category) {
            $query->andWhere(':category MEMBER OF q.categories')
                ->setParameter('category', $category);
        }

        return new Paginator($query);
    }

    public function getQuestionsByUserIdPaginator(User $user, int $offset, ?Category $category = null): Paginator
    {
        $query = $this->createQueryBuilder('q')
            ->andWhere('q.user = :user')
            ->setParameter('user', $user)
            ->orderBy('q.creation_date', 'DESC')
            ->setMaxResults(self::QUESTIONS_PER_PAGE)
            ->setFirstResult($offset);

        if ($category) {
            $query->andWhere(':category MEMBER OF q.categories')
                ->setParameter('category', $category);
        }

        return new Paginator($query);
    }

    public function findNextQuestion(Question $question)
    {
        return $this->createQueryBuilder('q')
            ->where('q.update_date > :update_date')
            ->setParameter('update_date', $question->getUpdateDate())
            ->orderBy('q.update_date', 'ASC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findPreviousQuestion(Question $question)
    {
        return $this->createQueryBuilder('q')
            ->where('q.update_date < :update_date')
            ->setParameter('update_date', $question->getUpdateDate())
            ->orderBy('q.update_date', 'DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }
}
