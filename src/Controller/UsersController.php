<?php

namespace App\Controller;

use App\Repository\UsersRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UsersController extends AbstractController
{
    #[Route('/user/{id}', name: 'user')]
    public function user(int $id, UsersRepository $usersRepository): Response
    {
//        $id = 232;
        $user = $usersRepository->find($id);

        if (!$user) {
            throw $this->createNotFoundException('Utilisateur non trouvé');
        }

        return $this->render('user.html.twig', [
            'user' => $user,
        ]);
    }

    #[Route('/users', name: 'users')]
    public function users(UsersRepository $usersRepository): Response
    {
        $users = $usersRepository->findAll();

//        dump($users);
//        die();

        return $this->render('users.html.twig', [
            'users' => $users
        ]);
    }
}