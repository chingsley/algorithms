import * as _ from './solution1';
{

  /**
   *  [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2,  3]
   *   0, 1, 2, 3, 4, 5,  6, 7, 8,  9, 10, 11, 12   
   *   peakEnd - peakStart + 1 = 10 - 5 + 1 
   */

  { // BEST SO FAR. RETURNS HAS peakStartIdx and peakEndx; So we
    // can resturn the actual peak slices if needed.

    // O(n) time | O(1) space
    function longestPeak(array: number[]) {
      let maxPeak = 0;
      let i = 1;
      while (i < array.length - 1) {
        if (isPeak(i, array)) {
          const [peakStartIdx, peakEndIdx] = countPeak(i, array);
          const peakSize = peakEndIdx - peakStartIdx + 1;
          console.log({ i, peakStartIdx, peakEndIdx, peakSize });
          console.log(array.slice(peakStartIdx, peakEndIdx + 1));
          if (peakSize > maxPeak) maxPeak = peakSize;
          i = peakEndIdx + 1;
        } else {
          i += 1;
        }
      }
      return maxPeak;
    }

    function isPeak(i: number, array: number[]) {
      return array[i] > array[i - 1] && array[i] > array[i + 1];
    }

    function countPeak(i: number, array: number[]) {
      let count = 1;
      let j = i;
      let k = i;
      while (j - 1 >= 0 && array[j - 1] < array[j]) {
        j -= 1;
      }
      while (k + 1 < array.length && array[k + 1] < array[k]) {
        k += 1;
      }

      return [j, k];
    }
  }
  {
    // O(n) time | O(1) space
    function longestPeak(array: number[]) {
      let maxPeakSize = 0;
      let i = 1;
      while (i < array.length - 1) {
        if (isPeak(i, array)) {
          const [peakStartIdx, peakEndIdx] = getPeakRange(i, array);
          const peakSize = peakEndIdx - peakStartIdx + 1;
          if (peakSize > maxPeakSize) maxPeakSize = peakSize;
          i = peakEndIdx + 1;
        } else {
          i += 1;
        }
      }
      return maxPeakSize;
    }

    function isPeak(i: number, array: number[]) {
      return array[i] > array[i - 1] && array[i] > array[i + 1];
    }

    function getPeakRange(i: number, array: number[]) {
      let [j, k] = [i, i];
      while (j - 1 >= 0 && array[j - 1] < array[j]) j--;
      while (k + 1 < array.length && array[k + 1] < array[k]) k++;
      return [j, k];
    }
  }

  {
    // O(n) time | O(1) space
    // n = length of array
    function longestPeak(array: number[]) {
      let longest = 0;
      let i = 1;
      while (i < array.length - 1) {
        if (array[i - 1] < array[i] && array[i + 1] < array[i]) {
          const [peakStart, peakEnd] = getPeakRange(i, array);
          const peakSize = peakEnd - peakStart + 1;
          if (peakSize > longest) longest = peakSize;
          i = peakEnd + 1;
        } else {
          i += 1;
        }
      }

      return longest;
    }

    function getPeakRange(i: number, array: number[]) {
      let [j, k] = [i, i];
      while (j - 1 >= 0 && array[j - 1] < array[j]) j -= 1;
      while (k + 1 < array.length && array[k + 1] < array[k]) k += 1;
      return [j, k];
    }
  }
  {
    // O(n) time | O(1) space
    function longestPeak(array: number[]) {
      let longest = 0;
      let i = 1;
      while (i < array.length - 1) {
        if (isPeak(i, array)) {
          const [peakSize, endIdx] = getPeakSizeAt(i, array);
          if (peakSize > longest) longest = peakSize;
          i = endIdx + 1;
        } else {
          i += 1;
        }

      }

      return longest;
    }

    function isPeak(i: number, array: number[]): boolean {
      const [left, curr, right] = [array[i - 1], array[i], array[i + 1]];
      return left < curr && right < curr;
    }

    function getPeakSizeAt(i: number, array: number[]): [number, number] {
      let [leftIdx, rightIdx] = [i - 1, i + 1];
      while (leftIdx - 1 >= 0 && array[leftIdx - 1] < array[leftIdx]) {
        leftIdx -= 1;
      }
      while (rightIdx + 1 < array.length && array[rightIdx + 1] < array[rightIdx]) {
        rightIdx += 1;
      }

      return [rightIdx - leftIdx + 1, rightIdx];
    }
  }
  {
    // O(n) time | O(1) space
    function longestPeak(array: number[]) {
      let longest = 0;
      let i = 1;
      while (i < array.length - 1) {
        const [peakSize, endIdx] = getPeakSizeAt(i, array);
        if (peakSize > longest) longest = peakSize;
        i = endIdx + 1;
      }

      return longest;
    }

    function getPeakSizeAt(i: number, array: number[]): [number, number] {
      let [leftIdx, rightIdx] = [i - 1, i + 1];
      if (array[leftIdx] >= array[i]) return [0, i];
      if (array[rightIdx] >= array[i]) return [0, i];

      while (leftIdx - 1 >= 0 && array[leftIdx - 1] < array[leftIdx]) {
        leftIdx -= 1;
      }
      while (rightIdx + 1 < array.length && array[rightIdx + 1] < array[rightIdx]) {
        rightIdx += 1;
      }

      return [rightIdx - leftIdx + 1, rightIdx];
    }
  }
}