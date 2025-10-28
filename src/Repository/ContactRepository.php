<?php

namespace App\Repository;

use App\Entity\Contact;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Contact>
 */
class ContactRepository extends ServiceEntityRepository
{
    public const MESSAGES_PER_PAGE = 20;

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Contact::class);
    }

    public function getMessagesPaginator(int $offset): Paginator
    {
        $query = $this->createQueryBuilder('c')
            ->orderBy('c.id', 'DESC')
            ->setMaxResults(self::MESSAGES_PER_PAGE)
            ->setFirstResult($offset);

        return new Paginator($query);
    }
}
