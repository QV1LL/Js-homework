const cards = document.querySelectorAll('.task-card')
const containers = document.querySelectorAll('.task-container')

let draggedCard

cards.forEach((card) => {
    card.draggable = true

    card.ondrag = (e) => e.preventDefault()

    card.ondragstart = () => {
        card.classList.add('dragging')
        draggedCard = card
    }

    card.ondragend = () => {
        card.classList.remove('dragging')
        draggedCard = null
    }
})

containers.forEach((container) => {
    container.ondragover = (e) => {
        e.preventDefault()
    }

    container.ondragenter = () => container.classList.add('dragover')
    container.ondragexit = () => container.classList.remove('dragover')

    container.ondrop = () => {
        container.classList.remove('dragover')

        if (draggedCard) container.appendChild(draggedCard)
    }
})
