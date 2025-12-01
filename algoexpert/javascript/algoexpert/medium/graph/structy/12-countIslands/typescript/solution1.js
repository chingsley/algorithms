/**
 * Question:
 *
 * Time: O(e)
 * Space: O(n)
 * Where: e = no. of edges in the graph
 *        n = no. of nodes in the graph
 *
 * @param graph Grahp
 * @returns number
 */
export function countIslands(arr) {
    const visited = new Set();
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (explore(arr, i, j, visited) === true) {
                count += 1;
            }
        }
    }
    return count;
}
function explore(arr, i, j, visited) {
    console.log(visited);
    const rowInBound = i >= 0 && i < arr.length;
    const colInBound = j >= 0 && j < arr[0].length;
    if (!rowInBound || !colInBound)
        return false;
    const key = i + ',' + j;
    if (arr[i][j].toLowerCase() === 'w')
        return false;
    if (visited.has(key))
        return false;
    visited.add(key);
    explore(arr, i - 1, j, visited); // up
    explore(arr, i + 1, j, visited); // down
    explore(arr, i, j - 1, visited); // left
    explore(arr, i, j + 1, visited); // right
    return true;
}
const arr = [
    ['w', 'l', 'w', 'l'],
    ['w', 'l', 'w', 'w'],
    ['w', 'l', 'w', 'w'],
    ['w', 'l', 'w', 'w'],
    ['w', 'l', 'w', 'w'],
];
console.log(countIslands(arr));
