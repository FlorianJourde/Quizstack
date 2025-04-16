<?php

namespace App\Controller;

use App\Entity\Questions;
use App\Form\ChangePasswordFormType;
use App\Form\ProfileFormType;
use App\Form\QuestionsFormType;
use App\Repository\QuestionsRepository;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

final class ProfileController extends AbstractController
{
    #[IsGranted('ROLE_USER')]
    #[Route('/profile', name: 'profile')]
    public function profile(
        QuestionsRepository $questionsRepository,
        Security            $security
    ): Response
    {
        $user = $security->getUser();

        if (!$user) {
            throw $this->createAccessDeniedException('You need to be logged in to access this page.');
        }

        return $this->render('profile/index.html.twig', [
            'user' => $user
        ]);
    }

    #[IsGranted('ROLE_USER')]
    #[Route('/profile/edit', name: 'profile_edit')]
    public function edit(
        Security                    $security,
        Request                     $request,
        EntityManagerInterface      $entityManager,
        UserPasswordHasherInterface $passwordHasher
    ): Response
    {
        $user = $security->getUser();

        if (!$user) {
            throw $this->createAccessDeniedException('You need to be logged in to access this page.');
        }

        $form = $this->createForm(ProfileFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            $this->addFlash('success', 'Your profile has been updated successfully.');

            return $this->redirectToRoute('profile_edit');
        }

        $passwordForm = $this->createForm(ChangePasswordFormType::class);
        $passwordForm->handleRequest($request);

        if ($passwordForm->isSubmitted() && $passwordForm->isValid()) {
            $newEncodedPassword = $passwordHasher->hashPassword(
                $user,
                $passwordForm->get('plainPassword')->getData()
            );

            $user->setPassword($newEncodedPassword);
            $entityManager->flush();

            $this->addFlash('success', 'Your password has been changed successfully.');

            return $this->redirectToRoute('profile_edit');
        }

        return $this->render('profile/edit.html.twig', [
            'user' => $user,
            'form' => $form->createView(),
            'passwordForm' => $passwordForm
        ]);
    }
}