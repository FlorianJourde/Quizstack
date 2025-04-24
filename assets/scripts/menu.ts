document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('#button-menu') as HTMLButtonElement;
    const headerBottomContainer = document.querySelector('.header-bottom-container') as HTMLElement;

    let isMenuOpen: boolean = false;

    menuButton?.addEventListener('click', () => {
        if (!isMenuOpen) {
            headerBottomContainer.classList.add('visible');
        } else {
            headerBottomContainer.classList.remove('visible');
        }
        isMenuOpen = !isMenuOpen;
    });
});