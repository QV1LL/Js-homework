const tableContainer = document.querySelector('.table-container')

let mouseX = 0,
    mouseY = 0
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
})

tableContainer.addEventListener('mouseenter', (e) => {
    tableContainer.classList.remove('hide-hint')
})

tableContainer.addEventListener('mouseleave', (e) => {
    tableContainer.classList.add('hide-hint')
})

tableContainer.addEventListener('click', (e) => {
    const row = e.target.closest('tbody > tr')
    deleteElement(row)
})

document.addEventListener('keydown', (e) => {
    const isCmdOrCtrl = e.metaKey || e.ctrlKey

    if (isCmdOrCtrl && e.key.toLowerCase() === 'x') {
        const element = document.elementFromPoint(mouseX, mouseY)

        if (element) {
            const row = element.closest('tbody > tr')

            if (row) {
                e.preventDefault()
                deleteElement(row)
            }
        }
    }
})

function deleteElement(element) {
    if (element) {
        element.classList.add('fade-out')
        setTimeout(() => element.remove(), 400)
    }
}
