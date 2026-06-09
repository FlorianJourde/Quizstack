const element = document.querySelector<HTMLElement>('.lens-flare-container');

if (element) {
    const startMargin = -450;
    const endMargin = -200;
    const entryOffset = startMargin;
    const speedFactor = 2;

    window.addEventListener('scroll', () => {
        const scrollDistance = window.innerHeight * speedFactor;
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const viewportBottom = window.scrollY + window.innerHeight;

        const scrolledSinceVisible = viewportBottom - elementTop + entryOffset;

        if (scrolledSinceVisible > 0) {
            const progress = Math.min(Math.max(scrolledSinceVisible / scrollDistance, 0), 1);
            const newMargin = startMargin + (endMargin - startMargin) * progress;
            element.style.marginTop = `${newMargin}px`;
        }
    });
}