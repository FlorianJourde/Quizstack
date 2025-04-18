<?php

namespace App\Controller;

use App\Form\ProfileFormType;
use App\Form\UsersFormType;
use App\Repository\UsersRepository;
use Doctrine\ORM\EntityManagerInterface;
//use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class UsersController extends AbstractController
{
    #[IsGranted('ROLE_ADMIN')]
    #[Route('/users', name: 'users')]
    public function users(
        Request            $request,
        UsersRepository    $usersRepository
    ): Response
    {
        $offset = max(0, $request->query->getInt('offset', 0));
        $paginator = $usersRepository->getUserPaginator($offset);

//        $query = $usersRepository->findAllByLastAuthenticationDate();
//
//        $pagination = $paginator->paginate(
//            $query,
//            $page,
//            $limit
//        );

        return $this->render('users/index.html.twig', [
            'users' => $paginator,
            'previous' => $offset - UsersRepository::USERS_PER_PAGE,
            'next' => min(count($paginator), $offset + UsersRepository::USERS_PER_PAGE),
        ]);
    }

    #[IsGranted('ROLE_ADMIN')]
    #[Route('/user/{id}', name: 'user', requirements: ['id' => '\d+'])]
    public function user(int $id, UsersRepository $usersRepository): Response
    {
        $user = $usersRepository->find($id);

        if (!$user) {
            throw $this->createNotFoundException('User not found.');
        }

        return $this->render('users/user.html.twig', [
            'user' => $user,
        ]);
    }

    #[IsGranted('ROLE_ADMIN')]
    #[Route('/user/{id}/edit', name: 'user_edit', requirements: ['id' => '\d+'])]
    public function edit(
        int                    $id,
        UsersRepository        $usersRepository,
        Request                $request,
        EntityManagerInterface $entityManager
    ): Response
    {
        $user = $usersRepository->find($id);

        if (!$user) {
            throw $this->createNotFoundException('User not found.');
        }

        $form = $this->createForm(UsersFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            $this->addFlash('success', 'User informations has been updated successfully.');

            return $this->redirectToRoute('users');
        }

        return $this->render('users/edit.html.twig', [
            'user' => $user,
            'form' => $form
        ]);
    }
}