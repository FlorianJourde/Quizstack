<?php

namespace App\Controller;

use App\Entity\Questions;
use App\Form\QuestionsFormType;
use App\Repository\QuestionsRepository;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
//use Knp\Component\Pager\Pagination\PaginationInterface;
use Knp\Component\Pager\Pagination\PaginationInterface;
//use Knp\Component\Pager\PaginatorInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

final class QuestionsController extends AbstractController
{
    private DateTimeImmutable $currentDate;

    public function __construct()
    {
        $this->currentDate = new DateTimeImmutable();
    }

    #[IsGranted('ROLE_USER')]
    #[Route('/questions', name: 'questions')]
    public function questions(
        QuestionsRepository $questionsRepository,
        Security            $security,
        Request             $request,
        PaginatorInterface  $paginator
    ): Response
    {
        $user = $security->getUser();
        $page = $request->query->getInt('page', 1);
        $limit = 50;

        if ($security->isGranted('ROLE_EDITOR')) {
            $query = $questionsRepository->findAllByUpdateDateQuery();
        } else {
            $query = $questionsRepository->findAllByUserIdAndUpdateDateQuery($user);
        }

        $pagination = $paginator->paginate($query, $page, $limit);

        return $this->render('questions/index.html.twig', [
            'questions' => $pagination
        ]);
    }

//    #[IsGranted('ROLE_EDITOR')]
    #[Route('/question/{id}', name: 'question', requirements: ['id' => '\d+'])]
    public function question(
        int                 $id,
        QuestionsRepository $questionsRepository
    ): Response
    {
        $question = $questionsRepository->find($id);

        if (!$question) {
            throw $this->createNotFoundException('No question found !');
        }

        return $this->render('questions/question.html.twig', [
            'question' => $question,
            'mode' => 'display',
            'questionId' => $question->getId(),
        ]);
    }

    #[Route('/question/{id}/edit', name: 'question_edit', requirements: ['id' => '\d+'])]
    public function edit(
        Request                $request,
        Questions              $question,
        EntityManagerInterface $entityManager,
        Security               $security
    ): Response
    {
        $currentUser = $security->getUser();
        $isAuthor = $question->getUser() === $currentUser;
        $isEditor = $security->isGranted('ROLE_EDITOR');

        if (!$isAuthor && !$isEditor) {
            throw $this->createAccessDeniedException('You cannot edit this question.');
        }

        $isEditor = $security->isGranted('ROLE_EDITOR');

        $form = $this->createForm(QuestionsFormType::class, $question, [
            'is_editor' => $isEditor,
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if ($form->get('delete')->isClicked()) {
                $entityManager->remove($question);
                $entityManager->flush();

                $this->addFlash('success', 'Question has been deleted');
                return $this->redirectToRoute('questions');
            }

            $question->setUpdateDate($this->currentDate);
            $entityManager->flush();

            $this->addFlash('success', 'Question updated.');
            return $this->redirectToRoute('questions');
        }

        return $this->render('questions/edit.html.twig', [
            'question' => $question,
            'form' => $form->createView(),
            'mode' => 'display',
            'questionId' => $question->getId(),
            'showComments' => 'false'
        ]);
    }

    #[Route('/question/new', name: 'question_new')]
    #[IsGranted('ROLE_USER')]
    public function new(
        Request                $request,
        Security               $security,
        EntityManagerInterface $entityManager
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
