/**
 * Sum the values of all the nodes in the tree
 */

import { BinaryTree, root } from '../../BinaryTree';

function treeMin(root: BinaryTree): number {
  const treeInfo: TreeInfo = { min: Infinity };
  findMin(root, treeInfo);
  return treeInfo.min;
}

interface TreeInfo { min: number; };

function findMin(node: BinaryTree, treeInfo: TreeInfo) {
  if (node === null) return;
  if (node.value < treeInfo.min) treeInfo.min = node.value;
  findMin(node.left, treeInfo);
  findMin(node.right, treeInfo);
}

function treeMax(root: BinaryTree): number {
  const treeInfo: TreeInfo2 = { max: -Infinity };
  findMax(root, treeInfo);
  return treeInfo.max;
}

interface TreeInfo2 { max: number; };

function findMax(node: BinaryTree, treeInfo: TreeInfo2) {
  if (node === null) return;
  if (node.value > treeInfo.max) treeInfo.max = node.value;
  findMax(node.left, treeInfo);
  findMax(node.right, treeInfo);
}

console.log('min = ', treeMin(root));
console.log('max = ', treeMax(root));