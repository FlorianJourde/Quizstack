<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Security\Core\Validator\Constraints\UserPassword;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class ChangePasswordFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('plainPassword', RepeatedType::class, [
                'type' => PasswordType::class,
                'options' => [
                    'attr' => [
                        'autocomplete' => 'new-password',
                    ],
                ],
                'first_options' => [
                    'constraints' => [
                        new NotBlank([
                            'message' => 'Please enter a password',
                        ]),
                        new Length([
                            'min' => 6,
                            'minMessage' => 'Your password should be at least {{ limit }} characters',
                            // max length allowed by Symfony for security reasons
                            'max' => 4096,
                        ]),
//                        new PasswordStrength([
//                            'minScore' => PasswordStrength::STRENGTH_MEDIUM,
//                            'message' => 'The password strength is too low. Please use a stronger password with a mix of letters, numbers and symbols.'
//                        ]),
//                        new NotCompromisedPassword([
//                            'message' => 'This password has been leaked in a data breach, it must not be used. Please use another password.',
//                            'skipOnError' => true,
//                        ]),
                    ],
                    'label' => 'New password',
                    'label_attr' => [
                        'class' => 'small-title'
                    ],
                ],
                'second_options' => [
                    'label' => 'Repeat Password',
                    'label_attr' => [
                        'class' => 'small-title'
                    ],
                ],
                'invalid_message' => 'The password fields must match.',
                // Instead of being set onto the object directly,
                // this is read and encoded in the controller
                'mapped' => false,
            ]);


        if ($options['require_current_password']) {
            $builder
                ->add('currentPassword', PasswordType::class, [
                    'label' => 'Current Password',
                    'mapped' => false,
                    'constraints' => [
                        new NotBlank([
                            'message' => 'Please enter your current password',
                        ]),
                        new UserPassword([
                            'message' => 'The password you entered is incorrect.',
                        ]),
                    ],
                    'attr' => [
                        'class' => 'form-control'
                    ]
                ]);
        };
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'require_current_password' => true,
        ]);
    }
}
