<?php

namespace App\Controller;

use App\Entity\Users;
use App\Form\UsersFormType;
use App\Repository\UsersRepository;
use App\Service\FileUploaderService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_ADMIN')]
class UsersController extends AbstractController
{
    #[Route('/users', name: 'users')]
    public function users(
        Request         $request,
        UsersRepository $usersRepository
    ): Response
    {
        $offset = max(0, $request->query->getInt('offset', 0));
        $paginator = $usersRepository->getUserPaginator($offset);

        return $this->render('users/index.html.twig', [
            'users' => $paginator,
            'previous' => $offset - UsersRepository::USERS_PER_PAGE,
            'next' => min(count($paginator), $offset + UsersRepository::USERS_PER_PAGE),
        ]);
    }

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

    #[Route('/user/{id}/edit', name: 'user_edit', requirements: ['id' => '\d+'])]
    public function edit(
        int                    $id,
        UsersRepository        $usersRepository,
        Request                $request,
        EntityManagerInterface $entityManager,
        FileUploaderService    $fileUploader
    ): Response
    {
        /* @var Users $user */
        $user = $usersRepository->find($id);

        if (!$user) {
            throw $this->createNotFoundException('User not found.');
        }

        $form = $this->createForm(UsersFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if ($form->get('delete')->isClicked()) {
                if ($this->getUser() && $this->getUser()->getId() === $user->getId()) {
                    $this->addFlash('error', 'You cannot delete your own account.');
                    return $this->redirectToRoute('users');
                }

                if ($user->getImage()) {
                    $fileUploader->delete($user->getImage(), 'users');
                }

                $anonymousUser = $usersRepository->findOneBy(['username' => 'Anonymous']);
                if (!$anonymousUser) {
                    $anonymousUser = new Users();
                    $anonymousUser->setUsername('Anonymous');
                    $anonymousUser->setEmail('anonymous@email.com');
                    $anonymousUser->setPassword('!');
                    $anonymousUser->setRoles(['ROLE_USER']);
                    $entityManager->persist($anonymousUser);
                    $entityManager->flush();
                }

                foreach ($user->getComments() as $comment) {
                    $comment->setUser($anonymousUser);
                }

                foreach ($user->getQuestions() as $question) {
                    $question->setUser($anonymousUser);
                }

                $entityManager->remove($user);
                $entityManager->flush();

                $this->addFlash('success', 'User has been deleted successfully.');
                return $this->redirectToRoute('users');
            }

            $entityManager->flush();
            $this->addFlash('success', 'User information has been updated successfully.');

            return $this->redirectToRoute('users');
        }

        return $this->render('users/edit.html.twig', [
            'user' => $user,
            'form' => $form
        ]);
    }
}