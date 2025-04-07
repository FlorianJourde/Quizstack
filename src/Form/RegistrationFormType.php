<?php

namespace App\Form;

use App\Entity\Scores;
use App\Entity\Users;
//use Doctrine\DBAL\Types\StringType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email', EmailType::class, [
                'label' => 'Email',
//                'attr' => ['class' => 'form-control']
            ])
            ->add('username')
            ->add('plainPassword', PasswordType::class, [
                'mapped' => false,
                'label' => 'Password',
//                'attr' => ['class' => 'form-control']
            ])
            ->add('agreeTerms', CheckboxType::class, [
                'mapped' => false,
            ])
        ;
    }

//    public function buildForm(FormBuilderInterface $builder, array $options): void
//    {
//        $builder
//            ->add('email')
//            ->add('username')
//            ->add('roles')
////            ->add('password')
//            ->add('plainPassword', PasswordType::class, [
//                'mapped' => false,
//            ])
//            ->add('inscription_date', null, [
//                'widget' => 'single_text',
//            ])
//            ->add('last_authentication_date', null, [
//                'widget' => 'single_text',
//            ])
//            ->add('agreeTerms', CheckboxType::class, [
//                'mapped' => false,
//                // autres options...
//            ])
//            ->add('scores', EntityType::class, [
//                'class' => Scores::class,
//                'choice_label' => 'id',
//            ])
//        ;
//    }

//    public function buildForm(FormBuilderInterface $builder, array $options): void
//    {
//        $builder
//            ->add('email', EmailType::class)
//            ->add('plainPassword', PasswordType::class, [
//                'mapped' => false,
//                'attr' => ['autocomplete' => 'new-password'],
//                'constraints' => [
//                    new NotBlank([
//                        'message' => 'Veuillez entrer un mot de passe',
//                    ]),
//                    new Length([
//                        'min' => 6,
//                        'minMessage' => 'Votre mot de passe doit contenir au moins {{ limit }} caractères',
//                        'max' => 4096,
//                    ]),
//                ],
//            ])
//            ->add('agreeTerms', CheckboxType::class, [
//                'mapped' => false,
//                'constraints' => [
//                    new IsTrue([
//                        'message' => 'Vous devez accepter nos conditions.',
//                    ]),
//                ],
//            ])
//        ;
//    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Users::class,
        ]);
    }
}
