<?php

namespace App\DataFixtures;

use App\Entity\Answers;
use App\Entity\Questions;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class QuestionsFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $date = new \DateTimeImmutable();

//        $question = new Questions();
//        $question->setId(1);
//        $question->setContent('What is the correct way to connect to a MySQL database using PDO in PHP ?');
//        $question->setImage('/decoration-php.png');
//        $question->setCreationDate($date);
//        $question->setUpdateDate($date);
//        $question->setDifficulty(2);
//        $answer1 = new Answers();
//        $answer1->setId(new \Doctrine\ORM\Id\AssignedGenerator());
//        $answer1->setQuestionId(1);
//        $answer1->setContent("`$pdo = new PDO('mysql:host=localhost;dbname=test', 'user', 'password');`");
//        $answer1->setCorrect(true);
//        $answer2 = new Answers();
//        $answer2->setId(new \Doctrine\ORM\Id\AssignedGenerator());
//        $answer2->setQuestionId(1);
//        $answer2->setContent("`$pdo = mysqli_connect('localhost', 'user', 'password', 'test');`");
//        $answer2->setCorrect(false);
//        $answer3 = new Answers();
//        $answer3->setId(new \Doctrine\ORM\Id\AssignedGenerator());
//        $answer3->setQuestionId(1);
//        $answer3->setContent("`$pdo = new MySQLi('localhost', 'user', 'password', 'test');`");
//        $answer3->setCorrect(false);
//        $question->persist($question);

        $manager->flush();
    }
}
