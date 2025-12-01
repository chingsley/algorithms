// Using the in-built sort() function on the output array
// O(3n)time = O(n) time
// O(1) space
export function findThreeLargestNumbers(array: number[]) {
  const sortedOutput: number[] = [-Infinity, -Infinity, -Infinity];
  for (let num of array) { // xn
    if (num > sortedOutput[0]) {
      sortedOutput[0] = num;
      sortedOutput.sort((a, b) => a - b); // x3 // using the in-built sort() function
    }
  }
  return sortedOutput;
}