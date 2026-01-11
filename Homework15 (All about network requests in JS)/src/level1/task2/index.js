const pagePropertiesList = document.getElementById('page-properties-list')

const elementsToAdd = [window.location.href, window.location.hostname, window.location.pathname]

elementsToAdd.forEach((element) => {
    const listElement = document.createElement('li')
    listElement.textContent = element

    pagePropertiesList.appendChild(listElement)
})

history.pushState({}, '', '?id=123')

const element = document.createElement('li')
element.textContent = window.location.href
pagePropertiesList.appendChild(element)
