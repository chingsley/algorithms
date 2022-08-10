/**
 * Time: O(n)
 * Space: O(1)]
 * @param array n
 * @returns number
 */
export function longestPeak(array: number[]) {
  let longest: number = 0;

  let i = 1;
  while (i < array.length - 1) {
    if (isPeak(i, array)) {
      const { peakSize, peakEndIdx } = getPeakSize(i, array);
      longest = Math.max(peakSize, longest);
      i = peakEndIdx + 1;
    } else {
      i += 1;
    }
  }

  return longest;
}

function isPeak(i: number, array: number[]): boolean {
  return array[i - 1] < array[i] && array[i + 1] < array[i];
}

function getPeakSize(i: number, array: number[]): { [key: string]: number; } {
  let left = i;
  let right = i;
  while (left >= 0 && array[left - 1] < array[left]) { // look before leap
    left -= 1;
  }

  while (right < array.length - 1 && array[right + 1] < array[right]) { // look before leap
    right += 1;
  }

  return {
    peakSize: right - left + 1,
    peakEndIdx: right,
  };
}