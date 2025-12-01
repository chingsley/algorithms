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
  {
    console.log('here.........');
    function insertInSortedArray(array: number[]) {
      for (let j = 1; j < array.length; j++) {
        const key = array[j];
        let i = j - 1;
        // console.log(array);
        while (i >= 0 && array[i] > key) {
          console.log('before:', array);
          array[i + 1] = array[i];
          console.log('after :', array, '\n');
          i = i - 1;
        }
        array[i + 1] = key;
      }

      console.log(array);
    }

    insertInSortedArray([2, 5, 4, 6, 1, 3]);
  }
}

export const __ = '__';