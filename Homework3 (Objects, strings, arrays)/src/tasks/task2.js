import { Menu } from '../menu/menu.js'

function Item(name, quantity, pricePerItem) {
    this.name = name
    this.quantity = quantity
    this.pricePerItem = pricePerItem
}

function getSummary(check) {
    if (!Array.isArray(check) || check.length === 0) return 0

    return check.reduce((acc, v) => acc + v.pricePerItem * v.quantity, 0)
}

function printCheck(check) {
    if (!Array.isArray(check) || check.length === 0) console.log('Summary: 0$')

    console.log('--- Check ---')
    check.forEach((v) => console.log(`- ${v.quantity} ${v.name}, price per item: ${v.pricePerItem}$`))
    console.log(`Summary: ${getSummary(check).toFixed(2)}`)
}

function getMostExpensiveItem(check) {
    if (!Array.isArray(check) || check.length === 0) return null

    return check.reduce((maxItem, v) => {
        const total = v.pricePerItem * v.quantity
        if (!maxItem) return v
        return total > maxItem.pricePerItem * maxItem.quantity ? v : maxItem
    }, null)
}

function getAverageCost(check) {
    if (!Array.isArray(check) || check.length === 0) return 0

    const totalCost = check.reduce((acc, v) => acc + v.pricePerItem * v.quantity, 0)
    const totalQuantity = check.reduce((acc, v) => acc + v.quantity, 0)

    return totalCost / totalQuantity
}

export async function testTask() {
    const check = [
        new Item('Milk 1L', 2, 1.5),
        new Item('Bread', 1, 2.2),
        new Item('Eggs 12pcs', 1, 3.0),
        new Item('Cheese 200g', 1, 4.5),
        new Item('Apples 1kg', 2, 2.8),
        new Item('Chicken Breast 500g', 1, 6.0),
        new Item('Orange Juice 1L', 1, 3.2),
    ]

    const menu = new Menu()
    menu.add('Print check', () => printCheck(check))
    menu.add('Most expensive item', () => {
        const item = getMostExpensiveItem(check)
        if (item) console.log(`Most expensive: ${item.name}, total cost: ${item.pricePerItem * item.quantity}$`)
        else console.log('Check is empty.')
    })
    menu.add('Average item cost', () => console.log(`Average cost per item: ${getAverageCost(check).toFixed(2)}$`))
    menu.add('Exit', () => process.exit(0))

    await menu.show()
}
