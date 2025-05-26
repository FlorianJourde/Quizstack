<?php

namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use App\Repository\ScoreRepository;

class ResetMonthlyScoresCommand extends Command
{
    protected static $defaultName = 'app:reset-monthly-scores';
    private ScoreRepository $scoreRepository;

    public function __construct(ScoreRepository $scoreRepository)
    {
        parent::__construct();
        $this->scoreRepository = $scoreRepository;
    }

    protected function configure()
    {
        $this->setDescription('Reset monthly users scores.');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $output->writeln('Resetting monthly users scores...');

        $this->scoreRepository->resetMonthlyScores();

        $output->writeln('Monthly scores flushed !');

        return Command::SUCCESS;
    }
}