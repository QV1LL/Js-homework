import { ExtendedDate } from './types/extendedDate.js'

const tomorrowDate = new ExtendedDate().getNextDate()
const output = document.getElementById('output')

let outputText = tomorrowDate.getStringDate()
outputText += tomorrowDate.isInFuture() ? ' in future, ' : ''
outputText += ' is' + (!tomorrowDate.isLeapYear() ? ' not' : '') + ' leap year'
output.textContent = outputText
