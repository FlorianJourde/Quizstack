<?php

namespace App\Command;

use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use App\Repository\ScoreRepository;

#[AsCommand(
    name: 'app:reset-all-time-scores',
    description: 'Reset all time users scores.'
)]
class ResetAllTimeScoresCommand extends Command
{
    public function __construct(
        private readonly ScoreRepository $scoreRepository
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $output->writeln('Resetting all time users scores...');

        $this->scoreRepository->resetAllTimeScores();

        $output->writeln('All time scores flushed !');

        return Command::SUCCESS;
    }
}