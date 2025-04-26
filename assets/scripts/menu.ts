document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('#button-menu') as HTMLButtonElement;
    const headerBottomContainer = document.querySelector('.header-bottom-container') as HTMLElement;

    let isMenuOpen: boolean = false;

    function openMenu() {
        headerBottomContainer.classList.add('visible');
        isMenuOpen = true;
    }

    function closeMenu() {
        headerBottomContainer.classList.remove('visible');
        isMenuOpen = false;
    }

    menuButton?.addEventListener('click', (event) => {
        event.stopPropagation(); // Empêche la propagation du clic au document

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