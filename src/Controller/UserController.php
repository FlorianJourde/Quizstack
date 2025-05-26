<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserFormType;
use App\Repository\UserRepository;
use App\Service\FileUploaderService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_ADMIN')]
class UserController extends AbstractController
{
    #[Route('/users', name: 'users')]
    public function users(
        Request         $request,
        UserRepository $userRepository
    ): Response
    {
        $offset = max(0, $request->query->getInt('offset', 0));
        $paginator = $userRepository->getUserPaginator($offset);

        return $this->render('users/index.html.twig', [
            'users' => $paginator,
            'previous' => $offset - UserRepository::USERS_PER_PAGE,
            'next' => min(count($paginator), $offset + UserRepository::USERS_PER_PAGE),
        ]);
    }

    #[Route('/user/{id}', name: 'user', requirements: ['id' => '\d+'])]
    public function user(int $id, UserRepository $userRepository): Response
    {
        $user = $userRepository->find($id);

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
        UserRepository         $userRepository,
        Request                $request,
        EntityManagerInterface $entityManager,
        FileUploaderService    $fileUploader
    ): Response
    {
        /* @var User $user */
        $user = $userRepository->find($id);

        if (!$user) {
            throw $this->createNotFoundException('User not found.');
        }

        $form = $this->createForm(UserFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if ($form->get('delete')->isClicked()) {
                if ($this->getUser() && $this->getUser()->getId() === $user->getId()) {
                    $this->addFlash('error', 'You cannot delete your own account.');
                    return $this->redirectToRoute('user');
                }

                if ($user->getImage()) {
                    $fileUploader->delete($user->getImage(), 'user');
                }

                $anonymousUser = $userRepository->findOneBy(['username' => 'Anonymous']);
                if (!$anonymousUser) {
                    $anonymousUser = new User();
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