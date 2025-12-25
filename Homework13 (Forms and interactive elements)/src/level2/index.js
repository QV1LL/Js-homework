// Task1
const inputPassword = document.querySelector('input[name="password"]')
const inputRepeatPassword = document.querySelector('input[name="repeat-password"]')

inputPassword.oncopy = (e) => {
    e.preventDefault()
}

inputPassword.oncut = (e) => {
    e.preventDefault()
}

inputRepeatPassword.onpaste = (e) => {
    e.preventDefault()
    alert('Будь ласка, введіть пароль вручну!')
}

// Task2

const sendButton = document.querySelector('#send-button')
const agreementCheckbox = document.querySelector('#agreement-checkbox')

agreementCheckbox.onchange = function () {
    if (this.checked) sendButton.removeAttribute('disabled')
    else sendButton.setAttribute('disabled', true)
}

// Task3

const pizzas = [
    {
        name: 'margarita',
        price: 100,
    },
    {
        name: 'peperoni',
        price: 150,
    },
]

const pizzaSelect = document.getElementById('pizza-select')
const pizzaPrice = document.getElementById('pizza-price')

pizzas.forEach((pizza) => {
    const option = document.createElement('option')
    option.name = 'pizza-option'
    option.textContent = pizza.name
    option.value = pizza.price

    pizzaSelect.appendChild(option)
})

pizzaSelect.onchange = (e) => {
    pizzaPrice.textContent = `${e.target.value}$`
}
