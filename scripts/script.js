// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const passwordconfirmInput = document.querySelector("#password-confirm-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const clearBtn = document.querySelector("#clear-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};
// add callback functions for other input events.
// (lastname, email, password, confirm password)
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};
emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};
passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
};
passwordconfirmInput.onkeyup = () => {
  passwordconfirmInput.classList.remove("is-valid");
  passwordconfirmInput.classList.remove("is-invalid");
};



// add callback function for submit button.
submitBtn.onclick = () => {

  // validate first name
  isFirstNameOk = false;
  if (firstNameInput.value.trim() === "") {
    firstNameInput.classList.add("is-invalid");
    firstNameInput.classList.remove("is-valid");
  } else {
    firstNameInput.classList.add("is-valid");
    firstNameInput.classList.remove("is-invalid");
    isFirstNameOk = true;
  }

  // validate last name
  isLastNameOk = false;
    if (lastNameInput.value.trim() === "") {
    lastNameInput.classList.add("is-invalid");
    lastNameInput.classList.remove("is-valid");
  } else {
    lastNameInput.classList.add("is-valid");
    lastNameInput.classList.remove("is-invalid");
    isLastNameOk = true;
  }

  // validate email
  isEmailOk = false;
  if (emailInput.value.trim() === "" || !validateEmail(emailInput.value)) {
    emailInput.classList.add("is-invalid");
    emailInput.classList.remove("is-valid");
  } else {
    emailInput.classList.add("is-valid");
    emailInput.classList.remove("is-invalid");
    isEmailOk = true;
  }

  // validate password
  isPasswordOk = false;
  if (passwordInput.value.length <= 6) {
    passwordInput.classList.add("is-invalid");
    passwordInput.classList.remove("is-valid");
  } else {
    passwordInput.classList.add("is-valid");
    passwordInput.classList.remove("is-invalid");
    isPasswordOk = true;
  }

  // validate confirm password
  isConfirmPasswordOk = false;
  if (passwordconfirmInput.value === passwordInput.value && passwordconfirmInput.value !== "") {
    passwordconfirmInput.classList.add("is-valid");
    passwordconfirmInput.classList.remove("is-invalid");
    isConfirmPasswordOk = true;
  } else {
    passwordconfirmInput.classList.add("is-invalid");
    passwordconfirmInput.classList.remove("is-valid");
  }

if (isFirstNameOk && isLastNameOk && isEmailOk && isPasswordOk && isConfirmPasswordOk)
  alert("Registered successfully");
};

clearBtn.onclick = () => {
  firstNameInput.value = "";
  firstNameInput.classList.remove("is-valid", "is-invalid");

  lastNameInput.value = "";
  lastNameInput.classList.remove("is-valid", "is-invalid");

  emailInput.value = "";
  emailInput.classList.remove("is-valid", "is-invalid");

  passwordInput.value = "";
  passwordInput.classList.remove("is-valid", "is-invalid");

  passwordconfirmInput.value = "";
  passwordconfirmInput.classList.remove("is-valid", "is-invalid");

  isFirstNameOk = false;
  isLastNameOk = false;
  isEmailOk = false;
  isPasswordOk = false;
  isConfirmPasswordOk = false;
};
