import { BinaryTree, root } from '../../BinaryTree';

function maxPathSum(root: BinaryTree): number {
  if (root === null) return -Infinity;

  if (root.left === null && root.right === null) {
    return root.value;
  }

  const leftPathSum = maxPathSum(root.left);
  const rightPathSum = maxPathSum(root.right);
  return root.value + Math.max(leftPathSum, rightPathSum);
}

console.log(maxPathSum(root));