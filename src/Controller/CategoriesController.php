<?php

namespace App\Controller;

use App\Entity\Categories;
use App\Form\CategoriesFormType;
use App\Form\CategoryItemType;
use App\Repository\CategoriesRepository;
use App\Service\CategoriesService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class CategoriesController extends AbstractController
{
    #[IsGranted('ROLE_ADMIN')]
    #[Route('/categories', name: 'categories')]
    public function users(CategoriesRepository $categoriesRepository): Response
    {
        $categories = $categoriesRepository->findCategoriesByOrder();

        return $this->render('categories/index.html.twig', [
            'categories' => $categories
        ]);
    }

    #[IsGranted('ROLE_ADMIN')]
    #[Route('/categories/edit', name: 'categories_edit', methods: ['GET', 'POST'])]
    public function edit(
        CategoriesRepository   $categoriesRepository,
        Request                $request,
        EntityManagerInterface $entityManager
    ): Response
    {
        $categories = $categoriesRepository->findCategoriesByOrder();

        $newCategory = new Categories();
        $newCategory->setStatus(true);

        $addForm = $this->createForm(CategoryItemType::class, $newCategory);
        $addForm->handleRequest($request);

        if ($addForm->isSubmitted() && $addForm->isValid()) {
            $entityManager->persist($newCategory);
            $entityManager->flush();

            $this->addFlash('success', 'New category added successfully.');
            return $this->redirectToRoute('categories_edit');
        }

        $formData = ['categories' => $categories];
        $editForm = $this->createForm(CategoriesFormType::class, $formData);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            foreach ($editForm->get('categories') as $categoryForm) {
                if ($categoryForm->get('delete')->isClicked()) {
                    $category = $categoryForm->getData();

                    $entityManager->remove($category);
                    $entityManager->flush();

                    $this->addFlash('success', "Category '{$category->getName()}' has been deleted.");
                    return $this->redirectToRoute('categories_edit');
                }
            }

            $entityManager->flush();

            $this->addFlash('success', 'All categories updated successfully.');
            return $this->redirectToRoute('categories_edit');
        }

        return $this->render('categories/edit.html.twig', [
            'categories' => $categories,
            'editForm' => $editForm->createView(),
            'addForm' => $addForm->createView(),
        ]);
    }

    #[IsGranted('ROLE_ADMIN')]
    #[Route('/category/{id}/delete', name: 'category_delete', methods: ['POST'])]
    public function delete(
        Request                $request,
        Categories             $category,
        EntityManagerInterface $entityManager
    ): Response
    {
        if ($this->isCsrfTokenValid('delete' . $category->getId(), $request->request->get('_token'))) {
            $entityManager->remove($category);
            $entityManager->flush();
            $this->addFlash('success', 'Category deleted successfully.');
        }

        return $this->redirectToRoute('categories_edit');
    }


    #[IsGranted('ROLE_ADMIN')]
    #[Route('/category/{id}/toggle', name: 'category_toggle', methods: ['GET'])]
    public function toggle(
        Categories             $category,
        EntityManagerInterface $entityManager
    ): Response
    {
        $category->setStatus(!$category->getStatus());
        $entityManager->flush();

        $status = $category->getStatus() ? 'enabled' : 'disabled';
        $this->addFlash('success', "Category '{$category->getName()}' has been {$status}.");

        return $this->redirectToRoute('categories_edit');
    }

    #[IsGranted('ROLE_ADMIN')]
    #[Route('/category/{id}/move-up', name: 'category_move_up')]
    public function moveUp(Categories $category, EntityManagerInterface $entityManager, CategoriesService $categoriesService): Response
    {
        $categoriesService->initializeCategoryPositions($entityManager);
        $currentPosition = $category->getPosition();

        if ($currentPosition <= 0) {
            return $this->redirectToRoute('categories_edit');
        }

        $previousCategory = $entityManager->getRepository(Categories::class)
            ->findOneBy(['position' => $currentPosition - 1]);

        if ($previousCategory) {
            $previousCategory->setPosition($currentPosition);
            $category->setPosition($currentPosition - 1);

            $entityManager->flush();
        }

        return $this->redirectToRoute('categories_edit');
    }

    #[IsGranted('ROLE_ADMIN')]
    #[Route('/admin/category/{id}/move-down', name: 'category_move_down')]
    public function moveDown(Categories $category, EntityManagerInterface $entityManager, CategoriesService $categoriesService): Response
    {
        $categoriesService->initializeCategoryPositions($entityManager);

        $currentPosition = $category->getPosition();

        $maxPosition = $entityManager->createQuery('SELECT MAX(c.position) FROM App\Entity\Categories c')
            ->getSingleScalarResult();

        if ($currentPosition >= $maxPosition) {
            return $this->redirectToRoute('categories_edit');
        }

        $nextCategory = $entityManager->getRepository(Categories::class)
            ->findOneBy(['position' => $currentPosition + 1]);

        if ($nextCategory) {
            $nextCategory->setPosition($currentPosition);
            $category->setPosition($currentPosition + 1);

            $entityManager->flush();
        }

        return $this->redirectToRoute('categories_edit');
    }
}