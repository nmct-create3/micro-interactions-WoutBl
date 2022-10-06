
let email = {},
    password = {},
    signInButton;

const isValidEmailAddress = function (emailAddress) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isEmpty = function (fieldValue) {
    return !fieldValue || fieldValue.length < 1;
};

const doubleCheckEmailAddress = function () {
    if (isValidEmailAddress(email.input.value)) {
        email.input.removeEventListener('input', doubleCheckEmailAddress);
        removeErrors(email);
    } else {
        if (isEmpty(email.input.value)) {
            email.errorMessage.innerText = 'This field is required';
        } else {
            email.errorMessage.innerText = 'Invalid emailaddress';
        }
    }
};

const doubleCheckPassword = function () {
    if (!isEmpty(password.input.value)) {
        password.input.removeEventListener('input', doubleCheckPassword);
        removeErrors(password);
    } else {
        password.errorMessage.innerText = 'This field is required';
        addErrors(password);
    }
};

const addErrors = function (formField) {
    formField.field.classList.add('has-error');
    formField.errorMessage.classList.add('is-visible');
};

const removeErrors = function (formField) {
    formField.field.classList.remove('has-error');
    formField.errorMessage.classList.remove('is-visible');
};

const getDOMElements = function () {
    email.label = document.querySelector('.js-email-label');
    email.errorMessage = email.label.querySelector('.js-email-error-message');
    email.input = document.querySelector('.js-email-input');
    email.field = document.querySelector('.js-email-field');

    password.label = document.querySelector('.js-password-label');
    password.errorMessage = password.label.querySelector(
        '.js-password-error-message',
    );
    password.input = document.querySelector('.js-password-input');
    password.field = document.querySelector('.js-password-field');

    signInButton = document.querySelector('.js-sign-in-button');
};

const enableListeners = function () {
    email.input.addEventListener('blur', function () {
        if (!isValidEmailAddress(email.input.value)) {
            if (isEmpty(email.input.value)) {
                email.errorMessage.innerText = 'This field is required';
            } else {
                email.errorMessage.innerText = 'Invalid emailaddress';
            }

            addErrors(email);
            email.input.addEventListener('input', doubleCheckEmailAddress);
        }
    });

    password.input.addEventListener('blur', function () {
        if (isEmpty(password.input.value)) {
            password.errorMessage.innerText = 'This field is required';
            addErrors(password);

            password.input.addEventListener('input', doubleCheckPassword);
        } else {
            removeErrors(password);
        }
    });

    signInButton.addEventListener('click', function (e) {
        e.preventDefault();

        if (
            isValidEmailAddress(email.input.value) &&
            !isEmpty(password.input.value)
        ) {
            removeErrors(email);
            removeErrors(password);
            console.info('Form is good to go.');
        } else {
            if (!isValidEmailAddress(email.input.value)) {
                addErrors(email);
                email.input.addEventListener('input', doubleCheckEmailAddress);
            }
            if (isEmpty(password.input.value)) {
                console.log('Looks empty...');
                addErrors(password);
                password.input.addEventListener('input', doubleCheckPassword);
            }
        }
    });
};

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded 🥳!');
    getDOMElements();
    enableListeners();
});