function pageTransition(): void {
    const links = document.querySelectorAll('a[href]:not([target="_blank"]):not([href^="#"]):not([href^="mailto:"]):not([href^="tel:"])');

    links.forEach((link) => {
        link.addEventListener('click', function(event: Event) {
            const anchor = event.currentTarget as HTMLAnchorElement;
            const href = anchor.getAttribute('href');

            if (!href || href === window.location.pathname) return;

            event.preventDefault();
            hidePageElements();

            setTimeout(() => {
                window.location.href = href;
            }, 600);
        });
    });
}

function hidePageElements(): void {
    const bodyChildren = document.body.children;
    const excludedClasses = ['noise-texture'];

    Array.from(bodyChildren).forEach((element) => {
        const shouldExclude = excludedClasses.some(className => element.classList.contains(className));

        if (!shouldExclude) {
            element.classList.add('hide');
        }
    });

    const motionBanner = document.querySelector('.motion-banner');
    if (motionBanner) {
        const classesToKeep = ['motion-banner', 'black'];
        const currentClasses = Array.from(motionBanner.classList);

        currentClasses.forEach((className) => {
            if (!classesToKeep.includes(className)) {
                motionBanner.classList.remove(className);
            }
        });

        if (!motionBanner.classList.contains('black')) {
            motionBanner.classList.add('black');
        }
    }
}

pageTransition();