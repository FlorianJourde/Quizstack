export function readingMode(): void {
    const articleContainer = document.querySelector('#article-container') as HTMLElement | null;
    if (!articleContainer) return;

    const glassBox = articleContainer.closest('.glass.box') as HTMLElement | null;
    if (!glassBox) return;

    function updateReadingClass(): void {
        const rect = glassBox!.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const startOffset = 0;
        const endOffset = viewportHeight * 0.25;
        const topPassed = rect.top <= -startOffset;
        const bottomPassed = rect.bottom <= viewportHeight - endOffset;

        document.body.classList.toggle('reading', topPassed && !bottomPassed);
    }

    window.addEventListener('scroll', updateReadingClass, { passive: true });
    window.addEventListener('resize', updateReadingClass, { passive: true });

    updateReadingClass();
}