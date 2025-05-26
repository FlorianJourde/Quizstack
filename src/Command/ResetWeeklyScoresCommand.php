<?php

namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use App\Repository\ScoreRepository;

class ResetWeeklyScoresCommand extends Command
{
    protected static $defaultName = 'app:reset-weekly-scores';
    private ScoreRepository $scoreRepository;

    public function __construct(ScoreRepository $scoreRepository)
    {
        parent::__construct();
        $this->scoreRepository = $scoreRepository;
    }

    protected function configure()
    {
        $this->setDescription('Reset weekly users scores.');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $output->writeln('Resetting weekly users scores...');

        $this->scoreRepository->resetWeeklyScores();

        $output->writeln('Weekly scores flushed !');

        return Command::SUCCESS;
    }
}