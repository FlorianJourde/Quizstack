<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CategoryFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('categories', CollectionType::class, [
                'entry_type' => CategoryItemType::class,
                'entry_options' => [
                    'label' => false
                ],
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
                'label' => false
            ])
            ->add('save', SubmitType::class, [
                'label' => 'Save',
                'attr' => ['class' => 'button button-primary']
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([]);
    }
}