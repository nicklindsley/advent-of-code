import { input } from './input.js';

const initialPosition = 50;
// const testInput = ['L68', 'L30', 'R48', 'L5', 'R60', 'L55', 'L1', 'L99', 'R14', 'L82'];
const data = input;

let zeroCount = 0;

const getNextPosition = (
    currentPosition: number,
    operation: string
): { nextPosition: number; zeroCount: number } => {
    const direction = operation[0];
    const distance = Number(operation.slice(1));

    const distanceApplication =
        direction === 'R' ? currentPosition + distance : currentPosition - distance;
    const zeroCount = Math.floor(Math.abs(distanceApplication) / 100);
    const moduloApplication = distanceApplication % 100;
    const nextPosition = moduloApplication < 0 ? moduloApplication + 100 : moduloApplication;

    return {
        nextPosition,
        zeroCount: currentPosition > 0 && distanceApplication <= 0 ? zeroCount + 1 : zeroCount,
    };
};

const finalPosition = data.reduce((currentPosition, operation) => {
    const nextPosition = getNextPosition(currentPosition, operation);

    zeroCount += nextPosition.zeroCount;

    return nextPosition.nextPosition;
}, initialPosition);

console.log(`Final Position: ${finalPosition}`);
console.log(`Number of times at position 0: ${zeroCount}`);
