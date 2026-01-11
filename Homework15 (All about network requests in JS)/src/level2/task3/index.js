const buttons = document.querySelectorAll('.filter-btn')

const handleFilterButtonSelected = (button) => {
    buttons.forEach((button) => button.classList.remove('selected'))
    button.classList.add('selected')

    history.pushState({}, '', `?filter=${button.dataset.filter}`)
}

buttons.forEach((button) => {
    button.onclick = () => handleFilterButtonSelected(button)
})

const searchParams = new URLSearchParams(window.location.search)
const filter = searchParams.get('filter')

if (filter) handleFilterButtonSelected(Array.from(buttons).find((el) => el.dataset.filter === filter))
