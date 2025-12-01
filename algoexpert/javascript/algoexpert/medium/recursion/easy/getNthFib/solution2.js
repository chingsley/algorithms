// Applying memoization
// O(n) time | O(n) space
export function getNthFib(n, memo = {}) {
    if (n === 1)
        return 0;
    if (n === 2)
        return 1;
    if (memo[n])
        return memo[n];
    memo[n] = getNthFib(n - 1, memo) + getNthFib(n - 2, memo);
    return memo[n];
}
// ----- OR --- 
// Applying memoization
// O(n) time | O(n) space
export function getNthFib2(n, memo = { 1: 0, 2: 1 }) {
    if (memo[n] !== undefined)
        return memo[n];
    memo[n] = getNthFib2(n - 1, memo) + getNthFib2(n - 2, memo);
    return memo[n];
}
