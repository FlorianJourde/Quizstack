document.addEventListener('DOMContentLoaded', function () {
    // console.log('hello');

    const resetButton = document.getElementById('resetFilters');
    const form = document.getElementById('questionForm');

    resetButton.addEventListener('click', function () {
        const radioButtons = form.querySelectorAll('input[type="radio"]');
        // console.log(radioButtons)
        radioButtons.forEach(function (radio) {
            radio.checked = false;
        });

        const checkboxes = form.querySelectorAll('input[type="checkbox"]');
        // console.log(checkboxes)
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    });
});