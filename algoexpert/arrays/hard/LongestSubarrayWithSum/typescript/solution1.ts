// O(n) time | O(1) space
export function longestSubarrayWithSum(array: number[], targetSum: number) {
  let [i, j] = [0, 0];
  let result: number[] = [];
  let [currSum, xf]: [number, number] = [array[0], 0];
  while (j < array.length) {
    currSum += xf;
    if (currSum === targetSum) {
      if (result.length === 0 || ((j - i) > (result[1] - result[0]))) result = [i, j];
      j += 1;
      xf = array[j];
    } else if (currSum < targetSum) {
      j += 1;
      xf = array[j];
    } else {
      xf = -array[i];
      i += 1;
    }

    if (i > j) {
      j = i;
      [currSum, xf] = [array[i], 0];
    }
  }

  return result;
}
