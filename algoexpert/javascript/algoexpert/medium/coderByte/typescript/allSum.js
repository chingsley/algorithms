/**
 * Incrrect Solution - Not Solved yet
 * @param targetSum number (n)
 * @param array array (m)
 * @returns number[]
 */
function allSum(targetSum, array) {
    const results = [];
    allSumHelper(targetSum, array, results);
    return results;
}
function allSumHelper(targetSum, array, results) {
    if (targetSum === 0)
        return [];
    if (targetSum < 0)
        return null;
    //  const results: number[][] = [];
    for (const num of array) {
        const remainder = targetSum - num;
        const remainderRes = allSumHelper(remainder, array, results);
        if (remainderRes !== null) {
            console.log({ remainderRes });
            results.push([...remainderRes, num]);
            return [...remainderRes, num];
        }
    }
    return null;
}
console.log(allSum(7, [2, 3, 4, 7]));
