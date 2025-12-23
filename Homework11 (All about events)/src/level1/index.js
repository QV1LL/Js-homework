document.body.style = 'display: flex; flex-direction: column;'
document.body.style.height = '100vh'

// Task1

document.getElementById('secret-image').addEventListener('contextmenu', (e) => {
    e.preventDefault()
    alert('Копіювання заборонено!')
})

// Task2

const link = document.querySelector('a')
link.addEventListener('click', (e) => {
    e.preventDefault()

    if (confirm('Ви точно хочете перейти?')) window.location.href = link.href
})

// Task3

const button = document.getElementById('running-button')
const modalContainer = document.querySelector('.modal-overlay')

button.addEventListener('mouseenter', (e) => {
    e.target.style.left = `${Math.floor(Math.random() * (document.body.offsetWidth - e.target.offsetWidth))}px`
    e.target.style.top = `${Math.floor(Math.random() * (document.body.offsetHeight - e.target.offsetHeight))}px`
})

button.addEventListener('click', (e) => {
    e.preventDefault()
    modalContainer.style.display = 'flex'
    modalContainer.querySelector('button').onclick = () => (modalContainer.style.display = 'none')
})
