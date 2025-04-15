<?php

namespace App\Form;

use App\Entity\Choices;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ChoicesFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('content', TextareaType::class, [
                'label' => false,
                'attr' => [
                    'placeholder' => 'New choice',
                    'rows' => 2
                ],
                'row_attr' => [
                    'class' => 'w-full'
                ]
            ])
            ->add('correct', CheckboxType::class, [
                'label' => 'Correct',
                'required' => false,
                'row_attr' => [
                    'class' => 'absolute text-xs top-[10px] right-[10px] flex gap-2 rounded-sm px-2 py-1 bg-black/50'
                ]
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Choices::class,
        ]);
    }
}