// Select all category items
const categories = document.querySelectorAll('ul#categories .item');

// Display the number of categories
console.log(`Number of categories: ${categories.length}`);

// Iterate over each category item
categories.forEach(category => {
  // Get the category name from the h2 tag
  const categoryName = category.querySelector('h2').textContent;
  // Count the number of elements in the category
  const elementsCount = category.querySelectorAll('ul li').length;

  // Display the category name and the number of elements in it
  console.log(`\nCategory: ${categoryName}\nElements: ${elementsCount}`);
});