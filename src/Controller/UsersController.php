<?php

namespace App\Controller;

use App\Repository\UsersRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class UsersController extends AbstractController
{
    #[Route('/user/{id}', name: 'user', requirements: ['id' => '\d+'])]
    public function user(int $id, UsersRepository $usersRepository): Response
    {
//        $id = 232;
        $user = $usersRepository->find($id);

        if (!$user) {
            throw $this->createNotFoundException('Utilisateur non trouvé');
        }

        return $this->render('users/user.html.twig', [
            'user' => $user,
        ]);
    }

    #[IsGranted('ROLE_ADMIN')]
    #[Route('/users', name: 'users')]
    public function users(UsersRepository $usersRepository): Response
    {
        $users = $usersRepository->findAll();

//        dump($users);
//        die();

        return $this->render('users/index.html.twig', [
            'users' => $users
        ]);
    }
}