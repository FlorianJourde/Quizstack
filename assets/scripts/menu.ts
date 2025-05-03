document.addEventListener('DOMContentLoaded', function() {
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

    menuButton?.addEventListener('click', function(event) {
        event.stopPropagation();

        if (!isMenuOpen) {
            openMenu();
        } else {
            closeMenu();
        }
    });

    headerBottomContainer?.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    document.addEventListener('click', function() {
        if (isMenuOpen) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && isMenuOpen) {
            closeMenu();
        }
    });
});