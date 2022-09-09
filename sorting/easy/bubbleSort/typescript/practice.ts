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
}