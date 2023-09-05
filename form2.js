// const username = document.getElementById("username");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const checkpassword = document.getElementById("confirmpasword");
// const form = document.getElementById("form");
// const login = document.getElementById("login");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   checkInputs();
// });

// function setErrorFor(input, message) {
//   const inputbox = input.parentElement;
//   const small = inputbox.querySelector("small");

//   small.innerText = message;

//   inputbox.className = "error";
// }

// function setSuccessFor(input) {
//   const inputbox = input.parentElement;
//   inputbox.className = "success";
// }

// function checkInputs() {
//   const usernameValue = username.value.trim();
//   const emailValue = email.value.trim();
//   const passwordValue = password.value.trim();
//   const checkpasswordValue = checkpassword.value.trim();

//   if (usernameValue === "") {
//     setErrorFor(username, "Username cannot be blank");
//   } else {
//     setSuccessFor(username);
//   }

//   if (emailValue === "") {
//     setErrorFor(email, "Email cannot be blank");
//   } else if (!isValidEmail(emailValue)) {
//     setErrorFor(email, "Email is not valid");
//   } else {
//     setSuccessFor(email);
//   }

//   // Add similar validation for password and checkpassword fields here

//   if (passwordValue === "") {
//     setErrorFor(password, "Password cannot be blank");
//   } else {
//     setSuccessFor(password);
//   }

//   if (checkpasswordValue === "") {
//     setErrorFor(checkpassword, "Password confirmation cannot be blank");
//   } else if (passwordValue !== checkpasswordValue) {
//     setErrorFor(checkpassword, "Passwords do not match");
//   } else {
//     setSuccessFor(checkpassword);
//   }
// }

// function isValidEmail(email) {
//   const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   return regex.test(email);
// }

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const country = document.getElementById("country");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmpassword");
const successIcon = document.querySelector(".success-icon");
const errorIcon = document.querySelector(".error-icon");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkInputs();
});

function setErrorFor(input, message) {
  const inputbox = input.parentElement;
  const small = inputbox.querySelector("small");

  small.innerText = message;
  inputbox.className = "inputbox error";
  successIcon.style.display = "none";
  errorIcon.style.display = "block";
}

function setSuccessFor(input) {
  const inputbox = input.parentElement;
  const successIcon = inputbox.querySelector(
    'ion-icon[name="checkmark-circle-outline"]'
  );
  const errorIcon = inputbox.querySelector(
    'ion-icon[name="alert-circle-outline"]'
  );

  inputbox.className = "inputbox success";
  successIcon.style.display = "block";
  errorIcon.style.display = "none";
}

function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const countryValue = country.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be empty");
  } else {
    setSuccessFor(username);
  }
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be empty");
  } else if (!isValidEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }

  if (countryValue === "") {
    setErrorFor(country, "Country cannot be empty");
  } else {
    setSuccessFor(country);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be empty");
  } else {
    setSuccessFor(password);
  }

  if (confirmPasswordValue === "") {
    setErrorFor(confirmPassword, "Confirm Password cannot be empty");
  } else if (passwordValue !== confirmPasswordValue) {
    setErrorFor(confirmPassword, "Passwords do not match");
  } else {
    setSuccessFor(confirmPassword);
  }
}
