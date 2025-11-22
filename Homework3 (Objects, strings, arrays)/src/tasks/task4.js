import { Menu } from '../menu/menu.js'
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

function Audience(name, capacity, chair) {
    this.name = name
    this.capacity = capacity
    this.chair = chair
}

function printAudiences(audiences) {
    if (!Array.isArray(audiences) || audiences.length === 0) {
        console.log('There are no audiences.')
        return
    }
    const sorted = audiences.sort((a, b) => a.name.localeCompare(b.name))
    sorted.forEach((x, i) => console.log(`${i + 1}. ${x.name}; Capacity: ${x.capacity}; Chair: ${x.chair}`))
}

function printAudiencesByChair(audiences, chair) {
    const filtered = audiences.filter((a) => a.chair === chair)
    printAudiences(filtered)
}

function printAudiencesForGroup(audiences, group) {
    const filtered = audiences.filter((a) => a.capacity >= group.students && a.chair === group.chair)
    printAudiences(filtered)
}

function sortAudiencesByCapacity(audiences) {
    const sorted = [...audiences].sort((a, b) => a.capacity - b.capacity)
    printAudiences(sorted)
}

function sortAudiencesByName(audiences) {
    const sorted = [...audiences].sort((a, b) => a.name.localeCompare(b.name))
    printAudiences(sorted)
}

export async function testTask() {
    const audiences = [
        new Audience('K1', 15, 'Lessons for kids (IDK what the heck they doing there -_-)'),
        new Audience('K2', 20, 'П32'),
        new Audience('K3', 25, 'П31'),
        new Audience('K4', 20, 'Some sort of sysadmins'),
        new Audience('K5', 25, 'Designers'),
    ]

    const group = { name: 'Group', students: 20, chair: 'П33' }

    const menu = new Menu()
    menu.add('Print all audiences', () => printAudiences(audiences))
    menu.add('Print audiences by chair', async () => {
        const chair = await ask('Enter chair name: ')
        printAudiencesByChair(audiences, chair)
    })
    menu.add('Print audiences for group', () => printAudiencesForGroup(audiences, group))
    menu.add('Sort audiences by capacity', () => sortAudiencesByCapacity(audiences))
    menu.add('Sort audiences by name', () => sortAudiencesByName(audiences))
    menu.add('Exit', () => process.exit(0))

    await menu.show()
}
