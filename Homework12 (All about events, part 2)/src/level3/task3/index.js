const sections = document.querySelectorAll('.section')
const menuList = document.querySelector('ul.menu-list')

let nextId = 1

sections.forEach((section) => {
    section.id = `section${nextId++}`

    const menuItem = document.createElement('li')
    menuItem.dataset.sectionId = section.id
    menuItem.classList.add('menu-item')
    menuItem.textContent = section.querySelector('.section-title').textContent

    menuItem.onclick = () => {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    menuList.appendChild(menuItem)
})

const menuItems = document.querySelectorAll('.menu-item')

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = Array.from(sections).indexOf(entry.target)

                menuItems.forEach((item) => item.classList.remove('active'))
                menuItems[index].classList.add('active')
            }
        })
    },
    {
        root: null,
        threshold: 0.6,
    },
)

sections.forEach((section) => observer.observe(section))
