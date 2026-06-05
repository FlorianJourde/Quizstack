<?php

namespace App\Controller;

use App\Entity\Article;
use App\Form\ArticleFormType;
use App\Repository\ArticleRepository;
use App\Service\FileUploaderService;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

final class BlogController extends AbstractController
{
    #[Route('/blog', name: 'blog')]
    public function index(Request $request, ArticleRepository $articleRepository): Response
    {
        $offset = max(0, $request->query->getInt('offset', 0));
        $publishedOnly = !$this->isGranted('ROLE_EDITOR');

        $paginator = $articleRepository->getArticlesPaginator($offset, $publishedOnly);

        return $this->render('blog/index.html.twig', [
            'articles' => $paginator,
            'previous' => $offset - ArticleRepository::ARTICLES_PER_PAGE,
            'next' => min(count($paginator), $offset + ArticleRepository::ARTICLES_PER_PAGE),
        ]);
    }

    #[IsGranted('ROLE_EDITOR')]
    #[Route('/blog/{slug}/edit', name: 'article_edit')]
    public function edit(
        Request                $request,
        #[MapEntity(mapping: ['slug' => 'slug'])]
        Article                $article,
        EntityManagerInterface $entityManager,
        FileUploaderService    $fileUploader
    ): Response
    {
        $form = $this->createForm(ArticleFormType::class, $article);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            if ($form->get('delete')->isClicked()) {

                if ($article->getImage()) {
                    $fileUploader->delete($article->getImage(), 'articles');
                }

                $entityManager->remove($article);
                $entityManager->flush();

                $this->addFlash('success', 'Article has been deleted.');

                return $this->redirectToRoute('blog');
            }

            if (
                $form->has('deleteImage')
                && $form->get('deleteImage')->getData() === true
            ) {
                if ($article->getImage()) {
                    $fileUploader->delete($article->getImage(), 'articles');
                    $article->setImage(null);
                }
            } else {
                $image = $form->get('image')->getData();

                if ($image) {
                    $imageName = $fileUploader->upload(
                        $image,
                        'articles',
                        $article->getImage()
                    );

                    $article->setImage($imageName);
                }
            }

            $entityManager->flush();

            $this->addFlash('success', 'Article updated.');

            return $this->redirectToRoute('article', ['slug' => $article->getSlug()]);
        }

        $mediaDirectory = $fileUploader->getTargetDirectory('medias');
        $media = glob($mediaDirectory . '/*');
        $media = array_filter($media, 'is_file');
        usort($media, fn($a, $b) => filemtime($b) <=> filemtime($a));
        $media = array_map('basename', $media);

        return $this->render('blog/edit.html.twig', [
            'article' => $article,
            'form' => $form->createView(),
            'media' => $media,
        ]);
    }

    #[IsGranted('ROLE_EDITOR')]
    #[Route('/blog/new', name: 'article_new')]
    public function new(
        Request                $request,
        EntityManagerInterface $entityManager,
        FileUploaderService    $fileUploader
    ): Response
    {
        $article = new Article();

        $date = new DateTimeImmutable();
        $article->setCreationDate($date);
        $article->setUpdateDate($date);
        $article->setStatus(false);

        $form = $this->createForm(ArticleFormType::class, $article);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $image = $form->get('image')->getData();

            if ($image) {
                $imageName = $fileUploader->upload($image, 'articles');
                $article->setImage($imageName);
            }

            $entityManager->persist($article);
            $entityManager->flush();

            $this->addFlash('success', 'Article created.');

            return $this->redirectToRoute('article', ['slug' => $article->getSlug()]);
        }

        $mediaDirectory = $fileUploader->getTargetDirectory('medias');
        $media = glob($mediaDirectory . '/*');
        $media = array_filter($media, 'is_file');
        usort($media, fn($a, $b) => filemtime($b) <=> filemtime($a));
        $media = array_map('basename', $media);

        return $this->render('blog/new.html.twig', [
            'article' => $article,
            'form' => $form->createView(),
            'media' => $media,
        ]);
    }

    #[IsGranted('ROLE_EDITOR')]
    #[Route('/blog/media/upload', name: 'article_media_upload')]
    public function uploadMedia(
        Request             $request,
        FileUploaderService $fileUploader
    ): Response
    {
        $file = $request->files->get('media');

        if ($file) {
            $fileUploader->upload($file, 'medias');

            $this->addFlash('success', 'Media uploaded.');
        }

        return $this->redirect(
            $request->headers->get('referer')
        );
    }

    #[IsGranted('ROLE_EDITOR')]
    #[Route(
        '/blog/media/delete',
        name: 'article_media_delete',
        methods: ['POST']
    )]
    public function deleteMedia(
        Request             $request,
        FileUploaderService $fileUploader
    ): Response
    {
        $filename = $request->request->get('filename');

        if ($filename) {
            $fileUploader->delete(
                basename($filename),
                'medias'
            );
        }

        return $this->redirect(
            $request->headers->get('referer')
        );
    }

    #[Route('/blog/{slug}', name: 'article')]
    public function article(
        string            $slug,
        ArticleRepository $articleRepository
    ): Response
    {
        $article = $articleRepository->findOneBy([
            'slug' => $slug,
        ]);

        if (!$article) {
            throw $this->createNotFoundException();
        }

        if (
            !$article->getStatus()
            && !$this->isGranted('ROLE_EDITOR')
        ) {
            throw $this->createNotFoundException();
        }

        $articles = $articleRepository->findLatestExcept($article, 3);

        return $this->render('blog/article.html.twig', [
            'article' => $article,
            'articles' => $articles,
        ]);
    }
}