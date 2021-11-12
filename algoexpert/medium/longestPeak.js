function longestPeak(array) {
  // Write your code here.
  let longestPeakSize = 0;
  for (i = 1; i < array.length - 1; i++) {
    if (isPeakIndex(i, array)) {
      const currentPeakSize = getPeakSize(i, array);
      if (currentPeakSize > longestPeakSize) {
        longestPeakSize = currentPeakSize;
      }
    }
  }

  return longestPeakSize;
}

function isPeakIndex(idx, array) {
  return array[idx] > array[idx - 1] && array[idx] > array[idx + 1];
}

function getPeakSize(idx, array) {
  let size = 1; // counting the current peak as one
  let j = idx - 1;
  while (j > -1 && array[j] < array[j + 1]) {
    size++;
    j--;
  }
  let k = idx + 1;
  while (k < array.length && array[k] < array[k - 1]) {
    size++;
    k++;
  }

  return size;
}

console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]));
console.log(longestPeak([5, 4, 3, 2, 1, 2, 10, 12]));

// Do not edit the line below.
exports.longestPeak = longestPeak;
