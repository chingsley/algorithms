{
  {
    /**
 * Time: O(n^2) (worst case; better in practice b/c of the use of the 'upperBound' control) 
 * Space: O(n) space
 * 
 * @param array n
 * @param upperBound 
 * @param sorted 
 * @returns number[]
 */
    function bubbleSort(array: number[], upperBound: number, sorted: boolean = false) {
      if (sorted) return;

      upperBound = upperBound || array.length;

      sorted = true;
      for (let i = 1; i < upperBound; i++) {
        if (array[i - 1] > array[i]) {
          swap(array, i - 1, i);
          sorted = false;
        }
      }

      bubbleSort(array, upperBound - 1, sorted);

      return array;
    }


    function swap(array: number[], i: number, j: number) {
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

  }
  {
    /**
 *
 * O(n^2): time (in practice this solution is better than O(n^2)
 * because with each iteration of the while loop, we reduce the
 * length travelled by the for loop in the array . We achieve this
 * by using the lastSortedIdx value
 *
 *  O(1): space
 */
    function bubbleSort(array: number[]) {
      let sorted: boolean = false;
      let lastSortedIdx = array.length - 1;
      while (!sorted) {
        sorted = true;
        //  ..; i < array.length - 1; b/c we're comparing (array[i] > array[i + 1], so when i is last item, i+1 will exceed the array bound
        for (let i = 0; i < lastSortedIdx; i++) {
          if (array[i] > array[i + 1]) {
            sorted = false;
            swap(i, i + 1, array);
          }
        }
        lastSortedIdx--;
      }
      return array;
    }

    function swap(i: number, j: number, array: number[]) {
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

  }
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
  {
    // O(n^2) time | O(1) space
    function bubbleSort(array: number[]) {
      for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
          if (array[j] > array[j + 1]) {
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
          }
        }
      }
      return array;
    }

  }
  {
    // O(n^2) time | O(1) space
    function bubbleSort(array: number[]) {
      for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
          if (array[j] > array[j + 1]) {
            [array[j + 1], array[j]] = [array[j], array[j + 1]];
          }
        }
      }
      return array;
    }
  }
  {
    // O(n^2) time | O(1) space
    function bubbleSort(array: number[]) {
      for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
          if (array[j] > array[j + 1]) {
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
          }
        }
      }
      return array;
    }
  }
}

export const __ = '__';