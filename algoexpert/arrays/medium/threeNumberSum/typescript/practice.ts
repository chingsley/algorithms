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
  {
    function threeNumberSum(array: number[], targetSum: number): Triplet[] {
      array.sort((a, b) => a - b);

      const result: Triplet[] = [];
      for (let i = 0; i < array.length - 2; i++) {
        // OPTIMIZATION --------------
        if (array[i] >= targetSum) break;

        let left = i + 1;
        let right = array.length - 1;
        while (left < right) {
          const sum: number = array[i] + array[left] + array[right];
          if (sum === targetSum) {
            result.push([array[i], array[left], array[right]]);
            left += 1;
            right -= 1;
          } else if (sum < targetSum) {
            left += 1;
          } else {
            right -= 1;
          }
        }
      }

      return result;
    }
    type Triplet = [number, number, number];
  }
  {
    type Triplet = [number, number, number];

    // O(n^2) time | O(n) space
    function threeNumberSum(array: number[], targetSum: number): Triplet[] {
      array.sort((a, b) => a - b);
      const result: Triplet[] = [];
      for (let c = 0; c < array.length - 2; c++) {
        let [l, r] = [c + 1, array.length - 1];
        while (l < r) {
          const currentSum = array[c] + array[l] + array[r];
          if (currentSum < targetSum) {
            l += 1;
          } else if (currentSum > targetSum) {
            r -= 1;
          } else {
            result.push([array[c], array[l], array[r]]);
            [l, r] = [l += 1, r -= 1];
          }
        }
      }

      return result;
    }

  }
}

export const ___ = '___';