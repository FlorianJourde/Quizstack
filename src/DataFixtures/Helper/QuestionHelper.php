<?php

use App\Entity\Answers;
use App\Entity\Questions;
function createQuestion($content, $image, $date, $difficulty, $explanation, $manager) {
    $question = new Questions();
    $question->setContent($content);
    $question->setImage($image);
    $question->setCreationDate($date);
    $question->setUpdateDate($date);
    $question->setDifficulty($difficulty);
    $question->setExplanation($explanation);

    $manager->persist($question);
//    $manager->flush();

    return $question;
}

function createAnswer($question, $content, $isCorrect, $manager) {
    $answer = new Answers();
    $answer->setQuestionId($question);
    $answer->setContent($content);
    $answer->setCorrect($isCorrect);

    $manager->persist($answer);
}