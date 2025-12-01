// This is an input class. Do not edit.
export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n) time | O(h) space (n = no. of nodes in tree, h = height of tree)
export function splitBinaryTree(tree: BinaryTree) {
  const treeSum = sumTree(tree);
  if (treeSum % 2 !== 0) return 0;

  const halfSum = treeSum / 2;
  const halfSumInTree = getHalfSumInTree(tree, halfSum);
  if (halfSumInTree === halfSum) return halfSum;

  return 0;
}

function sumTree(node: BinaryTree | null): number {
  if (node === null) return 0;
  return node.value + sumTree(node.left) + sumTree(node.right);
}

function getHalfSumInTree(node: BinaryTree | null, halfSum: number): number {
  if (node === null) return 0;

  const leftSum = getHalfSumInTree(node.left, halfSum);
  if (leftSum === halfSum) return leftSum;

  const rightSum = getHalfSumInTree(node.right, halfSum);
  if (rightSum === halfSum) return rightSum;

  return node.value + leftSum + rightSum;

}