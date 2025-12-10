import { HtmlElement } from '../helpers/htmlElement.js'

export function templateComponent() {
    const LOREM_TEXT =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    const CARD_TITLE = 'What is Lorem Ipsum?'
    const CARD_IMAGE_SRC = 'lipsium.jpg'
    const CARD_IMAGE_ALT = 'Lorem Ipsum'
    const CARD_LINK_HREF = 'https://www.lipsium.com/'

    function createCard() {
        const card = new HtmlElement('div')
        card.setAttribute('class', 'block')

        const title = new HtmlElement('h3')
        title.text = CARD_TITLE
        card.push(title)

        const image = new HtmlElement('img', true)
        image.setAttribute('src', CARD_IMAGE_SRC)
        image.setAttribute('alt', CARD_IMAGE_ALT)
        card.push(image)

        const paragraph = new HtmlElement('p')
        paragraph.setAttribute('class', 'text')
        paragraph.text = LOREM_TEXT

        const link = new HtmlElement('a')
        link.setAttribute('href', CARD_LINK_HREF)
        link.setAttribute('target', '_blank')
        link.text = 'More...'

        paragraph.push(link)
        card.push(paragraph)

        return card
    }

    const rootElement = new HtmlElement('div')
    rootElement.setAttribute('id', 'wrapper')
    rootElement.setAttribute('class', 'wrap')

    rootElement.push(createCard())
    rootElement.push(createCard())

    return rootElement
}
