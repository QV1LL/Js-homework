import { activeKeys, isRotateActive, keyJump, keyToMove, mouseMove } from './checkInputs.js'
import { Cube } from './cube.js'

const field = document.querySelector('.field')
const player = new Cube(50, field, 'radial-gradient(circle at 30% 30%, #ff4d4d, #800000)')

field.oncontextmenu = (e) => e.preventDefault()

let rotationZ = 180
let rotationX = 90

const rotateField = () => {
    if (isRotateActive) {
        const sensitivity = 0.2
        rotationZ -= mouseMove.x * sensitivity
        rotationX -= mouseMove.y * sensitivity
        field.style.transform = `rotateX(${rotationX}deg) rotateZ(${rotationZ}deg)`
    }
}

const animate = () => {
    const move = {
        x: 0,
        y: 0,
    }

    activeKeys.forEach((key) => {
        const currentMove = keyToMove.get(key)
        if (currentMove) {
            move.x += currentMove.x
            move.y += currentMove.y
        }
    })

    player.move(move.x, move.y)
    if (keyJump) player.jump(150)
    rotateField()

    requestAnimationFrame(animate)
}

requestAnimationFrame(animate)
