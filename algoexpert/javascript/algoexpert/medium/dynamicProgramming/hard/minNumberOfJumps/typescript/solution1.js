// O(n) time | O(n) space
export function minNumberOfJumps(array) {
    const memo = {};
    return minJumpFrom(0, array, memo);
}
function minJumpFrom(i, array, memo) {
    if (i === array.length - 1)
        return 0;
    if (i in memo)
        return memo[i];
    let minJumps = Infinity;
    for (let j = 1; j <= array[i]; j++) {
        if (i + j > array.length - 1)
            continue;
        minJumps = Math.min(minJumps, minJumpFrom(i + j, array, memo));
    }
    memo[i] = minJumps + 1;
    return memo[i];
}
