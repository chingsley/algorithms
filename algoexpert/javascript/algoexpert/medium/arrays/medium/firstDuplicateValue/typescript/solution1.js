/**
 * Time: O(n)
 * Space: O(n)
 * @param array n
 * @returns number
 */
export function firstDuplicateValue(array) {
    const seen = {};
    for (let num of array) {
        if (num in seen)
            return num;
        seen[num] = num;
    }
    return -1;
}
