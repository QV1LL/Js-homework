const input = document.querySelector('input')

input.addEventListener('keydown', (e) => {
    if (!e.code.startsWith('Key')) {
        e.preventDefault()
        input.classList.add('error')
        setTimeout(() => input.classList.remove('error'), 200)
    }
})
