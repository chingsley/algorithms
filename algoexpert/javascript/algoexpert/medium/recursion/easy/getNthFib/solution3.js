// O(n) time | O(1) space
export function getNthFib(n) {
    const arr = [0, 1];
    if (n === 1)
        return arr[0];
    if (n === 2)
        return arr[1];
    let result = 0;
    let count = 3;
    while (count <= n) {
        result = arr[0] + arr[1];
        arr[0] = arr[1];
        arr[1] = result;
        // console.log({ n, arr, count })
        count++;
    }
    return result;
}
// 0, 1, 1, 2, 3, 5, 8, 13, 21
console.log(getNthFib(9));
