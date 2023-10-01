const form = document.querySelector('#dynamicForm');
const selectElement = document.querySelector('#numFields');
const options = document.querySelectorAll('option');
const inputContainer = document.querySelector('#inputContainer');

const generateInputFields = (numberOfFields) => {
  for (let i = 1; i <= numberOfFields; i++) {
    const textInput = document.createElement('input');
    textInput.name = `field${i}`;
    inputContainer.appendChild(textInput);
    console.log('works');
  }
  console.log('works');
};

const validateForm = () => {
  let textInputs = document.querySelectorAll('input');
  textInputs = Array.from(textInputs);
  if (textInputs.every((input) => input.value !== '')) {
    return true;
  } else {
    alert('Please fill in all fields');
    return false;
  }
};

selectElement.addEventListener('change', () => {
  let numberOfFields;
  options.forEach((option) => {
    if (option.selected) {
      numberOfFields = Number(option.value);
    }
  });
  generateInputFields(numberOfFields);
});
form.onsubmit = validateForm;
