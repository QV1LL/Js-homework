// Task1

const emailInput = document.forms.email.elements.email
const hint = document.querySelector('.hint')

emailInput.onfocus = () => {
    emailInput.classList.remove('error-outline')

    hint.classList.remove('hidden')
    emailInput.classList.add('blue-outline')
}

emailInput.onblur = () => {
    hint.classList.add('hidden')
    emailInput.classList.remove('blue-outline')

    if (!emailInput.value) emailInput.classList.add('error-outline')
}

// Task2

const textInput = document.getElementById('text-input')
const mirror = document.getElementById('mirror')
textInput.oninput = (e) => (mirror.textContent = e.target.value)

// Task3

const radioInputs = Array.from(document.querySelectorAll('input[type="radio"]')).filter(
    (radio) => radio.name === 'color',
)

radioInputs.forEach((radio) => {
    radio.style.accentColor = radio.dataset.color

    radio.onchange = () => {
        if (radio.checked) document.body.style.backgroundColor = radio.dataset.color
    }
})
