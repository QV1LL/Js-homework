function generateSpectrumColors(n) {
    const colors = []
    for (let i = 0; i < n; i++) {
        const hue = (i * 360) / n
        colors.push(`hsl(${hue}, 100%, 50%)`)
    }
    return colors
}

const n = 50
const spectrum = generateSpectrumColors(n)

const colorsContainer = document.querySelector('.colors-container')
spectrum.forEach((color) => {
    const colorButton = document.createElement('button')
    colorButton.style.backgroundColor = color
    colorButton.style.width = '50px'
    colorButton.style.height = '50px'
    colorsContainer.appendChild(colorButton)
})

colorsContainer.addEventListener('click', (e) => {
    const pressedButton = e.target
    document.body.style.backgroundColor = pressedButton.style.backgroundColor
})
