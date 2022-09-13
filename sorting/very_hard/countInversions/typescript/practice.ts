{
  {
    // O(nlog(n)) time | o(n) space
    function countInversions(array: number[]) {
      const inversion: Inversion = { count: 0 };
      mergeSort(array, inversion);
      return inversion.count;
    }

    interface Inversion { count: number; };

    function mergeSort(array: number[], inversion: Inversion): number[] {
      if (array.length <= 1) return array;

      const [left, right] = split(array);
      const sortedLeft = mergeSort(left, inversion);
      const sortedRight = mergeSort(right, inversion);
      return merge(sortedLeft, sortedRight, inversion);
    }

    function merge(left: number[], right: number[], inversion: Inversion): number[] {
      const merged: number[] = [];
      let [i, j] = [0, 0];
      while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
          merged.push(left[i]);
          i += 1;
        } else {
          inversion.count += left.length - i; // instead of left.slice(i).length
          merged.push(right[j]);
          j += 1;
        }
      }

      merged.push(...left.slice(i));
      merged.push(...right.slice(j));

      return merged;
    }

    function split(array: number[]): number[][] {
      const midIdx = Math.floor(array.length / 2);
      return [array.slice(0, midIdx), array.slice(midIdx)];
    }
  }
  {
    class Inversion {
      count: number;
      constructor() {
        this.count = 0;
      }
    }

    // O(nlog(n)) time | O(nlog(n)) space
    function countInversions(array: number[]) {
      const inversion = new Inversion();
      mergeSort(array, inversion);
      return inversion.count;
    }


    function mergeSort(array: number[], inversion: Inversion): number[] {
      if (array.length <= 1) return array;

      const [left, right] = split(array);
      const sortedLeft = mergeSort(left, inversion);
      const sortedRight = mergeSort(right, inversion);
      return merge(sortedLeft, sortedRight, inversion);
    }

    function merge(left: number[], right: number[], inversion: Inversion) {
      let [i, j] = [0, 0];
      const merged: number[] = [];
      while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
          merged.push(left[i]);
          i += 1;
        } else {
          inversion.count += left.length - i;
          merged.push(right[j]);
          j += 1;
        }
      }
      merged.push(...left.slice(i));
      merged.push(...right.slice(j));

      return merged;
    }

    function split(array: number[]) {
      const midIdx = Math.floor(array.length / 2);
      return [array.slice(0, midIdx), array.slice(midIdx)];
    }

    // [1, 2, 3, 4, 5]
    //  0  1  2  3  4
  }
}

export const __ = '__';