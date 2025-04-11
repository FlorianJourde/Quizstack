<?php

namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use App\Repository\ScoresRepository;

class ResetWeeklyScoresCommand extends Command
{
    protected static $defaultName = 'app:reset-weekly-scores';
    private ScoresRepository $scoresRepository;

    public function __construct(ScoresRepository $scoresRepository)
    {
        parent::__construct();
        $this->scoresRepository = $scoresRepository;
    }

    protected function configure()
    {
        $this->setDescription('Reset weekly users scores.');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $output->writeln('Resetting weekly users scores...');

        $this->scoresRepository->resetWeeklyScores();

        $output->writeln('Weekly scores flushed !');

        return Command::SUCCESS;
    }
}