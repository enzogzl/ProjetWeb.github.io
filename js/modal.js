document.addEventListener('DOMContentLoaded', function () {
    const applyButtons = document.querySelectorAll('.apply-button');
    const modal = document.querySelector('.modal');
    const closeButton = document.querySelector('.close-button');

    applyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            modal.classList.remove('hidden');
        });
    });

    closeButton.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    });
});
