// O(nlog(n)) time | O(1) space
export function minimumWaitingTime(array) {
    array.sort((a, b) => a - b);
    let runningSum = 0;
    let overallSum = 0;
    for (let i = 1; i < array.length; i++) {
        runningSum += array[i - 1];
        overallSum += runningSum;
    }
    return overallSum;
}
console.log(minimumWaitingTime([3, 2, 1, 2, 6]));
