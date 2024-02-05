const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Select the ul#ingredients list
const list = document.getElementById('ingredients');

// Create a document fragment to hold all the li elements
const fragment = document.createDocumentFragment();

// Iterate over each ingredient
ingredients.forEach(ingredient => {
  // Create an li element
  const li = document.createElement('li');
  // Set the text content to the ingredient
  li.textContent = ingredient;
  // Add the 'item' class to the li element
  li.classList.add('item');
  // Append the li element to the document fragment
  fragment.appendChild(li);
});

// Append the document fragment to the ul#ingredients list
// This inserts all the li elements in one operation
list.appendChild(fragment);