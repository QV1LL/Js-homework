const CATFACT_URL = 'https://catfact.ninja/fact'

const factParagraph = document.getElementById('fact-paragraph')
const refreshButton = document.getElementById('refresh-btn')

const factLoader = document.getElementById('fact-loader')
const buttonSpinner = document.getElementById('btn-spinner')
const buttonText = document.getElementById('btn-text')

const toggleLoading = (isLoading) => {
    if (isLoading) {
        factParagraph.classList.add('hidden')
        factLoader.classList.remove('hidden')

        refreshButton.disabled = true
        buttonSpinner.classList.remove('hidden')
        buttonText.textContent = 'Fetching...'
    } else {
        factParagraph.classList.remove('hidden')
        factLoader.classList.add('hidden')

        refreshButton.disabled = false
        buttonSpinner.classList.add('hidden')
        buttonText.textContent = 'Get Another Fact'
    }
}

const getRandomFact = async () => {
    try {
        toggleLoading(true)

        const response = await fetch(CATFACT_URL)

        if (!response.ok) throw new Error('Помилка при запиті на факт!')

        const result = await response.json()

        if (result?.fact) return result.fact
    } catch (error) {
        return error.message
    } finally {
        toggleLoading(false)
    }
}

factParagraph.textContent = await getRandomFact()

refreshButton.onclick = async () => (factParagraph.textContent = await getRandomFact())
