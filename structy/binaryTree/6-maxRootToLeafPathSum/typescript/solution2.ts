/**
 * Sum the values of all the nodes in the tree
 */

import { BinaryTree, root } from '../../BinaryTree';

function maxPathSum(root: BinaryTree): number {
  const treeInfo: TreeInfo = { maxPath: -Infinity };
  sumPath(root, 0, treeInfo);
  return treeInfo.maxPath;
}

interface TreeInfo { maxPath: number; };

function sumPath(node: BinaryTree, currentPathSum: number, treeInfo: TreeInfo) {
  if (node === null) return;

  currentPathSum += node.value;
  if (node.left === null && node.right === null) {
    if (currentPathSum > treeInfo.maxPath) {
      treeInfo.maxPath = currentPathSum;
    }
    return;
  }

  sumPath(node.left, currentPathSum, treeInfo);
  sumPath(node.right, currentPathSum, treeInfo);
}


console.log(maxPathSum(root));