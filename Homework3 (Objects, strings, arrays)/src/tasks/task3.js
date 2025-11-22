import express from 'express'
import fs from 'fs/promises'
import readline from 'readline'

const ask = (query) =>
    new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        })
        rl.question(query, (answer) => {
            rl.close()
            resolve(answer)
        })
    })

const PAGE_PATH = './tasks/index.html'
const styles = {}

function applyStyles(page) {
    if (!page || typeof page !== 'string') return page
    if (!styles || typeof styles !== 'object') return page

    const cssString = Object.entries(styles)
        .map(([selector, rules]) => {
            const ruleString = Object.entries(rules)
                .map(([prop, value]) => `${prop}: ${value};`)
                .join(' ')
            return `${selector} { ${ruleString} }`
        })
        .join('\n')

    return page.replace('</head>', `<style>${cssString}</style></head>`)
}

async function getPage() {
    try {
        const data = await fs.readFile(PAGE_PATH, 'utf-8')
        return applyStyles(data)
    } catch (err) {
        console.error('Error reading file:', err)
    }
}

async function startStyleDialog() {
    while (true) {
        const property = await ask('Enter the css selector (or "exit" to quit): ')
        if (property.toLowerCase() === 'exit') process.exit(0)
        const propValue = await ask(`Enter styles for "${property}": `)

        const rules = {}
        propValue.split(';').forEach((rule) => {
            if (!rule.trim()) return
            const [key, value] = rule.split(':').map((s) => s.trim())
            rules[key] = value
        })

        styles[property] = rules
        console.log(`Added style for "${property}"`)
    }
}

export const startApp = async () => {
    const app = express()
    const PORT = 63456

    app.get('/', async (req, res) => {
        res.send(await getPage())
    })

    app.listen(PORT, () => {
        console.log('Program started, use console to add new styles \\(>_<)/')
        startStyleDialog()
    })
}
