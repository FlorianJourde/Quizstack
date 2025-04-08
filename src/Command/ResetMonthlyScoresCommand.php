<?php

namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use App\Repository\ScoresRepository;

//use App\Repository\ScoreRepository;
use Doctrine\ORM\EntityManagerInterface;

class ResetMonthlyScoresCommand extends Command
{
    protected static $defaultName = 'app:reset-monthly-scores';
    private ScoresRepository $scoresRepository;

    public function __construct(ScoresRepository $scoresRepository)
    {
        parent::__construct();
        $this->scoresRepository = $scoresRepository;
    }

    protected function configure()
    {
        $this->setDescription('Reset monthly users scores.');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $output->writeln('Resetting monthly users scores...');

        $this->scoresRepository->resetMonthlyScores();

        $output->writeln('Monthly scores flushed !');

        return Command::SUCCESS;
    }
}