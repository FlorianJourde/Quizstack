<?php

namespace App\Command;

use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use App\Repository\ScoreRepository;

#[AsCommand(
    name: 'app:reset-monthly-scores',
    description: 'Reset monthly users scores.'
)]
class ResetMonthlyScoresCommand extends Command
{
    public function __construct(
        private readonly ScoreRepository $scoreRepository
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $output->writeln('Resetting monthly users scores...');

        $this->scoreRepository->resetMonthlyScores();

        $output->writeln('Monthly scores flushed !');

        return Command::SUCCESS;
    }
}