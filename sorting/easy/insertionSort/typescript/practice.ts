{
  {
    // O(n^2) time | O(1) space
    function insertionSort(array: number[]) {
      for (let i = 1; i < array.length; i++) {
        let j = i;
        while (j - 1 >= 0 && array[j] < array[j - 1]) {
          [array[j], array[j - 1]] = [array[j - 1], array[j]];
          j -= 1;
        }
      }
      return array;
    }
  }
  {
    // O(n^2) time | O(1) space
    function insertionSort(array: number[]) {
      for (let i = 1; i < array.length; i++) {
        for (let j = i; j - 1 >= 0 && array[j] < array[j - 1]; j--) {
          [array[j], array[j - 1]] = [array[j - 1], array[j]];
        }
      }
      return array;
    }
  }
  {
    function insertionSort(array: number[]) {
      for (let i = 1; i < array.length; i++) {
        let j = i;
        while (j - 1 >= 0 && array[j] < array[j - 1]) {
          [array[j], array[j - 1]] = [array[j - 1], array[j]];
          j -= 1;
        }
      }

      return array;
    }
  }
  {
    function insertionSort(array: number[]) {
      for (let i = 1; i < array.length; i++) {
        for (let j = i; j - 1 >= 0 && array[j] < array[j - 1]; j--) {
          [array[j], array[j - 1]] = [array[j - 1], array[j]];
        }
      }
      return array;
    }
  }
  {
    // O(n^2) time | O(1) space
    function insertionSort(array: number[]) {
      for (let i = 1; i < array.length; i++) {
        let j = i;
        while (j - 1 >= 0 && array[j] < array[j - 1]) {
          [array[j], array[j - 1]] = [array[j - 1], array[j]];
          j -= 1;
        }
      }
      return array;
    }
  }
  {
    // O(n^2) time | O(1) space
    function insertionSort(array: number[]) {
      for (let i = 1; i < array.length; i++) {
        let j = i;
        while (j - 1 >= 0 && array[j] < array[j - 1]) {
          [array[j], array[j - 1]] = [array[j - 1], array[j]];
          j -= 1;
        }
      }

      return array;
    }
  }
}

export const __ = '__';