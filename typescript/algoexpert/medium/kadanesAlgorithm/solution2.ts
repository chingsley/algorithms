/**
 * Here, we found the subset that will yield the maxSum, then sum the subset
 * It's not better than solution 1, because it has a space complexity of O(n)
 * But its sub-solution - "findMaxSubset" is the answer if asked to find the
 * subset that will give the maxSum
 * 
 * Time: O(n) [n = length of array]
 * Space: O(n)
 * 
 * @param array n
 * @returns number
 */
export function kadanesAlgorithm(array: number[]) {
  return findMaxSubset(array).reduce((acc, num) => acc + num, 0);
}

// O(n) time | O(n) space
function findMaxSubset(array: number[]) {
  let maxSum = array[0];
  let maxAtIdx = array[0];
  const restarts: number[] = [0];
  let endIdx = 0;

  for (let i = 1; i < array.length; i++) {
    maxAtIdx = maxAtIdx + array[i];
    if (maxAtIdx < array[i]) {
      maxAtIdx = array[i];
      restarts.push(i);
    }
    if (maxAtIdx > maxSum) {
      maxSum = maxAtIdx;
      endIdx = i;
    }
  }

  const startIdx: number | undefined = getStartIdx(restarts, endIdx);
  return array.slice(startIdx, endIdx + 1);
}

function getStartIdx(restarts: number[], endIdx: number): number | undefined {
  let startIdx: number | undefined = undefined;
  let i = restarts.length - 1;
  while (i >= 0 && startIdx === undefined) {
    if (restarts[i] <= endIdx) {
      startIdx = restarts[i];
    }
    i--;
  }
  return startIdx;
}


const ts1 = {
  array: [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4],
};
const ts2 = {
  array: [3, 5, -9, 1],
};
console.log(findMaxSubset(ts1.array));
console.log(kadanesAlgorithm(ts1.array));
console.log(findMaxSubset(ts2.array));
console.log(kadanesAlgorithm(ts2.array));