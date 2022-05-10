// O(nlog(n)) time | O(1) space
export function minimumWaitingTime(array: number[]): number {
  array.sort((a, b) => a - b);

  let overallSum: number = 0;
  for(let i = 0; i < array.length - 1; i++) {
		const duration = array[i];
		const queriesLeft = (array.length - (i+1));
    overallSum += duration * queriesLeft;
  }
  return overallSum;
}


console.log(
minimumWaitingTime(
  [3, 2, 1, 2, 6]
)
);