<?php

namespace App\Controller;

use App\Entity\Categories;
use App\Form\CategoriesFormType;
use App\Form\CategoryItemType;
use App\Repository\CategoriesRepository;

//use Doctrine\ORM\EntityManager;
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
        $categories = $categoriesRepository->findAll();

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
        $categories = $categoriesRepository->findAll();

        $newCategory = new Categories();
        $newCategory->setStatus(true);

        $addForm = $this->createForm(CategoryItemType::class, $newCategory);
        $addForm->handleRequest($request);

        if ($addForm->isSubmitted() && $addForm->isValid()) {
            $entityManager->persist($newCategory);
            $entityManager->flush();

            $this->addFlash('success', 'New category added successfully.');
//            return $this->redirectToRoute('categories_edit');
        }

        $formData = ['categories' => $categories];
        $editForm = $this->createForm(CategoriesFormType::class, $formData);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $entityManager->flush();

            $this->addFlash('success', 'All categories updated successfully.');
//            return $this->redirectToRoute('categories_edit');
        }

        return $this->render('categories/edit.html.twig', [
            'categories' => $categories,
            'editForm' => $editForm->createView(),
            'addForm' => $addForm->createView(),
        ]);
    }

    #[IsGranted('ROLE_ADMIN')]
    #[Route('/categories/{id}/delete', name: 'category_delete', methods: ['POST'])]
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
    #[Route('/categories/{id}/toggle', name: 'category_toggle', methods: ['GET'])]
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
}