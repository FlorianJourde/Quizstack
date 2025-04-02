<?php

use App\Entity\Answers;
use App\Entity\Questions;
function createQuestion($content, $image, $date, $status, $difficulty, $manager) {
    $question = new Questions();
    $question->setContent($content);
    $question->setImage($image);
    $question->setCreationDate($date);
    $question->setUpdateDate($date);
    $question->setStatus($status);
    $question->setDifficulty($difficulty);

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