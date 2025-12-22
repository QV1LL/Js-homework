document.querySelectorAll('li').forEach((listItem) => {
    let classToAdd = ''
    classToAdd += listItem.dataset.status === 'active' ? 'green' : ''

    if (classToAdd === '') {
        classToAdd += listItem.dataset.status === 'pending' ? 'yellow' : ''
    }

    if (classToAdd !== '') {
        listItem.classList.add(classToAdd)
        return
    }

    listItem.querySelector('strong').textContent = 'BANNED'
    listItem.querySelector('strong').style.textDecoration = 'line-through'
})
