<?php

namespace App\Utils;

use Doctrine\Persistence\ObjectManager;
use App\Entity\Category;

class CategoryHelper
{
    private $manager;

    public function __construct(ObjectManager $manager)
    {
        $this->manager = $manager;
    }

    public function getCategoryByName($name)
    {
        return $this->manager->getRepository(Category::class)->findOneBy(['name' => $name]);
    }

    public function getCategoriesByNames(array $names)
    {
        $categories = [];
        foreach ($names as $name) {
            $category = $this->getCategoryByName($name);
            if ($category) {
                $categories[] = $category;
            }
        }
        return $categories;
    }
}