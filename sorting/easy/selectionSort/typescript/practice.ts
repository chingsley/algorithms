{
  {
    // O(n^2) time | O(1) space
    function selectionSort(array: number[]) {
      for (let i = 0; i < array.length - 1; i++) {
        let [minVal, minIdx] = [array[i], i];

        for (let j = i; j < array.length; j++) {
          if (array[j] < minVal) {
            [minVal, minIdx] = [array[j], j];
          }
        }
        [array[i], array[minIdx]] = [array[minIdx], array[i]];

      }

      return array;
    }
  }
  {
    // O(n^2) time | O(1) space
    function selectionSort(array: number[]) {
      for (let i = 0; i < array.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < array.length; j++) {
          if (array[j] < array[minIdx]) minIdx = j;
        }
        [array[i], array[minIdx]] = [array[minIdx], array[i]];
      }

      return array;
    }
  }
  {
    // O(n^2) time | O(1) space
    function selectionSort(array: number[]) {
      for (let i = 0; i < array.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < array.length; j++) {
          if (array[j] < array[minIdx]) minIdx = j;
        }

        [array[minIdx], array[i]] = [array[i], array[minIdx]];
      }

      return array;
    }
  }
  {
    // O(n^2) time | O(1) space
    function selectionSort(array: number[]) {
      for (let i = 0; i < array.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < array.length; j++) {
          if (array[j] < array[minIdx]) minIdx = j;
        }
        [array[i], array[minIdx]] = [array[minIdx], array[i]];
      }

      return array;
    }
  }
  {
    // O(n^2) time | O(1) space
    function selectionSort(array: number[]) {
      for (let i = 0; i < array.length - 1; i++) {
        let minIdx = i;
        for (let j = i; j < array.length; j++) {
          if (array[j] < array[minIdx]) {
            minIdx = j;
          }
        }
        [array[i], array[minIdx]] = [array[minIdx], array[i]];
      }

      return array;
    }
  }
  {
    function selectionSort(array: number[]) {
      for (let i = 0; i < array.length - 1; i++) {
        for (let j = array.length - 1; j > i; j--) {
          if (array[j] < array[j - 1]) {
            [array[j - 1], array[j]] = [array[j], array[j - 1]];
          }
        }
      }
      return array;
    }

  }
}

export const __ = '__';