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
}

export const __ = '__';