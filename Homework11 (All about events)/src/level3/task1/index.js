const MESSAGE_TEMPLATE = 'Total price: {}'

const button = document.getElementById('buy-button')
const counter = document.getElementById('price-counter')

const buyEvent = new CustomEvent('item-bought', {
    bubbles: true,
    detail: { price: 100 },
})

button.onclick = () => button.dispatchEvent(buyEvent)

document.addEventListener('item-bought', (e) => {
    counter.dataset.total = +counter.dataset.total + e.detail.price
    counter.textContent = MESSAGE_TEMPLATE.replace('{}', counter.dataset.total)
})
