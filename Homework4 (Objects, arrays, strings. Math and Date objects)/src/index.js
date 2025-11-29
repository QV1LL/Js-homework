// Task 1

function isLetter(char) {
    return (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')
}

function isNumber(char) {
    return char >= '0' && char <= '9'
}

const printStringStatistic = (str) => {
    let countOfNumbers = 0
    let countOfLetters = 0
    let countOfOtherSymbols = 0

    str.split('').forEach((c) => {
        const isCharNumber = isNumber(c)
        const isCharLetter = isLetter(c)

        countOfNumbers += isCharNumber
        countOfLetters += isCharLetter
        countOfOtherSymbols += !isCharLetter && !isCharNumber
    })

    console.log(
        `Count of numbers: ${countOfNumbers}\nCount of Letters: ${countOfLetters}\nCount of special symbols: ${countOfOtherSymbols}`,
    )
}

// Task 2

const units = ['нуль', 'один', 'два', 'три', 'чотири', "п'ять", 'шість', 'сім', 'вісім', "дев'ять"]

const teens = [
    'десять',
    'одинадцять',
    'дванадцять',
    'тринадцять',
    'чотирнадцять',
    "п'ятнадцять",
    'шістнадцять',
    'сімнадцять',
    'вісімнадцять',
    "дев'ятнадцять",
]

const tens = ['двадцять', 'тридцять', 'сорок', "п'ятдесят", 'шістдесят', 'сімдесят', 'вісімдесят', "дев'яносто"]

const hundreds = ['сто', 'двісті', 'триста', 'чотириста', "п'ятсот", 'шістсот', 'сімсот', 'вісімсот', "дев'ятсот"]

const thousands = [
    'тисяча',
    'дві тисячі',
    'три тисячі',
    'чотири тисячі',
    "п'ять тисяч",
    'шість тисяч',
    'сім тисяч',
    'вісім тисяч',
    "дев'ять тисяч",
]

const numberToString = (number) => {
    if (isNaN(number) || Math.abs(number) >= 10000) return undefined

    if (number === 0) return units[0]

    let result = number < 0 ? ['Мінус'] : []
    number = Math.abs(number)

    if (number >= 1000) {
        const th = Math.floor(number / 1000)
        result.push(thousands[th - 1])
        number %= 1000
    }

    if (number >= 100) {
        const h = Math.floor(number / 100)
        result.push(hundreds[h - 1])
        number %= 100
    }

    if (number >= 20) {
        const t = Math.floor(number / 10)
        result.push(tens[t - 2])
        number %= 10
        if (number > 0) result.push(units[number])
    } else if (number >= 10) {
        result.push(teens[number - 10])
    } else if (number > 0) {
        result.push(units[number])
    }

    return result.join(' ')
}

// Task 3

function toggleCase(char) {
    if (char >= 'A' && char <= 'Z') return char.toLowerCase()
    if (char >= 'a' && char <= 'z') return char.toUpperCase()
    return char
}

const YaNeZnauYakNazivatiTakuDurnu = (str) => {
    return str
        .split('')
        .map((e) => {
            if (e >= '0' && e <= '9') return '_'
            return toggleCase(e)
        })
        .join('')
}

// Task 4

function kebabToCamel(str) {
    return str
        .split('-')
        .map((word, index) => {
            if (index === 0) return word.toLowerCase()
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        })
        .join('')
}

// Task 5

function toAbbreviation(phrase) {
    if (typeof phrase !== 'string') return ''

    const words = phrase.split(/\s+/).filter(Boolean)
    const abbreviation = words.map((word) => word[0].toUpperCase()).join('')

    return abbreviation
}

// Task 6

const concat = (...params) => params.join('')

// Task 7

// As i remember we have talked about eval, so its legal :/
const calculate = (expression) => eval(expression)

// Task 8

const printUrlInfo = (url) => {
    const regex = /^(\w+):\/\/([^\/]+)(\/.*)?$/
    const match = url.match(regex)

    if (match) {
        const protocol = match[1]
        const domain = match[2]
        const resource = match[3] || ''
        console.log(`Protocol: ${protocol},\nDomain: ${domain},\nResource: ${resource}`)
    }
}

// Task 9

const split = (str, separator) => {
    const result = []
    let start = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] === separator) {
            result.push(str.substring(start, i))
            start = i + 1
        }
    }

    result.push(str.substring(start))
    while (result.length && result[0] === '') result.shift()
    while (result.length && result[result.length - 1] === '') result.pop()
    return result
}

// Task 10

const printFormate = (template, ...params) => {
    console.log(
        template.replace(/%(\d+)/g, (match, number) => {
            const index = parseInt(number, 10) - 1
            return params[index] !== undefined ? params[index] : match
        }),
    )
}
