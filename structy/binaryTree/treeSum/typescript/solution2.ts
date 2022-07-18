/**
 * Sum the values of all the nodes in the tree
 */

import { BinaryTree, root } from '../../BinaryTree';

function treeSum(root: BinaryTree): number {
  const treeInfo: TreeInfo = { sum: 0 };
  sumNodes(root, treeInfo);
  return treeInfo.sum;
}

interface TreeInfo { sum: number; };

function sumNodes(node: BinaryTree, treeInfo: TreeInfo) {
  if (node === null) return;
  treeInfo.sum += node.value;
  sumNodes(node.left, treeInfo);
  sumNodes(node.right, treeInfo);
}

console.log(treeSum(root));