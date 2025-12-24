const field = document.querySelector('.field')
const MOVE_SIZE = 10

export const keyToMove = new Map([
    ['KeyW', { x: 0, y: -MOVE_SIZE }],
    ['KeyA', { x: MOVE_SIZE, y: 0 }],
    ['KeyS', { x: 0, y: MOVE_SIZE }],
    ['KeyD', { x: -MOVE_SIZE, y: 0 }],

    ['ArrowUp', { x: 0, y: -MOVE_SIZE }],
    ['ArrowDown', { x: 0, y: MOVE_SIZE }],
    ['ArrowLeft', { x: MOVE_SIZE, y: 0 }],
    ['ArrowRight', { x: -MOVE_SIZE, y: 0 }],
])

export const activeKeys = new Set()
export let keyJump = false
export let isRotateActive = false
export const mouseMove = { x: 0, y: 0 }

document.onkeydown = (e) => {
    if (keyToMove.has(e.code)) {
        e.preventDefault()
        activeKeys.add(e.code)
    }

    if (e.code === 'Space') {
        keyJump = true
    }
}

document.onkeyup = (e) => {
    activeKeys.delete(e.code)

    if (e.code === 'Space') {
        keyJump = false
    }
}

window.onmousedown = (e) => (isRotateActive = e.button === 0 && field.contains(e.target))
window.onmouseup = (e) => (isRotateActive = false)

document.onmousemove = (e) => {
    mouseMove.x = e.movementX
    mouseMove.y = e.movementY
}
