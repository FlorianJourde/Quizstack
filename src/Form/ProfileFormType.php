<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Email;

class ProfileFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $user = $options['data'];
        $hasUsername = $user && $user->getUsername() !== null;

        $usernameConstraints = [];

        if ($hasUsername) {
            $usernameConstraints[] = new NotBlank([
                'message' => 'Username cannot be empty once set',
            ]);
        }

        $usernameConstraints[] = new Length([
            'min' => 3,
            'max' => 180,
            'minMessage' => 'Username must be at least {{ limit }} characters long',
            'maxMessage' => 'Username cannot be longer than {{ limit }} characters',
        ]);

        $builder
            ->add('email', EmailType::class, [
                'constraints' => [
                    new NotBlank([
                        'message' => 'Please enter an email',
                    ]),
                    new Email([
                        'message' => 'Please enter a valid email',
                    ]),
                ],
                'attr' => [
                    'class' => 'form-control'
                ],
                'label' => 'Email'
            ])
            ->add('username', TextType::class, [
                'required' => $hasUsername,
                'constraints' => $usernameConstraints,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => $hasUsername ? 'Username is required' : 'Optional username'
                ],
                'label' => 'Username',
                'help' => $hasUsername ? 'You cannot remove your username once set' : null,
            ])
            ->add('image', FileType::class, [
                'label' => 'Image',
                'mapped' => false,
                'required' => false,
                'attr' => [
                    'accept' => 'image/jpeg, image/png'
                ],
                'constraints' => [
                    new File([
                        'maxSize' => '1024k',
                        'mimeTypes' => [
                            'image/jpeg',
                            'image/png',
                        ],
                        'mimeTypesMessage' => 'Please upload a valid image (JPEG or PNG only).',
                        'maxSizeMessage' => 'The file is too large ({{ size }} {{ suffix }}). Maximum size allowed is {{ limit }} {{ suffix }}.',
                    ])
                ],
            ]);

        if ($user && $user->getImage()) {
            $builder->add('deleteImage', CheckboxType::class, [
                'label' => 'Delete image',
                'required' => false,
                'mapped' => false,
            ]);
        }
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}