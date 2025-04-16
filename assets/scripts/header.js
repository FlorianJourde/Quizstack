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
            let vh = window.innerHeight;
            let scrolled = window.scrollTop;

            if (window.scrollY > window.innerHeight / 2) {
                if (currentScroll > 0 && lastScroll <= currentScroll) {
                    lastScroll = currentScroll;
                    header.classList.add('hide');
                } else {
                    lastScroll = currentScroll;
                    header.classList.remove('hide');
                }
            }
        });
    }

    showHeader();
});
