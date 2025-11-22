import readline from 'readline'
import { Menu } from '../menu/menu.js'

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

function Item(name, quantity = 1, isBought = false) {
    this.name = name
    this.quantity = quantity
    this.isBought = isBought
}

function printItems(items) {
    if (!Array.isArray(items) || items.length === 0) {
        console.log('No items to display.')
        return
    }

    const formatedItems = items.sort((a, b) => a.isBought - b.isBought)

    formatedItems.forEach((x, i) =>
        console.log(`${i + 1}. ${x.name}; Quantity: ${x.quantity}; ${x.isBought ? 'Bought' : ''}`),
    )
}

async function addItem(items) {
    if (!Array.isArray(items)) throw new Error('Provided value is not an array of items')

    const itemName = await ask('Enter new item name: ')
    const existingItem = items.find((x) => x.name === itemName)

    if (existingItem) {
        existingItem.quantity++
    } else {
        items.push(new Item(itemName))
    }

    console.log(`Item "${itemName}" added successfully.`)
}

async function buyItem(items) {
    if (!Array.isArray(items) || items.length === 0) {
        console.log('No items to buy.')
        return
    }

    printItems(items)
    const index = +(await ask('Enter item number to buy: ')) - 1

    if (items[index]) {
        items[index].isBought = true
        console.log(`Item "${items[index].name}" marked as bought.`)
    } else {
        console.log('Invalid item number.')
    }
}

export async function testTask() {
    const items = []

    const menu = new Menu()
    menu.menuOptions = [
        { title: 'Print items', action: () => printItems(items) },
        { title: 'Add item', action: async () => await addItem(items) },
        { title: 'Buy item', action: async () => await buyItem(items) },
        { title: 'Exit', action: () => process.exit(0) },
    ]
    await menu.show()
}
