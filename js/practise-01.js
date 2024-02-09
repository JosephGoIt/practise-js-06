const listWithId = document.querySelector('#menu');
listWithId.style.textTransform = 'uppercase';
listWithId.style.fontSize = '24px';
console.log(listWithId);

const listWithClass = document.querySelectorAll('.menu');
console.log(listWithClass);

const menuItemsByTagName = document.querySelectorAll('li');
console.log(menuItemsByTagName);

const menuItemsByClass = document.querySelectorAll('.menu-item');
console.log(menuItemsByClass);

const firstMenuItem = document.querySelector('.menu');
firstMenuItem.lastElementChild.style.color = 'tomato';
console.log(firstMenuItem);

// const link = document.querySelector('.link');
// console.log(link.classList);

// const hasActiveClass = link.classList.contains("is-active");
// console.log(`hasActiveClass - ${hasActiveClass}`);

// link.classList.add("special");
// console.log(link.classList);

// link.classList.remove("is-active");
// console.log(link.classList);

// link.classList.toggle("is-active");
// console.log(link.classList);

// link.classList.toggle("special");
// console.log(link.classList);

// link.classList.toggle("special");
// console.log(link.classList);

// link.classList.replace("special", "regular");
// console.log(link.classList);

const heading = document.createElement('h1');
heading.textContent = 'Creating H1 heading';
console.log(heading);

const htmlBody = document.querySelector('body');
htmlBody.append(heading);

const article = document.querySelector(".article");
console.log(article.innerHTML);

const title = document.querySelector(".article .title");
console.log(title.innerHTML);

const text = document.querySelector(".article .text");
console.log(text.innerHTML);

const link = document.querySelector(".article .link");
console.log(link.innerHTML);

const technologies = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'NODE'];
const list1 = document.querySelector('.list');
const markup = technologies
    .map((technology) => `<li class="list-item">${technology}</li>`)
    .join('');

console.log(markup);

list1.innerHTML = markup;


