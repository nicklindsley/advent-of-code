import { formattedInput } from './input.js';

const getIdsForRange = (start: number, end: number): number[] => {
    const size = end - start + 1;
    return [...Array(size).keys()].map((i) => i + start);
};

const findInvalidIds = (ids: number[]) =>
    ids.filter((id) => {
        const strId = id.toString();
        let repeatedSubstring: string | undefined = undefined;

        strId.split('').find((_char, i) => {
            const index = i + 1;
            const firstSubstring = strId.slice(0, index);
            const secondSubstring = strId.slice(index, index * 2);
            if (firstSubstring === secondSubstring) {
                repeatedSubstring = firstSubstring;
                return true;
            }
        });

        console.log(id, repeatedSubstring);
    });

const invalidIds = formattedInput.flatMap((input) =>
    findInvalidIds(getIdsForRange(input.start, input.end))
);
const invalidIdSum = invalidIds.reduce((acc, cur) => acc + cur, 0);
console.log(invalidIdSum);
