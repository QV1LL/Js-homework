const NBU_URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'

const fetchCurrency = async () => {
    try {
        const response = await fetch(NBU_URL)

        if (!response.ok) throw new Error('Something went wrong')

        const currency = await response.json()
        return currency
    } catch (error) {
        console.log(error.message)
    }
}

const currencyContainer = document.getElementById('currency-container')
const currencyTemplate = document.getElementById('currency-template')
const currentDate = document.getElementById('current-date')
currentDate.textContent = new Date().toLocaleDateString('uk-UA')

const renderCurrencies = (currencies) => {
    currencies.forEach((currency) => {
        const card = currencyTemplate.cloneNode(true)

        card.classList.remove('hidden')
        card.removeAttribute('id')

        const codeElement = card.querySelector('.currency-code')
        const nameElement = card.querySelector('.currency-name')
        const rateElelement = card.querySelector('.currency-rate')

        if (codeElement) codeElement.textContent = currency.r030
        if (nameElement) nameElement.textContent = currency.txt

        if (rateElelement) rateElelement.textContent = currency.rate.toFixed(4)

        currencyContainer.appendChild(card)
    })
}

const storedData = JSON.parse(localStorage.getItem('data'))
const storedDate = localStorage.getItem('date_fetched')
const DATA_VALID_TIME = 3_600_000

const isCachedDataValid = storedData && storedDate && new Date() - new Date(storedDate) < DATA_VALID_TIME

if (!isCachedDataValid) {
    const data = await fetchCurrency()

    if (data) {
        renderCurrencies(data)

        localStorage.setItem('data', JSON.stringify(data))
        localStorage.setItem('date_fetched', new Date())
    }
} else {
    renderCurrencies(storedData)
}
