const button = document.querySelector('button')

const scrollLimit = 100

window.onscroll = () => {
    if (window.scrollY > scrollLimit) {
        button.classList.remove('hidden')
    } else button.classList.add('hidden')
}

button.onclick = () =>
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
