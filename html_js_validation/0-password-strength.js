const form = document.querySelector('#passwordForm');
const passwordInput = document.querySelector('#password');
const errorMessage = document.querySelector('#error');

const validatePassword = () => {
  const password = passwordInput.value;
  let isLongEnough = false;
  let hasLowerCase = false;
  let hasUpperCase = false;
  let hasNumber = false;
  let hasSpecialChar = false;

  if (password.length >= 8) {
    isLongEnough = true;
  }

  for (const char of password) {
    if (char === char.toUpperCase()) {
      hasUpperCase = true;
    }
    if (char === char.toLowerCase()) {
      hasLowerCase = true;
    }
    if (!isNaN(char)) {
      hasNumber = true;
    }
  }
  if (/[^a-zA-Z0-9]/.test(password)) {
    hasSpecialChar = true;
  }

  if (
    isLongEnough &&
    hasLowerCase &&
    hasUpperCase &&
    hasNumber &&
    hasSpecialChar
  ) {
    return true;
  } else {
    errorMessage.textContent =
      'Password must be 8 characters long and must contain at least: one uppercase, one lowercase, one number and one special character';
    return false;
  }
};

form.onsubmit = validatePassword;
