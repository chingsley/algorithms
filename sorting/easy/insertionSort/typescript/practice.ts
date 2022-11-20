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
  {
    // O(n^2) time | O(1) space
    function insertionSort(array: number[]) {
      for (let i = 1; i < array.length; i++) {
        insertInSortedArray(i, array);
      }
      return array;
    }

    function insertInSortedArray(i: number, array: number[]) {
      while (i - 1 >= 0 && array[i] < array[i - 1]) {
        [array[i], array[i - 1]] = [array[i - 1], array[i]];
        i -= 1;
      }
    }

  }
  {
    // O(n^2) time | O(1) space
    function insertionSort(array: number[]) {
      for (let i = 1; i < array.length; i++) {
        for (let j = i; j > 0; j--) {
          if (array[j] < array[j - 1]) {
            [array[j], array[j - 1]] = [array[j - 1], array[j]];
          }
        }
      }
      return array;
    }
  }
  {
    // O(n^2) time | O(1) space
    function insertionSort(array: number[]) {
      for (let i = 1; i < array.length; i++) {
        for (let j = i; j > 0; j--) {
          if (array[j] < array[j - 1]) {
            [array[j], array[j - 1]] = [array[j - 1], array[j]];
          }
        }
      }
      return array;
    }
  }
}

export const __ = '__';