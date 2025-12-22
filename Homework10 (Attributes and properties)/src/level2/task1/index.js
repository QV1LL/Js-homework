const messageContainer = document.getElementById('message-container')
const input = document.querySelector('input')
const sendButton = document.querySelector('button')

const MESSAGE_HTML_PATTERN = `<div
                                    class="px-3 py-2 rounded-4 bg-secondary-subtle text-dark"
                                    style="max-width: 75%"
                                >
                                    {text}
                                </div>
                                <small class="text-muted mt-1 ms-2">{time} AM</small>`

sendButton.addEventListener('click', handleSendMessage)

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSendMessage()
})

const messageHistory = [
    { text: 'Привіт! Як справи?', isOwn: false },
    { text: 'Привіт! Все супер, працюю над чатом.', isOwn: true },
    { text: 'О, круто! На чому пишеш?', isOwn: false },
    { text: 'На чистому JS + Bootstrap 5.', isOwn: true },
    { text: 'Bootstrap — це топ для швидких інтерфейсів.', isOwn: false },
    { text: 'Згоден. Глянь на ці градієнти на фоні.', isOwn: true },
    { text: 'Вау, виглядає дуже сучасно!', isOwn: false },
    { text: 'Дякую! А ти що скажеш про швидкість?', isOwn: true },
    { text: 'Працює миттєво. Регулярки юзаєш?', isOwn: false },
    { text: 'Так, для заміни тексту в шаблонах повідомлень.', isOwn: true },
    { text: 'А як щодо валідації вводу?', isOwn: false },
    { text: 'Зробив перевірку на порожні рядки з підсвіткою.', isOwn: true },
    { text: 'Це важливо, щоб юзери не спамили пустими баблами.', isOwn: false },
    { text: 'Саме так. Ще хочу додати LocalStorage.', isOwn: true },
    { text: 'О, тоді історія не зникне після F5.', isOwn: false },
    { text: 'Це наступний крок у плані.', isOwn: true },
    { text: 'Слухай, а адаптивність перевіряв?', isOwn: false },
    { text: 'Так, на мобілках теж виглядає пристойно.', isOwn: true },
    { text: 'Якої ширини контейнер у тебе?', isOwn: false },
    { text: 'Зробив col-md-8 col-lg-6, стандартно.', isOwn: true },
    { text: 'Норм, для десктопа якраз.', isOwn: false },
    { text: 'Ти вже 20-те повідомлення пишеш, перевіряю скрол.', isOwn: true },
    { text: 'Ха-ха, ну треба ж забити історію контентом.', isOwn: false },
    { text: 'Ще трохи залишилось до ліміту.', isOwn: true },
    { text: 'А як щодо темної теми? Буде?', isOwn: false },
    { text: 'Можливо пізніше, поки що світла з градієнтом.', isOwn: true },
    { text: 'Головне, щоб очі не різало вночі.', isOwn: false },
    { text: 'Додам перемикач з часом.', isOwn: true },
    { text: 'Окей, тоді чекаю на фінальний білд.', isOwn: false },
    { text: 'Ось останнє повідомлення. Тепер скрол точно має працювати!', isOwn: true },
    { text: '⚠️TEXT GENERATED VIA GEMINI⚠️', isOwn: false },
]

loadHistory()

function handleSendMessage() {
    const text = input.value
    if (text.trim() === '' || text === '<empty string>') {
        input.classList.add('is-invalid')
        setTimeout(() => input.classList.remove('is-invalid'), 1000)
        return
    }

    addMessage(text)
}

function getCurrentTimeString() {
    const now = new Date()

    return now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    })
}

function addMessage(text, isOwn = true) {
    const messageElement = document.createElement('div')

    const alignment = isOwn ? 'align-items-end' : 'align-items-start'
    const bgClass = isOwn ? 'bg-primary text-white' : 'bg-secondary-subtle text-dark'
    const marginClass = isOwn ? 'me-2' : 'ms-2'

    messageElement.className = `d-flex flex-column ${alignment} mb-4 fade`

    messageElement.classList.add('fade')
    messageElement.innerHTML = MESSAGE_HTML_PATTERN.replace('{text}', text).replace('{time}', getCurrentTimeString())

    messageContainer.appendChild(messageElement)
    setTimeout(() => messageElement.classList.add('show'), 10)
    messageContainer.parentElement.scrollTop = messageContainer.scrollHeight
}

function loadHistory() {
    const container = document.getElementById('message-container')
    container.innerHTML = ''

    messageHistory.forEach((msg) => {
        addMessage(msg.text, msg.isOwn)
    })
}
