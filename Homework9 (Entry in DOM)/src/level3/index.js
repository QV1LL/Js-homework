// Task1

const MAX_RATING = 5

document.querySelectorAll('.stars').forEach((el) => {
    const rating = el.dataset.rating
    el.textContent = `${'★'.repeat(rating)}${'☆'.repeat(MAX_RATING - rating)}`
})

// Task2

const container = document.getElementById('tags-container')
const badges = container.dataset.tags.split(',')
badges.forEach((badge) => {
    const elementToAdd = document.createElement('span')
    elementToAdd.className = 'badge'
    elementToAdd.textContent = badge

    container.appendChild(elementToAdd)
})

// Task3

document.querySelectorAll('.bar').forEach((bar) => {
    const percent = bar.dataset.percent
    bar.style.width = `${percent}%`

    if (percent > 80) bar.style.backgroundColor = 'green'
    else if (percent < 30) bar.style.backgroundColor = 'red'
})
