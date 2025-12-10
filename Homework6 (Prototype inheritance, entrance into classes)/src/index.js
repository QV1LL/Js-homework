import express from 'express'
import { templateComponent } from './components/templateComponent.js'
import { CssStyle } from './helpers/cssStyle.js'
import { HtmlBlock } from './helpers/htmlBlock.js'

const app = express()
const PORT = 5555

const rootElement = templateComponent()
const cssStyles = new CssStyle()
cssStyles.setSelector('.wrap', [['display', 'flex']])
cssStyles.setSelector('.block', [
    ['width', '300px'],
    ['margin', '10px'],
])
cssStyles.setSelector('.img', [['width', '100%']])
cssStyles.setSelector('.text', [['text-align', 'justify']])

const block = new HtmlBlock(rootElement, cssStyles)

app.use('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Empty HTML Page</title>
        </head>
        <body>
        ${block.code}
        </body>
        </html>
        `)
})

app.listen(PORT, () => {
    console.log(`Started on port ${PORT}`)
})
