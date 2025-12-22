// Task1

const element = document.createElement('div')
element.style = 'width: 200px; overflow: hidden; white-space: nowrap'
element.textContent =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae quas repellendus ea molestiae dolores sequi ipsum, quos aliquam suscipit? Quaerat, totam. Molestiae quo nesciunt nobis laborum illum dicta commodi magni?'

document.body.appendChild(element)

if (element.scrollWidth > element.clientWidth) {
    element.style.border = 'solid 2px red'
    element.title = element.textContent
}

// Task2

const paragraph = document.createElement('p')
paragraph.innerHTML = 'Використання <b>JavaScript</b> дозволяє динамічно керувати <b>DOM-деревом</b> вашої сторінки.'

document.body.appendChild(paragraph)

paragraph.innerHTML = paragraph.innerHTML.replaceAll('<b>', '<strong>').replaceAll('</b>', '</strong>')

// Task3

const textElement = document.createElement('p')
textElement.textContent = 'https://google.com'

document.body.appendChild(textElement)

const link = document.createElement('a')
link.href = link.textContent = textElement.textContent
textElement.innerHTML = link.outerHTML
