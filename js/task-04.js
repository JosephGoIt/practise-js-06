// Initialize counter value
let counterValue = 0;

// Select the decrement button, value span, and increment button
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector('#value');

// Update the interface with the current value of the counter
const updateValue = () => {
  valueSpan.textContent = counterValue;
};

// Add click event listener to the decrement button
decrementBtn.addEventListener('click', () => {
  counterValue -= 1; // Decrement the counter
  updateValue(); // Update the interface
});

// Add click event listener to the increment button
incrementBtn.addEventListener('click', () => {
  counterValue += 1; // Increment the counter
  updateValue(); // Update the interface
});

// Initial update of the counter interface
updateValue();