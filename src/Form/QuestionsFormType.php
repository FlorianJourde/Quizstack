<?php

namespace App\Form;

use App\Entity\Categories;
use App\Entity\Choices;
use App\Entity\Questions;
use App\Entity\Users;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ButtonType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class QuestionsFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('content', TextareaType::class, [
                'label' => 'Content'
            ])
//            ->add('image')
            ->add('explanation', TextareaType::class, [
                'label' => 'Explanation'
            ])
            ->add('difficulty', ChoiceType::class, [
                'choices' => [
                    'Easy' => 1,
                    'Medium' => 2,
                    'Hard' => 3,
                ],
                'expanded' => true,
                'multiple' => false,
                'label' => 'Difficulty'
            ])
            ->add('categories', EntityType::class, [
                'class' => Categories::class,
                'choice_label' => 'name',
                'multiple' => true,
                'expanded' => true,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('c')
                        ->where('c.status = :status')
                        ->setParameter('status', true)
                        ->orderBy('c.name', 'ASC');
                },
                'label' => 'Categories'
//                'choice_attr' => function() {
//                    return ['class' => 'category-checkbox'];
//                },
//                'label_attr' => ['class' => 'category-label'],
//                'row_attr' => ['class' => 'categories-container'],
//                'choice_row_attr' => function() {
//                    return ['class' => 'category-option-wrapper'];
//                },
            ])
            ->add('choices', CollectionType::class, [
                'entry_type' => ChoicesFormType::class,
                'entry_options' => [
                    'label' => false,
                    'attr' => [
                        'class' => 'flex flex-col gap-4 items-start'
                    ]
                ],
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
                'prototype' => true,
                'attr' => [
                    'class' => 'choices-collection',
                    'data-max-choices' => 6
                ],
                'label' => 'Choices'
//                'label' => 'Answer choices'
//                'label' => false
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
                'label' => 'Delete',
                'attr' => [
                    'class' => 'button button-primary button-red',
                    'onclick' => 'return confirm("Are you sure you want to delete this question ?")'
                ]
            ]);
        }

        if ($options['is_editor']) {
//            $builder->add('status');

//            $builder->add('status', ChoiceType::class, [
//                'label' => 'Status',
//                'choices' => [
//                    'Published' => true,
//                    'Draft' => false
//                ]
//            ]);

            $builder->add('status', CheckboxType::class, [
                'label' => 'Status',
                'required' => false
            ]);

//            $builder->add('status', CheckboxType::class, [
//                'label' => 'Publication status',
//                'label_attr' => [
//                    'class' => 'form-label status-label'
//                ],
//                'attr' => [
//                    'class' => 'form-control status-field'
//                ],
//                'required' => false
//            ]);
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
