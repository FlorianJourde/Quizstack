<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CategoriesFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('categories', CollectionType::class, [
                'entry_type' => CategoryItemType::class,
                'entry_options' => [
                    'label' => false
//                    'show_delete_button' => true
                ],
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
                'label' => false
            ])
//            ->add('new_category', CategoryItemType::class, [
//                'mapped' => false,
//                'show_delete_button' => false,
//            ])
            ->add('save', SubmitType::class, [
                'label' => 'Save all categories',
                'attr' => ['class' => 'btn btn-primary mt-3']
            ]);


//        $categories = $builder->getData();
//        dump($categories);
//        die;

//        foreach ($categories as $category) {
//        dump($category->getId());

//            if ($category && $category->getId()) {
//                $builder->add('delete', SubmitType::class, [
//                    'label' => 'Delete',
//                    'attr' => [
//                        'class' => 'btn btn-sm btn-outline-danger',
//                        'formnovalidate' => 'formnovalidate',
//                        'onclick' => 'return confirm("Are you sure you want to delete this category?")'
//                    ],
//                ]);
//            }
//        }

    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            // Configure your data_class if you have a wrapper entity,
            // otherwise leave this empty
        ]);
    }
}