// Task1

function processArray(array, callback) {
    const result = []
    Array.from(array).forEach((el) => {
        result.push(callback(el))
    })
    return result
}

const doubleElement = (el) => el * 2
const reverseElement = (el) => `${el}`.split('').reverse().join('')

console.log(processArray([1, 2, 3, 4, 5], doubleElement)) // [2, 4, 6, 8, 10]
console.log(processArray(['hello', 'world'], reverseElement)) // ["olleh", "dlrow"]

// Task2

function filterArray(array, callback) {
    const result = []
    Array.from(array).forEach((el) => {
        if (callback(el)) result.push(el)
    })
    return result
}

const isEven = (number) => number % 2 === 0
const isShortWord = (word) => `${word}`.length <= 4

console.log(filterArray([1, 2, 3, 4, 5], isEven)) // [2, 4]
console.log(filterArray(['cat', 'elephant', 'dog', 'bird'], isShortWord)) // ["cat", "dog", "bird"]

// Task3

const printWithDelay = (message, delay) => {
    return () =>
        new Promise((resolve) => {
            setTimeout(() => {
                console.log(message)
                resolve()
            }, delay)
        })
}

const washDishes = printWithDelay('Dishes is washed', 2000)
const cleanRoom = printWithDelay('Room is cleaned', 4000)
const makeDinner = printWithDelay('Dinner is made', 7000)

washDishes().then(cleanRoom).then(makeDinner)

// Task4

const sortArray = (array) =>
    new Promise((resolve, reject) => {
        const arrayObj = Array.from(array)
        if (arrayObj.length === 0) reject('Array is empty')

        setTimeout(() => resolve(arrayObj.sort((a, b) => a - b)), 2000)
    })

sortArray([1, 2, 3, 4, 5, 8, 100, 6, 8, 84, 24, 8, 7]).then((result) => console.log(result))

// Task5

const multiplyAsync = (a, b) =>
    new Promise((resolve, reject) => {
        if (+a === NaN || +b === NaN) reject(`Invalud input values ${a}, ${b}`)

        setTimeout(() => resolve(a * b), 2000)
    })

const main = async () => {
    const result = await multiplyAsync(5, 80)
    console.log(result)
}

main()

// Task6

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const sortArrayAsync = async (array) => {
    const arrayObj = Array.from(array)
    if (arrayObj.length === 0) throw new Error('Array is empty')

    await delay(2000)

    return arrayObj.sort((a, b) => a - b)
}

const anotherMain = async () => {
    const result = await sortArrayAsync([1, 2, 3, 4, 5, 8, 100, 6, 8, 84, 24, 8, 7])
    console.log(result)
}

anotherMain()
