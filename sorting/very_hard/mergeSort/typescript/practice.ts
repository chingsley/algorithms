{
  {
    // O(nlog(n)) time | o(n) space
    function mergeSort(array: number[]): number[] {
      if (array.length <= 1) return array;

      const [left, right] = split(array);
      const sortedLeft = mergeSort(left);
      const sortedRight = mergeSort(right);
      return merge(sortedLeft, sortedRight);
    }

    function merge(sortedLeft: number[], sortedRight: number[]): number[] {
      let [i, j] = [0, 0];
      const merged: number[] = [];
      while (i < sortedLeft.length && j < sortedRight.length) {
        if (sortedLeft[i] < sortedRight[j]) {
          merged.push(sortedLeft[i]);
          i += 1;
        } else {
          merged.push(sortedRight[j]);
          j += 1;
        }
      }

      merged.push(...sortedLeft.slice(i));
      merged.push(...sortedRight.slice(j));

      return merged;
    }

    function split(array: number[]): number[][] {
      const midIdx = Math.floor(array.length / 2);
      return [array.slice(0, midIdx), array.slice(midIdx)];
    }

    console.log(
      mergeSort([2, 3, 3, 1, 9, 5, 6])
    );
  }
  {
    function mergeSort(array: number[]): number[] {
      if (array.length <= 1) return array;

      const [left, right] = split(array);
      const sortedLeft = mergeSort(left);
      const sortedRight = mergeSort(right);
      return merge(sortedLeft, sortedRight);
    }

    function split(array: number[]): number[][] {
      const midIdx = Math.floor(array.length / 2);
      return [array.slice(0, midIdx), array.slice(midIdx)];
    }

    function merge(left: number[], right: number[]): number[] {
      const merged: number[] = [];
      let [i, j] = [0, 0];
      while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
          merged.push(left[i]);
          i += 1;
        } else {
          merged.push(right[j]);
          j += 1;
        }
      }

      merged.push(...left.slice(i));
      merged.push(...right.slice(j));

      return merged;
    }
  }
  {
    // O(nlog(n)) time | O(nlog(n)) space
    function mergeSort(array: number[]): number[] {
      if (array.length <= 1) return array;

      const [left, right] = split(array);
      return merge(mergeSort(left), mergeSort(right));
    }

    function split(array: number[]) {
      const midIdx = Math.floor(array.length / 2);
      return [array.slice(0, midIdx), array.slice(midIdx)];
    }

    function merge(sortedLeft: number[], sortedRight: number[]): number[] {
      const merged: number[] = [];
      let [i, j] = [0, 0];
      while (i < sortedLeft.length && j < sortedRight.length) {
        if (sortedLeft[i] <= sortedRight[j]) {
          merged.push(sortedLeft[i]);
          i += 1;
        } else {
          merged.push(sortedRight[j]);
          j += 1;
        }
      }
      merged.push(...sortedLeft.slice(i));
      merged.push(...sortedRight.slice(j));

      return merged;
    }
  }
  {
    // O(nlog(n)) time | O(nlog(n)) space
    function mergeSort(array: number[]): number[] {
      if (array.length <= 1) return array;

      const midIdx = Math.floor(array.length / 2);
      const [left, right] = [array.slice(0, midIdx), array.slice(midIdx)];
      const sortedLeft = mergeSort(left);
      const sortedRight = mergeSort(right);
      return merge(sortedLeft, sortedRight);
    }

    function merge(sortedLeft: number[], sortedRight: number[]): number[] {
      const merged: number[] = [];
      let [i, j] = [0, 0];
      while (i < sortedLeft.length && j < sortedRight.length) {
        if (sortedLeft[i] <= sortedRight[j]) {
          merged.push(sortedLeft[i]);
          i += 1;
        } else {
          merged.push(sortedRight[j]);
          j += 1;
        }
      }
      merged.push(...sortedLeft.slice(i));
      merged.push(...sortedRight.slice(j));

      return merged;
    }
  }
}

export const __ = '__';