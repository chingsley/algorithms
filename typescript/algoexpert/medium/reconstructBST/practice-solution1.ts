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

      // export function reconstructBst(preOrderTraversalValues: number[]): BST | null {
      //   if(preOrderTraversalValues.length < 1) return null;

      //   const currValue = preOrderTraversalValues[0];
      //   let rightNodeIdx: number = preOrderTraversalValues.length;
      //   for(let i = 1; i < preOrderTraversalValues.length; i++) {
      //     if(preOrderTraversalValues[i] >= currValue) {
      //       rightNodeIdx = i;
      //       break;
      //     }
      //   }

      //   const leftSubtree: BST | null = reconstructBst(preOrderTraversalValues.slice(1, rightNodeIdx));
      //   const rightSubtree: BST | null = reconstructBst(preOrderTraversalValues.slice(rightNodeIdx));
      //   return new BST(currValue, leftSubtree, rightSubtree);
      // }
    }
  }
}
