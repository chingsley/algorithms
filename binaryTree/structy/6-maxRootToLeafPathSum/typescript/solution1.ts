/**
 * Find the maximum Path Sum
 */

import { BinaryTree, root } from '../../BinaryTree';

function maxPathSum(root: BinaryTree): number {
  return getMaxPathSum(root, 0);
}

function getMaxPathSum(node: BinaryTree, currentPathSum: number): number {
  if (node === null) return -Infinity;

  currentPathSum += node.value; // ** Very important to remember!
  if (node.left === null && node.right === null) {
    return currentPathSum;
  }

  const leftPathSum = getMaxPathSum(node.left, currentPathSum);
  const rightPathSum = getMaxPathSum(node.right, currentPathSum);
  return Math.max(leftPathSum, rightPathSum);
}


console.log(maxPathSum(root));