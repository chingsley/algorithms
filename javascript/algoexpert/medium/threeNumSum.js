// time: o(n^2), Space: O(n)
function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  const triplets = [];
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      let currentSum = array[i] + array[left] + array[right];

      if (currentSum < targetSum) {
        left += 1;
      } else if (currentSum > targetSum) {
        right -= 1;
      } else {
        // we have a match (i.e: currentSum === targetSum)
        triplets.push([array[i], array[left], array[right]]);
        left += 1;
        right -= 1;
      }
    }
  }

  return triplets;
}