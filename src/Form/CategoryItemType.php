<?php

namespace App\Form;

use App\Entity\Categories;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CategoryItemType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Name',
                'attr' => [
                    'class' => 'form-control'
                ]
            ])
            ->add('color', TextType::class, [
                'label' => 'Color',
//                'attr' => [
//                    'class' => 'form-control'
            ]);

//            ->add('delete', SubmitType::class, [
//                'label' => 'Delete',
//                'attr' => [
//                    'class' => 'btn btn-sm btn-outline-danger',
//                    'formnovalidate' => 'formnovalidate',
//                    'onclick' => 'return confirm("Are you sure you want to delete this category?")'
//                ],
//            ]);
//            ->add('status', CheckboxType::class, [
//                'label' => false,
//                'required' => false,
//                'attr' => [
//                    'class' => 'form-check-input'
//                ]
//            ]);


        $builder->addEventListener(FormEvents::POST_SET_DATA, function (FormEvent $event) {
            $category = $event->getData();
            $form = $event->getForm();

//            dump($category);

            if ($category && $category->getId()) {
                $form->add('delete', SubmitType::class, [
                    'label' => 'Delete',
                    'attr' => [
                        'class' => 'btn btn-sm btn-outline-danger',
                        'formnovalidate' => 'formnovalidate',
                        'onclick' => 'return confirm("Are you sure you want to delete this category?")'
                    ],
                ]);
            }
        });
//        die;

//        if ($category && $category->getId()) {
//            $builder->add('delete', SubmitType::class, [
//                'label' => 'Delete',
//                'attr' => [
//                    'class' => 'btn btn-sm btn-outline-danger',
//                    'formnovalidate' => 'formnovalidate',
//                    'onclick' => 'return confirm("Are you sure you want to delete this category?")'
//                ],
//            ]);
//        }

        // ->add('id', HiddenType::class)
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Categories::class,
        ]);
    }
}