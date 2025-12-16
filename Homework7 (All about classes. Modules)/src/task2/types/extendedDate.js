const monthes = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

export class ExtendedDate extends Date {
    constructor(...args) {
        super(...args)
    }

    getStringDate() {
        return `${this.getDate()} of ${monthes[this.getMonth()]}`
    }

    isInFuture() {
        return this > new Date()
    }

    isLeapYear() {
        const year = this.getFullYear()

        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    }

    getNextDate() {
        const date = new Date(this)
        date.setDate(date.getDate() + 1)
        return new ExtendedDate(date)
    }
}
