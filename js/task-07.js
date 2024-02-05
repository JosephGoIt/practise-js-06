// Select the range input and the text span elements
const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

// Add an input event listener to the range input
fontSizeControl.addEventListener('input', () => {
  // Update the font size of the text based on the range input's current value
  text.style.fontSize = `${fontSizeControl.value}px`;
});