const track = document.querySelector('.track')
const slider = document.querySelector('.slider')
const volumeHeader = document.querySelector('h2')

let isDragging = false
let currentX = 0

slider.onmousedown = () => {
    isDragging = true
}

document.onmouseup = () => {
    isDragging = false
}

document.onmousemove = (e) => {
    if (!isDragging) return

    const trackWidth = track.clientWidth
    const sliderWidth = slider.offsetWidth
    const maxX = trackWidth - sliderWidth

    currentX += e.movementX
    currentX = Math.max(0, Math.min(currentX, maxX))

    slider.style.left = `${currentX}px`

    volumeHeader.textContent = `${Math.round((currentX / maxX) * 100)}%`
}
