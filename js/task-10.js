function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Selecting elements from the DOM
const input = document.querySelector('#controls input[type="number"]');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxesContainer = document.getElementById('boxes');

// Function to create boxes
function createBoxes(amount) {
  const boxesFragment = document.createDocumentFragment();
  let initialSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${initialSize + i * 10}px`;
    box.style.height = `${initialSize + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesFragment.appendChild(box);
  }

  boxesContainer.appendChild(boxesFragment);
}

// Function to destroy all boxes
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

// Event listener for the create button
createButton.addEventListener('click', () => {
  const numberOfBoxes = parseInt(input.value, 10);
  createBoxes(numberOfBoxes);
});

// Event listener for the destroy button
destroyButton.addEventListener('click', destroyBoxes);