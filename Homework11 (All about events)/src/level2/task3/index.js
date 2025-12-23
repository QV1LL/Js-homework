document.querySelectorAll('div').forEach((element) =>
    element.addEventListener('click', (e) => {
        console.log(`${e.currentTarget.id} clicked`)
        e.stopPropagation()
    }),
)
