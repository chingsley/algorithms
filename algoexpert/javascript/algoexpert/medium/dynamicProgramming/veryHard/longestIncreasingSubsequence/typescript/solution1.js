// O(n^2) time | O(n^2) space
export function longestIncreasingSubsequence(array) {
    let longest = [];
    const memo = {};
    for (let i = 0; i < array.length; i++) {
        const subSeq = getLongestIncSubSeqAt(i, array, memo);
        if (subSeq.length > longest.length)
            longest = subSeq;
    }
    return longest;
}
function getLongestIncSubSeqAt(i, array, memo) {
    if (i in memo)
        return memo[i];
    let subSeqAtI = [];
    for (let j = i + 1; j < array.length; j++) {
        if (array[j] <= array[i])
            continue;
        const subSeqAtJ = getLongestIncSubSeqAt(j, array, memo);
        const subSeqIJ = [array[i], ...subSeqAtJ];
        if (subSeqIJ.length > subSeqAtI.length)
            subSeqAtI = subSeqIJ;
    }
    memo[i] = subSeqAtI.length > 0 ? subSeqAtI : [array[i]];
    return memo[i];
}
