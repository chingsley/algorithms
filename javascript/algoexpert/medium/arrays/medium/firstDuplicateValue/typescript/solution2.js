/**
 * Time: O(n)
 * Space: O(n)
 * @param array n
 * @returns number
 */
export function firstDuplicateValue(array) {
    const seen = new Set();
    for (let num of array) {
        if (seen.has(num))
            return num;
        seen.add(num);
    }
    return -1;
}
