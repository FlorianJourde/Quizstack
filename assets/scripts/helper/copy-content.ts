document.addEventListener('DOMContentLoaded', function () {
    const copyContentButtons: NodeListOf<HTMLElement> = document.querySelectorAll('.copy-button');

    async function copyContent(this: HTMLElement): Promise<void> {
        const contentElement = this.nextElementSibling as HTMLElement;

        if (contentElement) {
            const text = contentElement.innerHTML
                .replace(/<br\s*\/?>/gi, '\n')
                .replace(/<[^>]*>/g, '')
                .trim();

            try {
                await navigator.clipboard.writeText(text);

                const originalHTML = this.innerHTML;
                this.innerHTML = 'Copied !';
                this.classList.add('copied');

                setTimeout(() => {
                    this.innerHTML = originalHTML;
                    this.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        }
    }

    copyContentButtons.forEach(button => {
        button.addEventListener('click', copyContent);
    });
});