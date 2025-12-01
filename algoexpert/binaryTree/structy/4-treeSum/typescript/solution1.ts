/**
 * Sum the values of all the nodes in the tree
 */

import { BinaryTree, root } from '../../BinaryTree';

function treeSum(root: BinaryTree) {
  if (root === null) return 0;

  const leftSum = treeSum(root.left);
  const rightSum = treeSum(root.right);
  return root.value + leftSum + rightSum;
}


console.log(treeSum(root));