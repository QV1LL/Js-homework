export class Marker {
    PRINT_TO_ELEMENT = document.getElementById('print')
    DELAY = 50
    INK_CONSUME = 0.5

    constructor(color, inkPercentage) {
        this.color = color
        this.inkPercentage = inkPercentage
    }

    print(text) {
        this.PRINT_TO_ELEMENT.style.color = this.color
        const chars = [...text]
        let index = 0

        const writeNextChar = () => {
            if (index >= chars.length || this.inkPercentage < 0.5) return

            const nextChar = chars[index++]
            this.PRINT_TO_ELEMENT.textContent += nextChar
            this.inkPercentage -= nextChar === ' ' ? 0 : this.INK_CONSUME

            setTimeout(writeNextChar, this.DELAY)
        }

        writeNextChar()
    }
}
