const ball = document.querySelector('.ball')

document.addEventListener('mousemove', (e) => {
    const leftOffset = `${e.clientX - ball.offsetWidth / 2}px`
    const topOffset = `${e.clientY - ball.offsetHeight / 2}px`

    ball.style.left = leftOffset
    ball.style.top = topOffset
})
