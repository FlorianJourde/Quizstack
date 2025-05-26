<?php

namespace App\Form;

use App\Entity\Category;
use App\Entity\Question;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;

class QuestionFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('content', TextareaType::class, [
                'label' => 'Content'
            ])
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
            ->add('image', FileType::class, [
                'label' => 'Image',
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new File([
                        'maxSize' => '1024k',
                        'mimeTypes' => [
                            'image/jpeg',
                            'image/png',
                        ],
                        'mimeTypesMessage' => 'Please upload an image.',
                    ])
                ],
            ])
            ->add('categories', EntityType::class, [
                'class' => Category::class,
                'choice_label' => 'name',
                'multiple' => true,
                'expanded' => true,
                'label' => 'Category'
            ])
            ->add('choices', CollectionType::class, [
                'entry_type' => ChoiceFormType::class,
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
            ]);

        $question = $builder->getData();

        if ($question && $question->getImage()) {
            $builder->add('deleteImage', CheckboxType::class, [
                'label' => 'Delete image',
                'required' => false,
                'mapped' => false,
            ]);
        }


        if ($options['is_editor']) {
            $builder->add('status', CheckboxType::class, [
                'label' => 'online',
                'required' => false
            ]);
        }

        if ($question && $question->getId()) {
            $builder->add('delete', SubmitType::class, [
                'label' => 'Delete',
                'attr' => [
                    'class' => 'button button-primary button-red',
                    'onclick' => 'return confirm("Are you sure you want to delete this question ?")'
                ]
            ]);
        }
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Question::class,
            'is_editor' => false,
        ]);
    }
}
