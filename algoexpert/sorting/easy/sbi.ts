{
  // Selection Sort
  // O(n^2) time | O(1) space
  function selectionSort(array: number[]) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = array.length - 1; j > i; j--) {
        if (array[j] < array[j - 1]) {
          [array[j], array[j - 1]] = [array[j - 1], array[j]];
        }
      }
    }
    return array;
  }

  // Bubble Sort
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

  // Insertion Sort
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