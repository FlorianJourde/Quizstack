export function showMessage(message: string, isError: boolean = false): void {
    const errorDiv: HTMLElement | null = document.querySelector('#errorMessage');
    const successDiv: HTMLElement | null = document.querySelector('#successMessage');

    if (isError) {
        if (errorDiv) {
            errorDiv.textContent = message;
            errorDiv.style.display = 'block';
        }
        if (successDiv) {
            successDiv.style.display = 'none';
        }
    } else {
        if (successDiv) {
            successDiv.textContent = message;
            successDiv.style.display = 'block';
        }
        if (errorDiv) {
            errorDiv.style.display = 'none';
        }
    }
}