// Task1

const inputs = document.querySelectorAll('.code-form input')

inputs.forEach((input) => {
    input.oninput = (e) => {
        if (e.target.value && input.nextElementSibling) {
            input.nextElementSibling.focus()
        }
    }

    input.onkeydown = (e) => {
        if (e.key === 'Backspace') {
            if (!input.value && input.previousElementSibling) {
                input.previousElementSibling.focus()
            }
        } else if (e.key === 'ArrowLeft') {
            input.previousElementSibling?.focus()
        } else if (e.key === 'ArrowRight') {
            input.nextElementSibling?.focus()
        } else if (!e.code.startsWith('Digit') && !['Tab', 'Control'].includes(e.key)) {
            e.preventDefault()
        }
    }

    input.onpaste = (e) => {
        e.preventDefault()
        const data = e.clipboardData.getData('text').trim().split('')

        let currentInput = input
        data.forEach((char) => {
            if (currentInput && /[0-9]/.test(char)) {
                currentInput.value = char
                currentInput = currentInput.nextElementSibling
            }
        })
        currentInput?.focus()
    }
})

// Task2

const passwordInput = document.forms.register.elements.password
const submitButton = document.querySelector('button[type="submit"]')

const lengthDependency = document.getElementById('length')
const containsDigitDependency = document.getElementById('contains-digit')
const containsUppercaseLetterDependency = document.getElementById('contains-uppercase-letter')

const passwordDependencies = [
    {
        element: lengthDependency,
        check: (value) => value.length > 8,
    },
    {
        element: containsDigitDependency,
        check: (value) => /\d/.test(value),
    },
    {
        element: containsUppercaseLetterDependency,
        check: (value) => /[A-Z]|[А-Я]/.test(value),
    },
]

passwordInput.oninput = (e) => {
    const dependencies = []

    passwordDependencies.forEach((dependency) => {
        const isValid = dependency.check(e.target.value)
        dependencies.push(isValid)

        if (isValid) dependency.element.classList.add('valid')
        else dependency.element.classList.remove('valid')
    })

    console.log(dependencies.join(', '))

    submitButton.disabled = !dependencies.every((e) => e)
}

// Task3

const cityData = {
    ua: ['Київ', 'Львів', 'Одеса'],
    us: ['Нью-Йорк', 'Лос-Анджелес'],
}

const countrySelect = document.getElementById('country')
const citySelect = document.getElementById('city')

countrySelect.onchange = (e) => {
    const country = e.target.value
    const cities = cityData[country]

    citySelect.innerHTML = '<option value="" disabled selected>Оберіть місто</option>'

    cities.forEach((city) => {
        const option = document.createElement('option')
        option.value = city.toLowerCase()
        option.textContent = city
        citySelect.appendChild(option)
    })

    citySelect.disabled = false
}
