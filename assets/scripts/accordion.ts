document.addEventListener('DOMContentLoaded', function () {
    const accordionButtons: NodeListOf<HTMLElement> = document.querySelectorAll('.accordion-button');

    console.log('init accordion');

    function toggleAccordion(this: HTMLElement): void {
        // Get the next sibling which is the content
        const content = this.nextElementSibling as HTMLElement;

        // Toggle the 'open' class on the content
        content.classList.toggle('open');

        // Set max-height for animation
        if (content.classList.contains('open')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = '0';
        }
    }

    // Add click event listener to each accordion button
    accordionButtons.forEach(button => {
        button.addEventListener('click', toggleAccordion);

        // Initialize the content elements
        const content = button.nextElementSibling as HTMLElement;
        content.style.maxHeight = '0';
        content.style.overflow = 'hidden';
        content.style.transition = 'max-height 0.3s ease-out';
    });
});