/**
 * O(n) time
 * O(n) space
 * @param array n
 * @returns
 */
export function nextGreaterElement(array) {
    const result = new Array(array.length).fill(-1);
    const stackOfIdxs = [];
    for (let i = 0; i < (2 * array.length); i++) {
        const num = array[i % array.length];
        while (stackOfIdxs.length > 0 && num > array[stackOfIdxs[stackOfIdxs.length - 1]]) {
            result[stackOfIdxs.pop()] = num;
        }
        stackOfIdxs.push(i % array.length);
    }
    return result;
}
