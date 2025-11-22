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

export function Menu() {
    this.menuOptions = []

    this.add = (title, action) => {
        this.menuOptions.push({ title, action })
    }

    this.show = async () => {
        while (true) {
            console.log('\n--- Menu ---')
            this.menuOptions.forEach((item, i) => console.log(`${i + 1}. ${item.title}`))

            const choice = +(await ask('Enter option: '))
            if (choice >= 1 && choice <= this.menuOptions.length) {
                await this.menuOptions[choice - 1].action()
            } else {
                console.log('Invalid choice. Try again.')
            }
        }
    }
}
