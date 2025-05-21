function appearOnScroll(): void {
    let counter: number = 0;

    addEventListener("scroll", function() {
        showItems(counter);
    });

    addEventListener("load", function() {
        showItems(counter);
    });
}

function showItems(counter: number): void {
    let hiddenItems: NodeListOf<Element> = document.querySelectorAll('.fade-in-up:not(.show)');

    hiddenItems.forEach(function(item: Element) {
        if (checkVisible(item)) {
            (item as HTMLElement).style.transitionDelay = (counter * 0.2) + 0.2 + "s";
            item.classList.add('show');
            counter++;

            setTimeout(function() {
                counter--;
            }, ((counter * 0.1) * 1000) + 400);
        }
    });
}

function checkVisible(item: Element): boolean {
    let rect: DOMRect = item.getBoundingClientRect();
    let viewHeight: number = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

appearOnScroll();