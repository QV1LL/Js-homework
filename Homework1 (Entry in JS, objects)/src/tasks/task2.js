const createFraction = (numerator, denominator) => {
    if (denominator === 0) throw new Error('Denominator cannot be 0');

    return {
        numerator,
        denominator,
    };
};

const addFractions = (left, right) => {
    const newDenominator = lcm(left.denominator, right.denominator);
    const newNumerator =
        left.numerator * (newDenominator / left.denominator) + right.numerator * (newDenominator / right.denominator);

    const divisor = gcd(newNumerator, newDenominator);

    return createFraction(newNumerator / divisor, newDenominator / divisor);
};

const substractFractions = (left, right) => {
    return addFractions(left, { ...right, denominator: -right.denominator });
};

const multiplyFractions = (f1, f2) => {
    const result = {
        numerator: f1.numerator * f2.numerator,
        denominator: f1.denominator * f2.denominator,
    };

    return simplifyFraction(result);
};

const divideFractions = (f1, f2) => {
    if (f2.numerator === 0) throw new Error('Cannot divide by zero fraction');
    const result = {
        numerator: f1.numerator * f2.denominator,
        denominator: f1.denominator * f2.numerator,
    };

    return simplifyFraction(result);
};

const testFractions = () => {
    const f1 = createFraction(2, 3);
    const f2 = createFraction(4, 5);

    const sum = addFractions(f1, f2);
    process.stdout.write('Add: ');
    printFraction(sum);

    const diff = substractFractions(f1, f2);
    process.stdout.write('Subtract: ');
    printFraction(diff);

    const product = multiplyFractions(f1, f2);
    process.stdout.write('Multiply: ');
    printFraction(product);

    const quotient = divideFractions(f1, f2);
    process.stdout.write('Divide: ');
    printFraction(quotient);

    const complicated = createFraction(8, 12);
    const simplified = simplifyFraction(complicated);
    process.stdout.write('Simplify 8/12: ');
    printFraction(simplified);

    console.log('Test successfully completed');
};

function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function lcm(a, b) {
    if (a === 0 || b === 0) return 0;
    return Math.abs(a * b) / gcd(a, b);
}

function simplifyFraction(fraction) {
    const divisor = gcd(fraction.numerator, fraction.denominator);
    return {
        numerator: fraction.numerator / divisor,
        denominator: fraction.denominator / divisor,
    };
}

function printFraction(fraction) {
    console.log(`${fraction.numerator}/${fraction.denominator}`);
}

module.exports = testFractions;
