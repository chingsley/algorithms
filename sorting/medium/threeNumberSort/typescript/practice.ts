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
          [array[current], array[right]] = [array[right], array[current]];
          right -= 1;
        } else {
          current += 1;
        }
      }

      return array;
    }
  }
  {
    // O(n) time | O(1) space
    function threeNumberSort(array: number[], order: number[]) {
      const counts = new Array(order.length).fill(0);

      // O(n * 3) time = O(n) time
      for (let val of array) { // O(n) time
        const indexOfValInOrder = order.indexOf(val); // O(3) time
        counts[indexOfValInOrder] += 1;
      }

      let currIdx = 0;
      // O(3 * n) time = O(n) time
      for (let i = 0; i < counts.length; i++) { // O(3) time
        let count = counts[i];
        const value = order[i];
        while (count > 0) { // O(n) time
          array[currIdx] = value;
          count--;
          currIdx++;
        };
      }

      return array;
    }

  }
  {
    // O(n) time | O(1) space
    function threeNumberSort(array: number[], order: number[]) {
      let leftIdx = 0;
      let rightIdx = array.length - 1;
      let i = 0;
      while (i <= rightIdx) {
        if (array[i] === order[0]) swap(i, leftIdx, array);
        if (array[i] === order[2]) swap(i, rightIdx, array);

        if (array[leftIdx] === order[0]) leftIdx += 1;
        if (array[rightIdx] === order[2]) rightIdx -= 1;
        if (array[i] === order[1]) i += 1;
        if (array[i] === order[0] && i <= leftIdx) i += 1;
      }

      return array;
    }

    function swap(a: number, b: number, array: number[]) {
      [array[a], array[b]] = [array[b], array[a]];
    }
  }
}

export const __ = '__';