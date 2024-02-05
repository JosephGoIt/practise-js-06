// Select the input and span elements
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

// Add an input event listener to the input element
nameInput.addEventListener('input', () => {
  // Check if the input value is not empty, update the span's content
  // Otherwise, set it to 'Anonymous'
  nameOutput.textContent = nameInput.value.trim() !== '' ? nameInput.value : 'Anonymous';
});