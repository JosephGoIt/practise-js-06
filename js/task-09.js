function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Select the change color button and the color display span
const changeColorButton = document.querySelector('.change-color');
const colorDisplay = document.querySelector('.color');

// Add a click event listener to the button
changeColorButton.addEventListener('click', () => {
  // Generate a new random color
  const newColor = getRandomHexColor();
  
  // Set the background color of the body to the new color
  document.body.style.backgroundColor = newColor;
  
  // Update the text content of the color display span
  colorDisplay.textContent = newColor;
});