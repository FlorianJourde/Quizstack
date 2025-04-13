<?php

namespace App\Form;

use App\Entity\Categories;
use App\Entity\Choices;
use App\Entity\Questions;
use App\Entity\Users;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ButtonType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class QuestionsFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('content')
            ->add('image')
            ->add('difficulty', ChoiceType::class, [
                'choices' => [
                    'Easy' => 1,
                    'Medium' => 2,
                    'Hard' => 3,
                ],
                'expanded' => true,
                'multiple' => false,
            ])
            ->add('explanation')
            ->add('categories', EntityType::class, [
                'class' => Categories::class,
                'choice_label' => 'name',
                'multiple' => true,
                'expanded' => true
            ])
            ->add('choices', CollectionType::class, [
                'entry_type' => ChoicesFormType::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
                'prototype' => true,
                'attr' => [
                    'class' => 'choices-collection',
                    'data-max-choices' => 6
                ],
//                'label' => 'Answer choices'
                'label' => false
//            ]);
            ]);
//            ->add('delete', SubmitType::class, [
//                'label' => 'Delete Question',
//                'attr' => [
//                    'class' => 'btn btn-danger',
//                    'onclick' => 'return confirm("Are you sure you want to delete this question?")'
//                ]
//            ]);
//            ->add('choices', CollectionType::class, [
//                'entry_type' => ChoicesFormType::class,
//                'entry_options' => ['label' => false],
//                'allow_add' => true,
//                'allow_delete' => true,
//                'by_reference' => false,
//                'prototype' => true,
//                'attr' => [
//                    'class' => 'choices-collection',
//                    'data-max-choices' => 6
//                ],
//                'label' => 'Answer choices'
//            ]);
//            ->add('add_choice', ButtonType::class, [
//                'label' => 'Add answer choice',
//                'attr' => [
//                    'class' => 'add-another-choice',
//                    'data-collection-holder-class' => 'choices-collection'
//                ]
//            ]);
//            ->add('choices', CollectionType::class, [
////                'entry_type' => ChoiceType::class,
//                'entry_type' => ChoicesFormType::class,
//                'entry_options' => ['label' => false],
//                'allow_add' => true,
//                'allow_delete' => true,
//                'by_reference' => false,
//                'prototype' => true,
//                'label' => 'Answer choices'
//            ]);

        $question = $builder->getData();
//        dump($question->getId());

        if ($question && $question->getId()) {
            $builder->add('delete', SubmitType::class, [
                'label' => 'Delete Question',
                'attr' => [
                    'class' => 'btn btn-danger',
                    'onclick' => 'return confirm("Are you sure you want to delete this question?")'
                ]
            ]);
        }

        if ($options['is_editor']) {
            $builder->add('status');
        }
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Questions::class,
            'is_editor' => false,
        ]);
    }
}
