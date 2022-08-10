{
  {
    // O(n^2) time | O(n) space
    function threeNumberSum(array: number[], targetSum: number): Triplet[] {
      array.sort((a, b) => a - b);
      const res: Triplet[] = [];
      for (let i = 0; i < array.length - 2; i++) {
        if (array[i] >= targetSum) return res; // OPTIMIZATION --------------

        let j = i + 1;
        let k = array.length - 1;
        while (j < k) {
          const sum = array[i] + array[j] + array[k];
          if (sum < targetSum) {
            j += 1;
          } else if (sum > targetSum) {
            k -= 1;
          } else {
            res.push([array[i], array[j], array[k]]);
            j += 1;
            k -= 1;
          }
        }
      }

      return res;
    }

    type Triplet = [number, number, number];


  }
}

export const ___ = '___';