<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\ChangePasswordFormType;
use App\Form\ProfileFormType;
use App\Service\FileUploaderService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class ProfileController extends AbstractController
{
    #[IsGranted('ROLE_USER')]
    #[Route('/profile', name: 'profile')]
    public function profile(
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
        UserPasswordHasherInterface $passwordHasher,
        FileUploaderService         $fileUploader
    ): Response
    {
        /* @var User $user */
        $user = $security->getUser();

        if (!$user) {
            throw $this->createAccessDeniedException('You need to be logged in to access this page.');
        }

        $form = $this->createForm(ProfileFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if ($form->has('deleteImage') && $form->get('deleteImage')->getData() === true) {
                if ($user->getImage()) {
                    $fileUploader->delete($user->getImage(), 'users');
                    $user->setImage(null);
                }
            } else {
                $image = $form->get('image')->getData();

                if ($image) {
                    $imageName = $fileUploader->upload($image, 'users', $user->getImage());
                    $user->setImage($imageName);
                }
            }

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