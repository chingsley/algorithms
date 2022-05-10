// O(nlog(n)) time | O(1) space
export function minimumWaitingTime(array: number[]): number {
  array.sort((a, b) => a - b);

  let runningSum: number = 0;
  let overallSum: number = 0;
  for(let i = 1; i < array.length; i++) {
    runningSum += array[i - 1];
    overallSum += runningSum;
  }
  return overallSum;
}

console.log(
minimumWaitingTime(
  [3, 2, 1, 2, 6]
)
);