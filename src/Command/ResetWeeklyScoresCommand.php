<?php

namespace App\Command;

use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use App\Repository\ScoreRepository;

#[AsCommand(
    name: 'app:reset-weekly-scores',
    description: 'Reset weekly users scores.'
)]
class ResetWeeklyScoresCommand extends Command
{
    public function __construct(
        private readonly ScoreRepository $scoreRepository
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $output->writeln('Resetting weekly users scores...');

        $this->scoreRepository->resetWeeklyScores();

        $output->writeln('Weekly scores flushed !');

        return Command::SUCCESS;
    }
}