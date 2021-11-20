// O(n) time, O(n) space
function maxSubsetSumNoAdjacent(array) {
  // base cases:
  if (array.length === 0) {
    return 0;
  }
  if (array.length === 1) {
    return array[0];
  }

  const maxSumsArr = [...array];
  maxSumsArr[1] = Math.max(array[0], array[1]);
  for (let i = 2; i < array.length; i++) {
    maxSumsArr[i] = Math.max(maxSumsArr[i - 1], maxSumsArr[i - 2] + array[i]);
  }

  return maxSumsArr[maxSumsArr.length - 1];
}

// Do not edit the line below.
exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;

// SOLUTION 2
{
  // O(n) time, O(1) space
  function maxSubsetSumNoAdjacent(array) {
    // base cases:
    if (array.length === 0) {
      return 0;
    }
    if (array.length === 1) {
      return array[0];
    }

    let [prev2, prev1] = [array[0], Math.max(array[0], array[1])];

    for (let i = 2; i < array.length; i++) {
      const current = Math.max(prev1, prev2 + array[i]);
      prev2 = prev1;
      prev1 = current;
    }

    return prev1;
  }

  // Do not edit the line below.
  exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;
}
