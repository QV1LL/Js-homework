const copyButton = document.getElementById('copy-btn')
const textArea = document.getElementById('text-source')

const handleNetworkChange = () => {
    if (!navigator.onLine) {
        copyButton.disabled = true
        copyButton.textContent = 'Ви офлайн'
    } else {
        copyButton.disabled = false

        if (copyButton.textContent === 'Ви офлайн') {
            copyButton.textContent = 'Копіювати'
        }
    }
}

window.addEventListener('online', handleNetworkChange)
window.addEventListener('offline', handleNetworkChange)

handleNetworkChange()

copyButton.addEventListener('click', async () => {
    if (!textArea.value) return

    try {
        await navigator.clipboard.writeText(textArea.value)

        copyButton.textContent = 'Скопійовано!'
        copyButton.classList.remove('bg-indigo-600', 'hover:bg-indigo-700')
        copyButton.classList.add('bg-green-600', 'hover:bg-green-700')

        setTimeout(() => {
            if (navigator.onLine) {
                copyButton.textContent = 'Копіювати'
                copyButton.classList.remove('bg-green-600', 'hover:bg-green-700')
                copyButton.classList.add('bg-indigo-600', 'hover:bg-indigo-700')
            }
        }, 2000)
    } catch (error) {
        console.error('Помилка копіювання: ', error.message)
    }
})
