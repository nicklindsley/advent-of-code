import { formattedInput } from './input.js';

const getIdsForRange = (start: number, end: number): number[] => {
    const size = end - start + 1;
    return [...Array(size).keys()].map((i) => i + start);
};

const findInvalidIds = (ids: number[]) =>
    ids.filter((id) => {
        const strId = id.toString();
        const middleIndex = strId.split('').length / 2;
        const firstHalf = strId.slice(0, middleIndex);
        const lastHalf = strId.slice(middleIndex);

        return firstHalf === lastHalf;
    });

const invalidIds = formattedInput.flatMap((input) =>
    findInvalidIds(getIdsForRange(input.start, input.end))
);
const invalidIdSum = invalidIds.reduce((acc, cur) => acc + cur, 0);
console.log(invalidIdSum);
