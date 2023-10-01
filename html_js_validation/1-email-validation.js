const form = document.querySelector('#emailForm');
const emailInput = document.querySelector('#email');
const errorMessage = document.querySelector('#error');

const validateEmail = () => {
  const email = emailInput.value;
  let correctEmail = false;

  if (email.includes('@') && email.includes('.')) {
    correctEmail = true;
  }
  if (
    email.lastIndexOf('@') == email.length - 1 ||
    email.lastIndexOf('.') == email.length - 1
  ) {
    correctEmail = false;
  }

  if (/[^a-zA-z0-9@.]/.test(email)) {
    correctEmail = false;
  }

  if (correctEmail) {
    return true;
  } else {
    errorMessage.textContent = 'Email provided is not valid';
    return false;
  }
};

form.onsubmit = validateEmail;
