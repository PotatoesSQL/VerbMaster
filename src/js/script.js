document.addEventListener('DOMContentLoaded', function () {
    const buttonStart = document.querySelector('.button-start');

    buttonStart.addEventListener('click', function () {
        const selectedCheckboxes = document.querySelectorAll('.checkbox__input:checked');
        if (selectedCheckboxes.length > 0) {
            const content = document.querySelector('.content');
            content.style.display = 'none';

            const test = document.querySelector('.test');
            test.style.display = 'block'; 
        } else {
            alert('Veuillez sélectionner au moins un bloc.');
        }
    });
});
