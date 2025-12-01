/*
* O(2^n * n) time
* O(2^n * n) space
*/
export function powerset(array) {
    const combs = [[]];
    for (const item of array) {
        const combsCopy = [...combs];
        for (const comb of combsCopy) {
            combs.push([...comb, item]);
        }
    }
    return combs;
}
