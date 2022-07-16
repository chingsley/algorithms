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



}