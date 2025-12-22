const container = document.getElementById('product-container')
const template = document.getElementById('product-template')

const products = [
    {
        name: 'Бездротові Навушники AirTune',
        price: 2499,
        description: 'Глибокий бас та до 20 годин автономної роботи. Ідеально для спорту.',
    },
    {
        name: 'Смарт-годинник Chrono X',
        price: 4150,
        description: 'Відстежуйте свою активність, сон та серцевий ритм у реальному часі.',
    },
    {
        name: 'Механічна Клавіатура RGB',
        price: 1800,
        description: 'Змінні свічі, налаштовуване підсвічування та алюмінієвий корпус.',
    },
    {
        name: 'Powerbank UltraCharge 20k',
        price: 1200,
        description: 'Заряджайте до трьох пристроїв одночасно. Швидка зарядка 22.5W.',
    },
    {
        name: 'Ігрова Миша Phantom',
        price: 950,
        description: 'Високоточний оптичний сенсор та ергономічний дизайн для довгих сесій.',
    },
    {
        name: 'Веб-камера Streamer Pro',
        price: 2100,
        description: 'Full HD 1080p, 60 FPS та вбудований мікрофон з шумозаглушенням.',
    },
]

products.forEach((product) => {
    const card = template.cloneNode(true)
    card.classList.remove('d-none')
    card.querySelector('.card-title').textContent = product.name
    card.querySelector('.card-text').textContent = product.description
    card.querySelector('.product-price').textContent = product.price
    container.appendChild(card)
})
