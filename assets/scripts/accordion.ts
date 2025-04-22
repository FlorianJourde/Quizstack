document.addEventListener('DOMContentLoaded', function () {
    const accordionButtons: NodeListOf<HTMLElement> = document.querySelectorAll('.accordion-button');

    function toggleAccordion(this: HTMLElement): void {
        const content = this.nextElementSibling as HTMLElement;

        this.classList.toggle('open');

        if (this.classList.contains('open')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = '0';
        }
    }

    accordionButtons.forEach(button => {
        button.addEventListener('click', toggleAccordion);
    });
});