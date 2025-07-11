document.addEventListener('DOMContentLoaded', function (): void {
    document.addEventListener('keydown', function (e: KeyboardEvent): void {
        const target = e.target as HTMLElement;

        if (target.tagName === 'TEXTAREA' &&
            target.classList.contains('code-editor') && e.key === 'Tab') {

            e.preventDefault();
            const textarea = target as HTMLTextAreaElement;
            const start: number = textarea.selectionStart;
            const end: number = textarea.selectionEnd;

            textarea.value = textarea.value.substring(0, start) + '\t' + textarea.value.substring(end);
            textarea.selectionStart = textarea.selectionEnd = start + 1;
        }
    });
});