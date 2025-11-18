const createTime = (hours, minutes, seconds) => {
    return { hours, minutes, seconds };
};

const displayTime = (time) => {
    const pad = (n) => String(n).padStart(2, '0');
    console.log(`${pad(time.hours)}:${pad(time.minutes)}:${pad(time.seconds)}`);
};

const addSeconds = (time, secondsToAdd) => {
    let totalSeconds = time.hours * 3600 + time.minutes * 60 + time.seconds + secondsToAdd;
    totalSeconds = ((totalSeconds % 86400) + 86400) % 86400;
    time.hours = Math.floor(totalSeconds / 3600);
    time.minutes = Math.floor((totalSeconds % 3600) / 60);
    time.seconds = totalSeconds % 60;
    return time;
};

const addMinutes = (time, minutesToAdd) => {
    return addSeconds(time, minutesToAdd * 60);
};

const addHours = (time, hoursToAdd) => {
    return addSeconds(time, hoursToAdd * 3600);
};

const testTime = () => {
    const time = createTime(20, 30, 45);
    console.log('Initial time:');
    displayTime(time);

    console.log('After adding 30 seconds:');
    addSeconds(time, 30);
    displayTime(time);

    console.log('After adding 90 minutes:');
    addMinutes(time, 90);
    displayTime(time);

    console.log('After adding 3 hours:');
    addHours(time, 3);
    displayTime(time);

    console.log('After subtracting 50 seconds:');
    addSeconds(time, -50);
    displayTime(time);

    console.log('After subtracting 120 minutes:');
    addMinutes(time, -120);
    displayTime(time);

    console.log('After subtracting 5 hours:');
    addHours(time, -5);
    displayTime(time);
};

module.exports = testTime;
