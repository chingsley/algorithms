{
  {

    // worst case: O(n^2) time | O(log(n)) space
    // best/avg case: O(n) time | O(log(n)) space
    function quickselect(array: number[], k: number) {
      return quickselectInRange(0, array.length - 1, array, k - 1);
    }

    function quickselectInRange(startIdx: number, endIdx: number, array: number[], kIdx: number): number {
      let p = startIdx;
      let pivot = array[p];
      let l = startIdx + 1;
      let r = endIdx;
      while (l <= r) {
        if (array[l] > pivot && array[r] < pivot) {
          [array[l], array[r]] = [array[r], array[l]];
        }
        if (array[l] <= pivot) l += 1;
        if (array[r] >= pivot) r -= 1;
      }

      [array[p], array[r]] = [array[r], array[p]];

      if (r === kIdx) {
        return array[r];
      } else if (r > kIdx) {
        return quickselectInRange(startIdx, r - 1, array, kIdx);
      } else {
        return quickselectInRange(r + 1, endIdx, array, kIdx);
      }
    }
  }
  {
    // worst case: O(n^2) time | O(1) space
    // best/avg case: O(n) time | O(1) space
    function quickselect(array: number[], k: number) {
      let [startIdx, endIdx] = [0, array.length - 1];

      while (true) {
        if (startIdx > endIdx) {
          throw new Error("execution shouldn't reach here, please check the code");
        }
        let pivot = array[startIdx];
        let leftIdx = startIdx + 1;
        let rightIdx = endIdx;

        while (leftIdx <= rightIdx) {
          if (array[leftIdx] > pivot && array[rightIdx] < pivot) {
            [array[leftIdx], array[rightIdx]] = [array[rightIdx], array[leftIdx]];
          }
          if (array[leftIdx] <= pivot) leftIdx += 1;
          if (array[rightIdx] >= pivot) rightIdx -= 1;
        }
        [array[rightIdx], array[startIdx]] = [array[startIdx], array[rightIdx]];

        if (rightIdx === k - 1) {
          return array[rightIdx];
        } else if (rightIdx > k - 1) {
          endIdx = rightIdx - 1;
        } else {
          startIdx = rightIdx + 1;
        }
      }
    }

  }
}

export const __ = '__';