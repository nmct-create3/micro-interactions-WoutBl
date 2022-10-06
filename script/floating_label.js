function handleFloatingLabel() {
    let input = document.querySelector('.js-floating-input'),
        label = document.querySelector('.js-floating-label');

    if (!input || !label) {
        throw new Error(
            'The floating label or the floating input classes could not be found.',
        );
    }

    input.addEventListener('blur', function () {
        if (input.value) {
            label.classList.add('is-floating');
        } else {
            label.classList.remove('is-floating');
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    handleFloatingLabel();
});