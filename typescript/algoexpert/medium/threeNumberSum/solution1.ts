function threeNumberSum(array: number[], targetSum: number): number[][] {
  const triplets = [];
  for (let i = 0; i < array.length - 2; i++) {
    let j = i + 1;
    let k = array.length - 1;
    while (i < k) {
      const sum = array[i] + array[j] + array[k];
      if (sum < targetSum) {
        j++;
      } else if (sum > targetSum) {
        k--;
      } else {
        triplets.push([array[i], array[j], array[k]]);
        j++;
        k--;
      }
    }
  }
  return [];
}