document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.delete-choice').forEach((button) => {
        button.addEventListener('click', function () {
            this.closest('.choice-item').remove();
            updateAddButtonState();
        });
    });

    document.querySelectorAll('.add_item_link').forEach(btn => {
        btn.addEventListener("click", addFormToCollection);
    });

    function updateAddButtonState() {
        const choicesList = document.querySelector('.choices-list');
        if (!choicesList) return;

        const maxChoices = parseInt(choicesList.dataset.maxChoices);
        const currentCount = document.querySelectorAll('.choice-item').length;

        document.querySelectorAll('.add_item_link').forEach(btn => {
            btn.disabled = currentCount >= maxChoices;

            let messageElement = btn.parentNode.querySelector('.max-choices-message');

            if (currentCount >= maxChoices) {
                if (!messageElement) {
                    messageElement = document.createElement('div');
                    messageElement.className = 'max-choices-message text-muted small mt-1';
                    btn.parentNode.appendChild(messageElement);
                }
                messageElement.textContent = `Maximum number of choices (${maxChoices}) reached.`;
            } else if (messageElement) {
                messageElement.remove();
            }
        });
    }


    function addFormToCollection(e) {
        const collectionHolder = document.querySelector('.' + e.currentTarget.dataset.collectionHolderClass);

        if (!collectionHolder || !collectionHolder.dataset.prototype) {
            console.error('Collection holder or prototype not found', collectionHolder);
            return;
        }

        const item = document.createElement('li');
        item.classList.add('choice-item');

        item.innerHTML = collectionHolder.dataset.prototype.replace(
            /__name__/g,
            collectionHolder.dataset.index
        );

        const removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.classList.add('btn', 'btn-danger', 'btn-sm', 'delete-choice');
        removeButton.innerText = 'Delete';

        removeButton.addEventListener('click', function () {
            item.remove();
            updateAddButtonState();
        });

        item.appendChild(removeButton);
        collectionHolder.appendChild(item);

        collectionHolder.dataset.index++;

        updateAddButtonState();
    }

    updateAddButtonState();
});
