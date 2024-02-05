// Select the input element
const validationInput = document.getElementById('validation-input');

// Get the required number of characters from the data-length attribute
const requiredLength = parseInt(validationInput.dataset.length, 10);

// Add a blur event listener to the input element
validationInput.addEventListener('blur', () => {
  // Check if the length of the input value matches the required length
  if (validationInput.value.length === requiredLength) {
    // If correct, add the 'valid' class and remove the 'invalid' class if it exists
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } 
  else {
    // If incorrect, add the 'invalid' class and remove the 'valid' class if it exists
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});
