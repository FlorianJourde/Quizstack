document.addEventListener('DOMContentLoaded', function () {
    async function copyContent(button: HTMLElement): Promise<void> {
        const contentElement = button.nextElementSibling as HTMLElement;

        if (contentElement) {
            const text = contentElement.innerHTML
                .replace(/<br\s*\/?>/gi, '\n')
                .replace(/<[^>]*>/g, '')
                .trim();

            try {
                await navigator.clipboard.writeText(text);

                const originalHTML = button.innerHTML;
                button.innerHTML = 'Copied !';
                button.classList.add('copied');

                setTimeout(() => {
                    button.innerHTML = originalHTML;
                    button.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        }
    }

    async function copyLink(button: HTMLButtonElement): Promise<void> {
        const url = button.dataset.url;

        if (url) {
            if (button.classList.contains('copied')) return;

            try {
                await navigator.clipboard.writeText(url);

                const tagsContainer = button.querySelector('.tags-container') as HTMLElement;

                if (tagsContainer) {
                    tagsContainer.classList.remove('hidden');

                    setTimeout(() => {
                        tagsContainer.classList.add('hidden');
                    }, 2000);
                }
            } catch (err) {
                console.error('Failed to copy link:', err);
            }
        }

    }


    document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;

        const copyButton = target.closest('.copy-button') as HTMLElement;
        if (copyButton) {
            copyContent(copyButton);
            return;
        }

        const copyLinkButton = target.closest('.copy-link') as HTMLButtonElement;
        if (copyLinkButton) {
            copyLink(copyLinkButton);
            return;
        }
    });
});