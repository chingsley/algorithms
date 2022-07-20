/**
 * Return the minimum value in the tree
 */

import { BinaryTree, root } from '../../BinaryTree';

function treeMin(root: BinaryTree): number {
  if (root === null) return Infinity;

  const leftMin = treeMin(root.left);
  const rightMin = treeMin(root.right);
  return Math.min(root.value, leftMin, rightMin);
}

function treeMax(root: BinaryTree): number {
  if (root === null) return -Infinity;

  const leftMax = treeMax(root.left);
  const rightMax = treeMax(root.right);
  return Math.max(root.value, leftMax, rightMax);
}

console.log('min = ', treeMin(root));
console.log('max = ', treeMax(root));
