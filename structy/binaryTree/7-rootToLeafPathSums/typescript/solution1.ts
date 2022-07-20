/**
 * Find the maximum Path Sum
 */

import { BinaryTree, root } from '../../BinaryTree';
import { root2 } from '../../testTree2';

{
  {// RECURION (bottom-up approach)
    function pathSums(root: BinaryTree): number[] {
      if (root === null) return [];

      if (root.left === null && root.right === null) {
        return [root.value];
      }

      const left = pathSums(root.left);
      const right = pathSums(root.right);
      const array = [...left, ...right];
      for (let i = 0; i < array.length; i++) {
        array[i] += root.value;
      }
      return array;
    }


    // console.log(pathSums(root)); // [ 15, 16, 18, 10, 11 ]
    // console.log(pathSums(root2)); // [ 15, 16, -42, 10, 11 ]
  }
  {// RECURION (top-down approach)
    function pathSums(root: BinaryTree, currentPathSum: number = 0, array: number[] = []): number[] {
      if (root === null) return [];

      if (root.left === null && root.right === null) {
        array.push(currentPathSum + root.value);
      }

      pathSums(root.left, currentPathSum + root.value, array);
      pathSums(root.right, currentPathSum + root.value, array);

      return array;
    }


    // console.log(pathSums(root)); // [ 15, 16, 18, 10, 11 ]
    // console.log(pathSums(root2)); // [ 15, 16, -42, 10, 11 ]
  }
  {// RECURION (top-down approach II)
    function pathSums(root: BinaryTree): number[] {
      const array: number[] = [];
      pathSumHelper(root, 0, array);
      return array;
    }

    function pathSumHelper(root: BinaryTree, currentPathSum: number = 0, array: number[] = []): void {
      if (root === null) return;

      if (root.left === null && root.right === null) {
        array.push(currentPathSum + root.value);
      }

      pathSumHelper(root.left, currentPathSum + root.value, array);
      pathSumHelper(root.right, currentPathSum + root.value, array);
    }


    console.log(pathSums(root)); // [ 15, 16, 18, 10, 11 ]
    console.log(pathSums(root2)); // [ 15, 16, -42, 10, 11 ]
  }
}
