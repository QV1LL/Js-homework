const DELAY = 500
let previousClickDate

const button = document.querySelector('button')

button.onclick = (e) => {
    if (previousClickDate && Date.now() - previousClickDate < DELAY) {
        button.style.backgroundColor =
            '#' +
            Math.floor(Math.random() * 16777215)
                .toString(16)
                .padStart(6, '0')
    }

    previousClickDate = Date.now()
}
