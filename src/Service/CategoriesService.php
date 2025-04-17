<?php

namespace App\Service;

use App\Entity\Categories;
use Doctrine\ORM\EntityManagerInterface;

class CategoriesService
{

//    public function __construct(
//        EntityManagerInterface $entityManager
//    )
//    {
//    }

    public function initializeCategoryPositions(EntityManagerInterface $entityManager)
    {

        $categories = $entityManager->getRepository(Categories::class)
            ->findBy([], ['id' => 'ASC']);

        $needsInitialization = false;
        foreach ($categories as $category) {
            if ($category->getPosition() === null) {
                $needsInitialization = true;
                break;
            }
        }

        if ($needsInitialization) {
            foreach ($categories as $position => $category) {
                $category->setPosition($position);
            }
            $entityManager->flush();
        }
    }
}