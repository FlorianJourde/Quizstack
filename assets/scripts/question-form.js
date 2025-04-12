document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.delete-choice').forEach((button) => {
        button.addEventListener('click', function () {
            this.closest('.choice-item').remove();
        });
    });

    document.querySelectorAll('.add_item_link').forEach(btn => {
        btn.addEventListener("click", addFormToCollection);
    });

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
        });

        item.appendChild(removeButton);
        collectionHolder.appendChild(item);

        collectionHolder.dataset.index++;
    }
});
