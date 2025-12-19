// Task1

const image = document.querySelector('img')
const span = document.querySelector('span')

span.textContent = image.getAttribute('alt')
span.style.fontStyle = 'italic'

// Task2

const text = document.querySelector('b')
text.textContent = text.textContent.replace('JS', 'Python')

// Task3

const promo = document.getElementById('promo')
promo.textContent += ` ${Math.round(Math.random() * (20 - 5) + 5)}%`
