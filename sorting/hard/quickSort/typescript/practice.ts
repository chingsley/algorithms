{
  {
    // O(nlog(n)) time (best case)
    // O(n^2) time (worst case)
    // O(log(n)) space (all cases)
    function quickSort(array: number[]): number[] {
      if (array.length <= 1) return array;

      const pivot = array[0];
      const lessThanPivot: number[] = [];
      const greaterThanPivot: number[] = [];
      for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
          lessThanPivot.push(array[i]);
        } else {
          greaterThanPivot.push(array[i]);
        }
      }

      return [...quickSort(lessThanPivot), pivot, ...quickSort(greaterThanPivot)];
    }
  }
}

export const __ = '__';