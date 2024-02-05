const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Select the ul.gallery element
const gallery = document.querySelector('.gallery');

// Generate the markup for each image and join them into a single string
const markup = images.map(image => `<li class="gallery-item"><img src="${image.url}" alt="${image.alt}" width="300"></li>`).join('');

// Insert the markup into the gallery in one operation
gallery.insertAdjacentHTML('beforeend', markup);

// Add some CSS for the gallery design
gallery.style.display = 'flex';
gallery.style.flexWrap = 'wrap';
gallery.style.justifyContent = 'space-around';
gallery.style.listStyle = 'none';
gallery.style.padding = '0';

// Add CSS for each gallery item
document.querySelectorAll('.gallery-item').forEach(item => {
  item.style.margin = '10px';
  item.style.border = '2px solid #ccc';
  item.style.borderRadius = '5px';
  item.style.overflow = 'hidden';
});