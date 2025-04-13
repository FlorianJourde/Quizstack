<?php

namespace App\Controller;

use App\Repository\UsersRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class UsersController extends AbstractController
{
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
    #[Route('/users', name: 'users')]
    public function users(
        Request $request,
        UsersRepository $usersRepository,
        PaginatorInterface $paginator
    ): Response
    {
        $page = $request->query->getInt('page', 1);
        $limit = 10;

        $query = $usersRepository->findAllByLastAuthenticationDate();

        $pagination = $paginator->paginate(
            $query,
            $page,
            $limit
        );

        return $this->render('users/index.html.twig', [
            'users' => $pagination
        ]);
    }
}