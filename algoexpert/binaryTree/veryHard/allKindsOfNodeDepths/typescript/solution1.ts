// O(n) time | O(h) space (n = no. of nodes in tree, h = height of tree)
export function allKindsOfNodeDepths(root: BinaryTree) {
  const sum: { value: number; } = { value: 0 };
  traverse(root, sum);
  return sum.value;
}

function traverse(node: BinaryTree, sum: { value: number; }): [number, number] {
  if (node.left === null && node.right === null) {
    return [1, 1];
  }

  let [leftDepth, leftChildCounts, rightDepth, rightChildCounts] = [0, 0, 0, 0];
  if (node.left !== null) {
    [leftDepth, leftChildCounts] = traverse(node.left, sum);
  }
  if (node.right !== null) {
    [rightDepth, rightChildCounts] = traverse(node.right, sum);
  }

  const depthSumAtCurrentNode = leftDepth + rightDepth;
  sum.value += depthSumAtCurrentNode;

  const childCountsPlusCurrentNode = leftChildCounts + rightChildCounts + 1;
  const depthToReturn = depthSumAtCurrentNode + childCountsPlusCurrentNode;
  return [depthToReturn, childCountsPlusCurrentNode];
}

// This is the class of the input binary tree.
class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
