document.addEventListener('DOMContentLoaded', (): void => {
    const switchButtons: NodeListOf<HTMLElement> = document.querySelectorAll('button.switch-label');
    const scoresContainer: NodeListOf<HTMLElement> = document.querySelectorAll('.score-container');

    function showScoresByPeriod(period: string): void {
        scoresContainer.forEach(item => {
            item.classList.remove('active');
        });

        const visibleScores = document.querySelectorAll(`.score-container[data-period="${period}"]`);
        visibleScores.forEach(score => {
            (score as HTMLElement).classList.add('active');
        });
    }

    switchButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            switchButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            button.classList.add('active');

            if (index === 0) {
                showScoresByPeriod('all-time');
            } else if (index === 1) {
                showScoresByPeriod('month');
            } else if (index === 2) {
                showScoresByPeriod('week');
            }
        });
    });

    const activeButton = document.querySelector('.switch-label.active');
    if (activeButton) {
        const activeIndex = Array.from(switchButtons).indexOf(activeButton as HTMLElement);
        const periods = ['all-time', 'month', 'week'];
        showScoresByPeriod(periods[activeIndex]);
    } else {
        showScoresByPeriod('all-time');
    }
});