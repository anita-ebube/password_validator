const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const checkpassword = document.getElementById('confirmpasword');
const form = document.getElementById('form');
const login = document.getElementById('login');

login.addEventListener('submit', function (e) {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const checkpasswordValue = checkpassword.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isValidEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    // Add similar validation for password and checkpassword fields here

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }

    if (checkpasswordValue === '') {
        setErrorFor(checkpassword, 'Password confirmation cannot be blank');
    } else if (passwordValue !== checkpasswordValue) {
        setErrorFor(checkpassword, 'Passwords do not match');
    } else {
        setSuccessFor(checkpassword);
    }
}

function setErrorFor(input, message) {
    const inputbox = input.parentElement;
    const small = inputbox.querySelector('small');

    small.innerText = message;

    inputbox.className = 'inputbox error';
}

function setSuccessFor(input) {
    const inputbox = input.parentElement;
    inputbox.className = 'inputbox success';
}

function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
