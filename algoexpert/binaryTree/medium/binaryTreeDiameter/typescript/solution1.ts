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

class TreeInfo {
  maxDiameter: number;

  constructor() {
    this.maxDiameter = 0;
  }
}

// O(n) time | O(d) space
// n = no. of nodes
// d = depth of the tree
export function binaryTreeDiameter(tree: BinaryTree) {
  const treeInfo: TreeInfo = new TreeInfo();
  calculateDepth(tree, treeInfo);
  return treeInfo.maxDiameter;
}

function calculateDepth(node: BinaryTree | null, treeInfo: TreeInfo): number {
  if (!node) return 0;

  const leftDepth: number = calculateDepth(node.left, treeInfo);
  const rightDepth: number = calculateDepth(node.right, treeInfo);
  const nodeDiameter = leftDepth + rightDepth;
  if (nodeDiameter > treeInfo.maxDiameter) {
    treeInfo.maxDiameter = nodeDiameter;
  }
  return Math.max(leftDepth, rightDepth) + 1;
}

