// Task1

document.querySelectorAll('table span.quantity').forEach((el) => {
    const count = +el.textContent

    if (count === 0) {
        el.textContent = 'Немає в наявності'
        el.className = 'out-of-stock'
    }
})

// Task2

document.querySelectorAll('a').forEach((el) => {
    const href = el.href

    if (href.startsWith('https')) el.textContent = `🔒${el.textContent}`
    if (href.startsWith('mailto')) el.textContent = `✉️${el.textContent}`
})

// Task3

const listStyle = document.createElement('style')
listStyle.innerHTML = '.gpu-list li:nth-child(even) { color: #6d6d6dff }'
document.head.appendChild(listStyle)
