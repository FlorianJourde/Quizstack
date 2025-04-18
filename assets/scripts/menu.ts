document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('#button-menu') as HTMLButtonElement;
    const headerBottomContainer = document.querySelector('.header-bottom-container') as HTMLElement;

    let isMenuOpen: boolean = false;

    menuButton?.addEventListener('click', () => {
        if (!isMenuOpen) {
            // const height = headerBottomContainer.scrollHeight;
            // headerBottomContainer.style.height = `${height}px`;
            headerBottomContainer.classList.add('visible');
            // headerBottomContainer.style.overflow = 'visible';
        } else {
            // headerBottomContainer.style.height = '0';
            headerBottomContainer.classList.remove('visible');
            // headerBottomContainer.style.overflow = 'hidden';
        }
        isMenuOpen = !isMenuOpen;
    });
});