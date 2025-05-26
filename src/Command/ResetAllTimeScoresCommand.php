<?php

namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use App\Repository\ScoreRepository;

class ResetAllTimeScoresCommand extends Command
{
    protected static $defaultName = 'app:reset-all-time-scores';
    private ScoreRepository $scoreRepository;

    public function __construct(ScoreRepository $scoreRepository)
    {
        parent::__construct();
        $this->scoreRepository = $scoreRepository;
    }

    protected function configure()
    {
        $this->setDescription('Reset all time users scores.');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $output->writeln('Resetting all time users scores...');

        $this->scoreRepository->resetAllTimeScores();

        $output->writeln('All time scores flushed !');

        return Command::SUCCESS;
    }
}