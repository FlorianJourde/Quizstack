// document.addEventListener('DOMContentLoaded', function () {
//     const header = document.querySelector('header');
//
//     function handleScroll() {
//         if (window.scrollY > 0) {
//             header.classList.add('sticky');
//         } else {
//             header.classList.remove('sticky');
//         }
//     }
//
//     handleScroll();
//
//     window.addEventListener('scroll', handleScroll);
// });

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');

    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    function showHeader() {
        let lastScroll = 0;

        addEventListener("scroll", () => {
            let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            let header = document.querySelector('header');
            // let menuContainer = document.querySelector('.menu-container');
            // let stickySingleContainer = document.querySelector('.single-container .right-area');
            let vh = window.innerHeight;
            let scrolled = window.scrollTop;

            if (window.scrollY > window.innerHeight / 2) {
                if (currentScroll > 0 && lastScroll <= currentScroll) {
                    lastScroll = currentScroll;
                    // if (!menuContainer.classList.contains('show')) {
                    header.classList.add('hide');
                    // if (stickySingleContainer) {
                    //     stickySingleContainer.classList.add('header-hidden');
                    // }
                    // }
                } else {
                    lastScroll = currentScroll;
                    header.classList.remove('hide');
                    // if (stickySingleContainer) {
                    //     stickySingleContainer.classList.remove('header-hidden');
                    // }
                }
            }
        });
    }

    showHeader();
});
