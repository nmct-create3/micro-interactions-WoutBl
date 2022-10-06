function handlePasswordSwitcher() {
    let passwordInput = document.querySelector('.js-password-input'),
        passwordCheckbox = document.querySelector('.js-password-toggle-checkbox');

    if (!passwordInput || !passwordCheckbox) {
        throw new Error(
            'The password input or the password checkbox classes could not be found.',
        );
    }

    passwordCheckbox.addEventListener('click', function () {
        if (passwordInput.type == 'password') {
            passwordInput.type = 'input';
        } else {
            passwordInput.type = 'password';
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    handlePasswordSwitcher();
});