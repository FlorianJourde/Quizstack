<?php

namespace App\Controller;

use App\Entity\Questions;
use App\Entity\Users;
use App\Form\QuestionsFormType;
use App\Repository\QuestionsRepository;
use App\Service\FileUploaderService;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class QuestionsController extends AbstractController
{
    private DateTimeImmutable $currentDate;

    public function __construct()
    {
        $this->currentDate = new DateTimeImmutable();
    }

    #[IsGranted('ROLE_USER')]
    #[Route('/questions', name: 'questions')]
    public function questions(
        Security            $security,
        Request             $request,
        QuestionsRepository $commentsRepository
    ): Response
    {
        /* @var Users $user */
        $user = $security->getUser();

        $offset = max(0, $request->query->getInt('offset', 0));

        if ($security->isGranted('ROLE_EDITOR')) {
            $paginator = $commentsRepository->getQuestionsPaginator($offset);
        } else {
            $paginator = $commentsRepository->getQuestionsByUserIdPaginator($user, $offset);
        }

        return $this->render('questions/index.html.twig', [
            'questions' => $paginator,
            'previous' => $offset - QuestionsRepository::QUESTIONS_PER_PAGE,
            'next' => min(count($paginator), $offset + QuestionsRepository::QUESTIONS_PER_PAGE),
        ]);
    }

    #[Route('/question/{id}', name: 'question', requirements: ['id' => '\d+'])]
    public function question(
        int                 $id,
        QuestionsRepository $questionsRepository,
        Security            $security
    ): Response
    {
        $isEditor = $security->isGranted('ROLE_EDITOR');
        /* @var Questions $question */
        $question = $questionsRepository->find($id);

        if (!$question) {
            throw $this->createNotFoundException('No question found !');
        }

        $previousQuestion = $questionsRepository->findPreviousQuestion($question);
        $nextQuestion = $questionsRepository->findNextQuestion($question);

        return $this->render('questions/question.html.twig', [
            'question' => $question,
            'mode' => 'display',
            'questionId' => $question->getId(),
            'isEditor' => $isEditor,
            'previousQuestion' => $previousQuestion,
            'nextQuestion' => $nextQuestion
        ]);
    }
    #[IsGranted('ROLE_ADMIN')]
    #[Route('/question/{id}/share', name: 'question_share', requirements: ['id' => '\d+'])]
    public function questionShare(
        int                 $id,
        QuestionsRepository $questionsRepository,
        Security            $security
    ): Response
    {
//        $isEditor = $security->isGranted('ROLE_EDITOR');
        /* @var Questions $question */
        $question = $questionsRepository->find($id);

        if (!$question) {
            throw $this->createNotFoundException('No question found !');
        }

//        $previousQuestion = $questionsRepository->findPreviousQuestion($question);
//        $nextQuestion = $questionsRepository->findNextQuestion($question);

        return $this->render('questions/share.html.twig', [
            'question' => $question,
            'mode' => 'share',
            'questionId' => $question->getId(),
//            'isEditor' => $isEditor,
//            'previousQuestion' => $previousQuestion,
//            'nextQuestion' => $nextQuestion
        ]);
    }

    #[IsGranted('ROLE_USER')]
    #[Route('/question/{id}/edit', name: 'question_edit', requirements: ['id' => '\d+'])]
    public function edit(
        Request                $request,
        Questions              $question,
        EntityManagerInterface $entityManager,
        Security               $security,
        FileUploaderService    $fileUploader
    ): Response
    {
        $user = $security->getUser();
        $isAuthor = $question->getUser() === $user;
        $isOnline = $question->getStatus();
        $isEditor = $security->isGranted('ROLE_EDITOR');

        if (!$isAuthor && !$isEditor) {
            throw $this->createAccessDeniedException('You cannot edit this question.');
        }

        if (!$isEditor && $isOnline) {
            throw $this->createAccessDeniedException('You cannot edit online questions.');
        }

        $isEditor = $security->isGranted('ROLE_EDITOR');

        $form = $this->createForm(QuestionsFormType::class, $question, [
            'is_editor' => $isEditor,
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if ($form->get('delete')->isClicked()) {
                if ($question->getImage()) {
                    $fileUploader->delete($question->getImage(), 'questions');
                }
                $entityManager->remove($question);
                $entityManager->flush();

                $this->addFlash('success', 'Question has been deleted.');
                return $this->redirectToRoute('questions');
            }

            if ($form->has('deleteImage') && $form->get('deleteImage')->getData() === true) {
                if ($question->getImage()) {
                    $fileUploader->delete($question->getImage(), 'questions');
                    $question->setImage(null);
                }
            } else {
                $image = $form->get('image')->getData();

                if ($image) {
                    $imageName = $fileUploader->upload($image, 'questions', $question->getImage());
                    $question->setImage($imageName);
                }
            }

            $question->setUpdateDate($this->currentDate);
            $entityManager->flush();

            $this->addFlash('success', 'Question updated.');
        }

        return $this->render('questions/edit.html.twig', [
            'question' => $question,
            'form' => $form->createView(),
            'mode' => 'display',
            'questionId' => $question->getId(),
            'showComments' => 'false'
        ]);
    }

    #[IsGranted('ROLE_USER')]
    #[Route('/question/new', name: 'question_new')]
    public function new(
        Request                $request,
        Security               $security,
        EntityManagerInterface $entityManager,
        FileUploaderService    $fileUploader
    ): Response
    {
        $question = new Questions();
        $question->setUser($security->getUser());
        $isEditor = $security->isGranted('ROLE_EDITOR');

        $form = $this->createForm(QuestionsFormType::class, $question, [
            'is_editor' => $isEditor,
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $image = $form->get('image')->getData();

            if ($image) {
                $imageName = $fileUploader->upload($image, 'questions');
                $question->setImage($imageName);
            }

            $question->setCreationDate($this->currentDate);
            $question->setUpdateDate($this->currentDate);
            if ($isEditor) {
                $question->setStatus(true);
            }
            $entityManager->persist($question);
            $entityManager->flush();

            return $this->redirectToRoute('questions');
        }

        return $this->render('questions/new.html.twig', [
            'question' => $question,
            'form' => $form->createView(),
        ]);
    }
}
