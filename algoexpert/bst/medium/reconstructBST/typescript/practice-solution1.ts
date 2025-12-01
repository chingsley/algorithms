import { BST } from './solution1';
// PRACTICES
{
  {
    // O(n^2) time (the for loop with each recursive call makes it tend towards n^2)
    // O(n) space (we build a tree with n nodes)
    function reconstructBst(preOrderTraversalValues: number[]): BST | null {
      if (preOrderTraversalValues.length < 1) return null;

      const rootValue = preOrderTraversalValues[0];
      let rightIdx = preOrderTraversalValues.length;
      for (let i = 1; i < preOrderTraversalValues.length; i++) {
        if (preOrderTraversalValues[i] >= rootValue) {
          rightIdx = i;
          break;
        }
      }
      const left = reconstructBst(preOrderTraversalValues.slice(1, rightIdx));
      const right = reconstructBst(preOrderTraversalValues.slice(rightIdx));
      return new BST(rootValue, left, right);
    }
  }
  {
    function reconstructBst(preOrderTraversalValues: number[]): BST | null {
      return buildFromList(preOrderTraversalValues);
    }

    function buildFromList(array: number[]): BST | null {
      if (array.length === 0) return null;

      const value = array[0];
      let j = 1;
      while (j < array.length) {
        if (array[j] >= value) break;
        j += 1;
      }
      const left = buildFromList(array.slice(1, j));
      const right = buildFromList(array.slice(j));
      return new BST(value, left, right);
    }
  }
  {
    function reconstructBst(preOrderTraversalValues: number[]): BST | null {
      return reconstructFromList(preOrderTraversalValues);
    }

    function reconstructFromList(array: number[]): BST | null {
      if (array.length < 1) return null;

      const val = array[0];
      let endIdx = array.length;
      for (let i = 1; i < array.length; i++) {
        if (array[i] >= val) {
          endIdx = i;
          break;
        }
      }


      const left = reconstructFromList(array.slice(1, endIdx));
      const right = reconstructFromList(array.slice(endIdx));
      return new BST(val, left, right);
    }

    {

      function reconstructBst(preOrderTraversalValues: number[]): BST | null {
        if (preOrderTraversalValues.length < 1) return null;

        const currValue = preOrderTraversalValues[0];
        let rightNodeIdx: number = preOrderTraversalValues.length;
        for (let i = 1; i < preOrderTraversalValues.length; i++) {
          if (preOrderTraversalValues[i] >= currValue) {
            rightNodeIdx = i;
            break;
          }
        }

        const leftSubtree: BST | null = reconstructBst(preOrderTraversalValues.slice(1, rightNodeIdx));
        const rightSubtree: BST | null = reconstructBst(preOrderTraversalValues.slice(rightNodeIdx));
        return new BST(currValue, leftSubtree, rightSubtree);
      }
    }
    {
      class BST {
        value: number;
        left: BST | null;
        right: BST | null;
        constructor(value: number, left: BST | null, right: BST | null) {
          this.value = value;
          this.left = left;
          this.right = right;
        }
      }

      // O(n^2) time | O(n) space
      function reconstructBst(preOrderTraversalValues: number[]): BST | null {
        return reconstruct(preOrderTraversalValues);
      }

      function reconstruct(array: number[]): BST | null {
        if (array.length === 0) return null;

        let rightIdx = array.length;
        for (let i = 1; i < array.length; i++) {
          if (array[i] >= array[0]) {
            rightIdx = i;
            break;
          }
        }
        const left = reconstruct(array.slice(1, rightIdx));
        const right = reconstruct(array.slice(rightIdx));
        return new BST(array[0], left, right);
      }
    }
  }
  {
    class BST {
      value: number;
      left: BST | null;
      right: BST | null;
      constructor(value: number, left: BST | null, right: BST | null) {
        this.value = value;
        this.left = left;
        this.right = right;
      }
    }

    // O(n^2) time | O(n) space
    function reconstructBst(preOrderTraversalValues: number[]): BST | null {
      return reconstructFromRange([0, preOrderTraversalValues.length - 1], preOrderTraversalValues);
    }

    function reconstructFromRange([startIdx, endIdx]: number[], array: number[]): BST | null {
      if (startIdx > endIdx) return null;

      let rightStartIdx = endIdx + 1;
      for (let i = startIdx + 1; i <= endIdx; i++) {
        if (array[i] >= array[startIdx]) {
          rightStartIdx = i;
          break;
        };
      }

      const left = reconstructFromRange([startIdx + 1, rightStartIdx - 1], array);
      const right = reconstructFromRange([rightStartIdx, endIdx], array);
      return new BST(array[startIdx], left, right);
    }
  }
  {
    // O(n^2) time | O(n) space
    function reconstructBst(preOrderTraversalValues: number[]): BST | null {
      return reconstruct(preOrderTraversalValues, 0, preOrderTraversalValues.length - 1);
    }

    function reconstruct(arr: number[], startIdx: number, endIdx: number): BST | null {
      if (startIdx > endIdx) return null;

      let br = endIdx + 1;
      for (let i = startIdx + 1; i <= endIdx; i++) {
        if (arr[i] >= arr[startIdx]) {
          br = i;
          break;
        }
      }

      const left = reconstruct(arr, startIdx + 1, br - 1);
      const right = reconstruct(arr, br, endIdx);
      return new BST(arr[startIdx], left, right);;
    }
  }
}

