export function readingMode(): void {
    const articleContainer = document.querySelector('#article-container') as HTMLElement | null;

    if (!articleContainer) return;

    const glassBox = articleContainer.closest('.glass.box') as HTMLElement | null;

    if (!glassBox) return;

    function updateReadingClass(): void {
        const rect = articleContainer!.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const startOffset = viewportHeight * 0.25;
        const endOffset = viewportHeight * 0.5;
        const topPassed = rect.top <= -startOffset;
        const bottomPassed = rect.bottom <= viewportHeight - endOffset;

        if (topPassed && !bottomPassed) {
            glassBox!.classList.add('reading');
        } else {
            glassBox!.classList.remove('reading');
        }
    }

    window.addEventListener('scroll', updateReadingClass, { passive: true });
    window.addEventListener('resize', updateReadingClass, { passive: true });

    updateReadingClass();
}