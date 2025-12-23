let currentSequence = []
const password = 'admin'

document.addEventListener('keydown', (e) => {
    currentSequence.push(e.key.replace('Key', '').toLowerCase())

    while (currentSequence.length > 5) currentSequence.shift()

    if (currentSequence.join('') === password) {
        alert('Дсотуп дозволено')
        currentSequence = []
    }
})
