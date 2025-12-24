export class Cube {
    constructor(size, surface, color = 'red') {
        this.size = size
        this.surface = surface
        this.x = 0
        this.y = 0
        this.z = this.size / 2
        this.isJumping = false
        this.element = this.#createNodes(color)
        this.surface.appendChild(this.element)
    }

    #createNodes(color) {
        const cube = document.createElement('div')
        cube.style.position = 'absolute'
        cube.style.width = `${this.size}px`
        cube.style.height = `${this.size}px`
        cube.style.transformStyle = 'preserve-3d'
        cube.style.transition = 'ease-out 0.3s'

        this.#updateTransform(cube)

        const transforms = [
            `rotateY(0deg) translateZ(${this.size / 2}px)`,
            `rotateY(180deg) translateZ(${this.size / 2}px)`,
            `rotateY(90deg) translateZ(${this.size / 2}px)`,
            `rotateY(-90deg) translateZ(${this.size / 2}px)`,
            `rotateX(90deg) translateZ(${this.size / 2}px)`,
            `rotateX(-90deg) translateZ(${this.size / 2}px)`,
        ]

        transforms.forEach((t, i) => {
            const side = document.createElement('div')
            side.style.position = 'absolute'
            side.style.width = `${this.size}px`
            side.style.height = `${this.size}px`
            side.style.border = '1px solid black'
            side.style.background = i === 4 ? '#ff4d4d' : color
            side.style.transform = t
            cube.appendChild(side)
        })

        return cube
    }

    #updateTransform(el) {
        el.style.transform = `translate3d(${this.x}px, ${this.y}px, ${this.z}px)`
    }

    move(x, y, fieldSize = 500) {
        let nextX = this.x + x
        let nextY = this.y - y

        this.x = Math.max(0, Math.min(nextX, fieldSize - this.size))
        this.y = Math.max(0, Math.min(nextY, fieldSize - this.size))
        this.#updateTransform(this.element)
    }

    jump(size) {
        if (this.isJumping) return
        this.isJumping = true

        this.z = size
        setTimeout(() => {
            this.z = this.size / 2
            this.isJumping = false
        }, 300)
    }
}
