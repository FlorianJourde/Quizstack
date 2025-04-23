document.addEventListener('DOMContentLoaded', (): void => {
    const switchButtons: NodeListOf<HTMLElement> = document.querySelectorAll('button.switch-label');
    const scoreItems: NodeListOf<HTMLElement> = document.querySelectorAll('.score-item');

    function showScoresByPeriod(period: string): void {
        scoreItems.forEach(item => {
            item.classList.remove('active');
        });

        const visibleScores = document.querySelectorAll(`.score-item[data-period="${period}"]`);
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
                showScoresByPeriod('week');
            } else if (index === 1) {
                showScoresByPeriod('month');
            } else if (index === 2) {
                showScoresByPeriod('all-time');
            }
        });
    });

    const activeButton = document.querySelector('.switch-label.active');
    if (activeButton) {
        const activeIndex = Array.from(switchButtons).indexOf(activeButton as HTMLElement);
        const periods = ['week', 'month', 'all-time'];
        showScoresByPeriod(periods[activeIndex]);
    } else {
        showScoresByPeriod('week');
    }
});