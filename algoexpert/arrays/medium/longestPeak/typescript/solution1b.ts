// O(n) time | O(1) space
// n = length of array
export function longestPeak(array: number[]) {
  let longest: number = 0;
  let i: number = 0;
  while (i < array.length - 1) {
    if (isPeak(i, array)) {
      const { peakSize, endPeak } = calculatePeakSize(i, array);
      longest = Math.max(longest, peakSize);
      i = endPeak + 1;
    } else {
      i += 1;
    }
  }
  return longest;
}

function isPeak(idx: number, array: number[]) {
  return array[idx] > array[idx - 1] && array[idx] > array[idx + 1];
}

function calculatePeakSize(i: number, array: number[]): { [key: string]: number; } {
  let j = i - 1;
  let k = i + 1;
  while (j - 1 >= 0 && array[j - 1] < array[j]) {
    j -= 1;
  }
  while (k + 1 < array.length && array[k + 1] < array[k]) {
    k += 1;
  }
  return {
    peakSize: k - j + 1,
    endPeak: k
  };
}

// 0.   1. 2   3. 4  5. 6
// 4, -3, 0, 10, 5, 6, 7
