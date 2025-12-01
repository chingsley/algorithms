/**
 * Find the maximum Path Sum
 */

import { BinaryTree, root } from '../../BinaryTree';
import { root2 } from '../../testTree2';

{

  {
    function pathSums(root: BinaryTree): number[] {
      if (root === null) return [];

      if (root.left === null && root.right === null) {
        return [root.value];
      }

      const left = pathSums(root.left);
      const right = pathSums(root.right);
      return [...left, ...right].map(n => n + root.value); // <- this is max O(n) time and could make the overall time complexity become O(n^2) time
    }


    // console.log(pathSums(root)); // [ 15, 16, 18, 10, 11 ]
    // console.log(pathSums(root2)); // [ 15, 16, -42, 10, 11 ]
  }

  {
    function pathSums(root: BinaryTree) {
      const array: number[] = [];
      traverse(root, 0, array);
      return array;
    }

    function traverse(root: BinaryTree | null, currSum: number, array: number[]) {
      if (root === null) return;

      currSum += root.value;
      if (root.left === null && root.right === null) {
        array.push(currSum);
      }

      traverse(root.left, currSum, array);
      traverse(root.right, currSum, array);
    }

    // console.log(pathSums(root)); // [ 15, 16, 18, 10, 11 ]
    // console.log(pathSums(root2)); // [ 15, 16, -42, 10, 11 ]
  }

}