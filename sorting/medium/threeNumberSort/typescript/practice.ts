{
  {
    // O(n) time | O(1) space
    function threeNumberSort(array: number[], order: number[]) {
      const bucket: number[] = [0, 0, 0];
      for (let num of array) {
        const orderIdx = order.indexOf(num);
        bucket[orderIdx] += 1;
      }

      let arrIdx = 0;
      for (let i = 0; i < bucket.length; i++) {
        let numCount = bucket[i];
        while (numCount > 0) {
          array[arrIdx] = order[i];
          arrIdx += 1;
          numCount -= 1;
        }
      }

      return array;
    }
  }
  {
    // O(n) time | O(1) space
    function threeNumberSort(array: number[], order: number[]) {
      let leftIdx = 0;
      for (let i = 0; i < array.length; i++) {
        if (array[i] === order[0]) {
          [array[i], array[leftIdx]] = [array[leftIdx], array[i]];
        }
        if (array[leftIdx] === order[0]) leftIdx += 1;
      }

      let rightIdx = array.length - 1;
      for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === order[2]) {
          [array[i], array[rightIdx]] = [array[rightIdx], array[i]];
        }
        if (array[rightIdx] === order[2]) rightIdx -= 1;
      }

      return array;
    }
  }
  {
    // O(n) time | O(1) space
    function threeNumberSort(array: number[], order: number[]) {
      let left = 0;
      let current = 0;
      let right = array.length - 1;

      while (current <= right) {
        if (array[current] === order[0]) {
          [array[left], array[current]] = [array[current], array[left]];
          left += 1;
          current += 1;
        } else if (array[current] === order[2]) {
          [array[right], array[current]] = [array[current], array[right]];
          right -= 1;
        } else {
          current += 1;
        }
      }

      return array;
    }
  }
}

export const __ = '__';