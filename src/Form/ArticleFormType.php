<?php

namespace App\Form;

use App\Entity\Article;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;

class ArticleFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title', TextType::class, [
                'label' => 'Title',
            ])
            ->add('slug', TextType::class, [
                'label' => 'Slug',
            ])
            ->add('excerpt', TextareaType::class, [
                'label' => 'Excerpt',
            ])
            ->add('content', TextareaType::class, [
                'label' => 'Content',
                'attr' => [
                    'class' => 'code-editor',
                ]
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
                            'image/webp'
                        ],
                        'mimeTypesMessage' => 'Please upload a valid image.',
                    ])
                ],
            ])
            ->add('creationDate', DateTimeType::class, [
                'label' => 'Creation date',
                'widget' => 'single_text',
                'input' => 'datetime_immutable',
            ])
            ->add('updateDate', DateTimeType::class, [
                'label' => 'Update date',
                'widget' => 'single_text',
                'input' => 'datetime_immutable',
            ])
            ->add('status', CheckboxType::class, [
                'label' => 'online',
                'required' => false
            ]);

        $article = $builder->getData();

        if ($article && $article->getImage()) {
            $builder->add('deleteImage', CheckboxType::class, [
                'label' => 'Delete image',
                'required' => false,
                'mapped' => false,
            ]);
        }

        if ($article && $article->getId()) {
            $builder->add('delete', SubmitType::class, [
                'label' => 'Delete',
                'attr' => [
                    'class' => 'button button-primary button-red',
                    'onclick' => 'return confirm("Are you sure you want to delete this article ?")'
                ]
            ]);
        }
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Article::class,
        ]);
    }
}