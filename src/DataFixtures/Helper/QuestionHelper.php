<?php

use App\Entity\Answers;
use App\Entity\Questions;
function createQuestion($content, $image, $date, $difficulty, $explanation, array $categories, $manager) {
    $question = new Questions();
    $question->setContent($content);
    $question->setImage($image);
    $question->setCreationDate($date);
    $question->setUpdateDate($date);
    $question->setDifficulty($difficulty);
    $question->setExplanation($explanation);

    foreach ($categories as $category) {
        $question->addCategory($category);
    }

    $manager->persist($question);

    return $question;
}

function createAnswer($question, $content, $isCorrect, $manager) {
    $answer = new Answers();
    $answer->setQuestionId($question);
    $answer->setContent($content);
    $answer->setCorrect($isCorrect);

    $manager->persist($answer);
}