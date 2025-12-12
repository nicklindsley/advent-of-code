import { input } from './input.js';

type Battery = { value: number; index: number };

const numberOfDigits = 12;
const digits = [...Array(numberOfDigits).keys()].reverse();

const getJoltage = (batteryBank: string) => {
    const batteries = digits.reduce(
        (acc, digit) => {
            const nextBattery = getMaxBattery(batteryBank, acc.index, batteryBank.length - digit);
            return { ...nextBattery, joltage: `${acc.joltage}${nextBattery.value}` };
        },
        { value: 0, index: -1, joltage: '' }
    );

    return Number(batteries.joltage);
};

const getMaxBattery = (batteryBank: string, minIndex?: number, maxIndex?: number): Battery => {
    const batteries = batteryBank.split('').map((i) => Number(i));
    return batteries.reduce(
        (acc, cur, index) =>
            acc.value < cur &&
            (minIndex == null || index > minIndex) &&
            (maxIndex == null || index < maxIndex)
                ? { value: cur, index }
                : acc,
        {
            value: 0,
            index: 0,
        }
    );
};

const finalAnswer = input.map((i) => getJoltage(i)).reduce((acc, cur) => acc + cur, 0);
console.log(finalAnswer);
