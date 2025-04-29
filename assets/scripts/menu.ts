document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('#button-menu') as HTMLButtonElement;
    const headerBottomContainer = document.querySelector('.header-bottom-container') as HTMLElement;
    const overlay = document.querySelector('#overlay') as HTMLElement;

    let isMenuOpen: boolean = false;

    function openMenu() {
        headerBottomContainer.classList.add('visible');
        overlay.classList.add('visible');
        isMenuOpen = true;
    }

    function closeMenu() {
        headerBottomContainer.classList.remove('visible');
        overlay.classList.remove('visible');
        isMenuOpen = false;
    }

    menuButton?.addEventListener('click', (event) => {
        event.stopPropagation();

        if (!isMenuOpen) {
            openMenu();
        } else {
            closeMenu();
        }
    });

    headerBottomContainer?.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    document.addEventListener('click', () => {
        if (isMenuOpen) {
            closeMenu();
        }
    });
});