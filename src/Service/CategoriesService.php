<?php

namespace App\Service;

use App\Entity\Category;
use Doctrine\ORM\EntityManagerInterface;

class CategoriesService
{

    public function initializeCategoryPositions(EntityManagerInterface $entityManager)
    {

        $categories = $entityManager->getRepository(Category::class)
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