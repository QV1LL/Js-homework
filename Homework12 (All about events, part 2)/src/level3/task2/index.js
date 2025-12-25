const menu = document.getElementById('context-menu')
const selectionBox = document.getElementById('selection-box')
const icons = document.querySelectorAll('.desktop-icon')

document.addEventListener('contextmenu', (e) => {
    e.preventDefault()

    menu.style.display = 'block'
    menu.style.left = `${e.clientX}px`
    menu.style.top = `${e.clientY}px`
})

document.addEventListener('click', () => {
    menu.style.display = 'none'
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') menu.style.display = 'none'
})

let startX, startY
let selectionActive = false

document.onmousedown = (e) => {
    if (e.buttons !== 1) return

    menu.style.display = 'none'

    selectionActive = true
    startX = e.clientX
    startY = e.clientY

    selectionBox.style.left = `${startX}px`
    selectionBox.style.top = `${startY}px`
    selectionBox.style.width = '0px'
    selectionBox.style.height = '0px'
    selectionBox.style.display = 'block'

    icons.forEach((icon) => icon.classList.remove('selected'))
}

const checkSelection = () => {
    const boxRect = selectionBox.getBoundingClientRect()

    icons.forEach((icon) => {
        const iconRect = icon.getBoundingClientRect()

        const isOverlapping = !(
            boxRect.right < iconRect.left ||
            boxRect.left > iconRect.right ||
            boxRect.bottom < iconRect.top ||
            boxRect.top > iconRect.bottom
        )

        if (isOverlapping) {
            icon.classList.add('selected')
        } else {
            icon.classList.remove('selected')
        }
    })
}

document.onmousemove = (e) => {
    if (!selectionActive) return

    const currentX = e.clientX
    const currentY = e.clientY

    const width = Math.abs(currentX - startX)
    const height = Math.abs(currentY - startY)

    selectionBox.style.left = `${Math.min(currentX, startX)}px`
    selectionBox.style.top = `${Math.min(currentY, startY)}px`
    selectionBox.style.width = `${width}px`
    selectionBox.style.height = `${height}px`

    checkSelection()
}

document.onmouseup = () => {
    selectionActive = false
    selectionBox.style.display = 'none'
}
