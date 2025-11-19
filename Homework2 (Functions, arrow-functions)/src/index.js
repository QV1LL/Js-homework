function compare(a, b) {
    const number1 = Number(a);
    const number2 = Number(b);

    if (Number.isNan(number1) || Number.isNan(number2)) return NaN;

    const substract = number1 - number2;

    return !substract ? substract : substract / Math.abs(substract);
}

function factorial(value) {
    const number = Number(value);

    if (Number.isNan(number)) return number;
    if (number === 0 || number === 1) return number;
    if (number < 0) return NaN;

    return value * factorial(value - 1);
}

function createNumber(...discharges) {
    if (discharges.length === 0) return NaN;

    return Number(discharges.join(''));
}

function calculateRectangleSquare(a, b) {
    return a * (b || a);
}

function isPerfect(number) {
    if (Number.isNaN(number)) return NaN;

    const getDivisors = (n) => {
        if (n === 0) return [];

        n = Math.abs(n);
        const divisors = [];

        for (let i = 1; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                divisors.push(i);
                if (i !== n / i) {
                    divisors.push(n / i);
                }
            }
        }

        return divisors.sort((a, b) => a - b);
    };

    return (
        number ===
        getDivisors(number)
            .filter((n) => n !== number)
            .reduce((accumulator, current) => accumulator + current, 0)
    );
}

function getPerfectFromRange(min, max) {
    if (min === max) return isPerfect(max);
    if (min > max) {
        min, (max = max), min;
    }

    return Array.from({ length: max - min + 1 }, (_, i) => i + min).filter(isPerfect);
}

function printTime(hours, minutes, seconds) {
    if (hours > 23 || hours < 0) throw new Error('Hours must be in range from 0 to 23');

    if (minutes > 59 || minutes < 0) throw new Error('Minutes must be in range from 0 to 59');

    if (seconds > 59 || seconds < 0) throw new Error('Seconds must be in range from 0 to 59');

    const pad = (n) => String(n).padStart(2, '0');
    console.log(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);
}

function toSeconds(seconds, minutes, hours) {
    return seconds + minutes * 60 + hours * 3600;
}

function formatTimeFromSeconds(totalSeconds) {
    totalSeconds = Math.floor(totalSeconds);
    totalSeconds = ((totalSeconds % 86400) + 86400) % 86400;

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (n) => String(n).padStart(2, '0');

    return `${hours}:${pad(minutes)}:${pad(seconds)}`;
}

function getDatesDifference(firstDate, secondDate) {
    const firstInSeconds = toSeconds(firstDate.seconds, firstDate.minutes, firstDate.hours);
    const secondInSeconds = toSeconds(secondDate.seconds, secondDate.minutes, secondDate.hours);
    const difference = Math.abs(secondInSeconds - firstInSeconds);

    return formatTimeFromSeconds(difference);
}
