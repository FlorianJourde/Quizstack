export function sidebarVisibility(): void {
    const handleScroll = () => {
        if (window.innerWidth <= 1279) return;

        const sidebars = document.querySelectorAll('.xl\\:sticky.top-spacing-primary.-order-1');

        sidebars.forEach((sidebar) => {
            const wrapper = sidebar.closest('.flex.flex-col.relative');
            const aside = sidebar.querySelector('aside');

            if (!wrapper || !aside) return;

            const container = wrapper.querySelector('.glass.box.-mx-spacing-primary')
                || wrapper.querySelector('.flex.flex-col.gap-spacing-primary.mb-spacing-large-secondary');

            if (!container) return;

            const containerRect = container.getBoundingClientRect();
            const asideHeight = aside.offsetHeight;

            const asideTopPosition = parseInt(getComputedStyle(sidebar).top) || 0;
            const hideThreshold = asideTopPosition + asideHeight;

            const isVisible = containerRect.bottom > hideThreshold;
            const sidebarEl = sidebar as HTMLElement;

            sidebarEl.style.opacity = isVisible ? '1' : '0';
            sidebarEl.style.pointerEvents = isVisible ? 'auto' : 'none';
        });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
}