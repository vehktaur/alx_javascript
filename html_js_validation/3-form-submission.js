const form = document.querySelector('#submitForm');

const handleFormSubmit = (event) => {
  let inputs = document.querySelectorAll('input');
  const inputValues = [];

  inputs.forEach((input) => inputValues.push(input));
  inputs = Array.from(inputs);
  if (inputs.every((input) => input.value !== '')) {
    alert('Form submitted successfully!');
  } else {
    event.preventDefault();
    alert('Please fill in all required fields');
  }
};

form.addEventListener('submit', handleFormSubmit);
