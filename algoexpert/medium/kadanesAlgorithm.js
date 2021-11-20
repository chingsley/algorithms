// O(n) time, O(1) space
function kadanesAlgorithm(array) {
  let maxEndingHere = array[0];
  let maxSoFar = array[0];
  for (let num of array.slice(1)) {
    maxEndingHere = Math.max(num, maxEndingHere + num);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}

{
  /**
   * Different variant of the question:
   * Return the subArray that sums to the maximum value
   */
  function subarrayWithKadanesAlgorithm(array) {
    let startIdx = 0;
    let endIdx = 0;
    let finalMaxSum = array[0];
    let runningMax = array[0];
    for (let i = 1; i < array.length; i++) {
      runningMax = runningMax + array[i];
      if (runningMax < array[i]) {
        runningMax = array[i];
        startIdx = i;
        endIdx = i;
      }
      if (runningMax > finalMaxSum) {
        finalMaxSum = runningMax;
        endIdx = i;
      }
    }

    return array.slice(startIdx, endIdx + 1);
  }

  const ts1 = {
    array: [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4],
  };
  const ts2 = {
    array: [3, 5, -9, 1],
  };
  console.log(subarrayWithKadanesAlgorithm(ts1.array));
  console.log(subarrayWithKadanesAlgorithm(ts2.array));
}
