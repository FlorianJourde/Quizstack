document.addEventListener('DOMContentLoaded', function () {
    const resetButton = document.getElementById('resetFilters');
    const form = document.getElementById('questionForm');

    resetButton?.addEventListener('click', function () {
        const radioButtons = form?.querySelectorAll<HTMLInputElement>('input[type="radio"]');
        radioButtons?.forEach(function (radio) {
            radio.checked = false;
        });

        const checkboxes = form?.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
        checkboxes?.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    });
});