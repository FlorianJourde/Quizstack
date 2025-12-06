<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\CallbackTransformer;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\Regex;

class ProfileFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $user = $options['data'];

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
                'required' => false,
                'empty_data' => '',
                'constraints' => [
                    new Length([
                        'max' => 180,
                        'maxMessage' => 'Username cannot be longer than {{ limit }} characters'
                    ])
                ],
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Set a username to display your score'
                ],
                'label' => 'Username',
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
                            'image/webp',
                        ],
                        'mimeTypesMessage' => 'Please upload a valid image.',
                        'maxSizeMessage' => 'The file is too large ({{ size }} {{ suffix }}). Maximum size allowed is {{ limit }} {{ suffix }}.',
                    ])
                ],
            ])
            ->addEventListener(FormEvents::SUBMIT, function (FormEvent $event) {
                $user = $event->getData();
                if ($user->getUsername() === '') {
                    $user->setUsername(null);
                }
            });

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