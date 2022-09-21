{
  {
    // O(n^2) time | O(1) space
    function bubbleSort(array: number[]) {
      let endIdx = array.length - 1;
      while (endIdx > 0) {
        for (let i = 0; i < endIdx; i++) {
          if (array[i] > array[i + 1]) {
            [array[i], array[i + 1]] = [array[i + 1], array[i]];
          }
        }

        endIdx -= 1;
      }

      return array;
    }
  }
  {
    function bubbleSort(array: number[]) {
      let endIdx = array.length - 1;
      while (endIdx > 0) {
        for (let j = 0; j < endIdx; j++) {
          if (array[j] > array[j + 1]) {
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
          }
        }
        endIdx -= 1;
      }
      return array;
    }
  }
  {
    // O(n^2) time | O(1) space
    function bubbleSort(array: number[]) {
      let endIdx = array.length - 1;
      while (endIdx > 0) {
        for (let j = 0; j < endIdx; j++) {
          if (array[j] > array[j + 1]) {
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
          }
        }
        endIdx--;
      }

      return array;
    }
  }
  {
    // O(n^2) time | O(1) space
    function bubbleSort(array: number[]) {
      for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
        for (let i = 0; i < endIdx; i++) {
          if (array[i] > array[i + 1]) {
            [array[i], array[i + 1]] = [array[i + 1], array[i]];
          }
        }
      }
      return array;
    }
  }
}

export const __ = '__';