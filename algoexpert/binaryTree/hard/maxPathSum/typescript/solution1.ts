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

// O(n) time (every node is visited once)
// O(d) space (due to the recursive call stacks)
export function maxPathSum(tree: BinaryTree) {
  const treeInfo: TreeInfo = { runningMax: -Infinity };
  findMaxPathSum(tree, treeInfo);
  return treeInfo.runningMax;
}

function findMaxPathSum(tree: BinaryTree | null, treeInfo: TreeInfo): number {
  if (tree === null) return -Infinity;

  if (tree.left === null && tree.right === null) {
    if (tree.value > treeInfo.runningMax) treeInfo.runningMax = tree.value;
    return tree.value;
  };

  const leftPathSum = findMaxPathSum(tree.left, treeInfo);
  const rightPathSum = findMaxPathSum(tree.right, treeInfo);

  let maxAtNode = tree.value;
  maxAtNode = Math.max(maxAtNode, maxAtNode + leftPathSum);
  maxAtNode = Math.max(maxAtNode, maxAtNode + rightPathSum);
  if (maxAtNode > treeInfo.runningMax) treeInfo.runningMax = maxAtNode;

  let returnVal = tree.value;
  returnVal = Math.max(returnVal, returnVal + Math.max(leftPathSum, rightPathSum));
  return returnVal;
}

interface TreeInfo { runningMax: number; };

const root = new BinaryTree(1);
root.left = new BinaryTree(-5);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(6);


/**
 *              1
 *            /    \
 *          -5      3
 *         /
 *       6
 */