const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const createCar = (manufacturer, model, year, averageSpeed) => {
    return {
        manufacturer,
        model,
        year,
        averageSpeed,
    };
};

const displayCar = (car) => {
    for (const property in car) {
        console.log(`${capitalize(property)}: ${car[property]}`);
    }
};

const calculateTravelTime = (car, distance) => {
    const timeToRest = (distance / (car.averageSpeed * 4)) | 0;
    return (distance + timeToRest * car.averageSpeed) / car.averageSpeed;
};

const testCar = () => {
    const car = createCar('Hyundai', 'I30', 2012, 90);
    displayCar(car);

    rl.question(`Enter travel distance: `, (distance) => {
        const traveledDistance = Number(distance);

        if (isNaN(traveledDistance)) {
            console.log(`${distance} is not a number!`);
            return;
        }

        console.log(`Time to drive ${traveledDistance}km: ${calculateTravelTime(car, traveledDistance)}`);
        console.log(`Test successfully completed!`);
    });
};

function capitalize(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

module.exports = testCar;
