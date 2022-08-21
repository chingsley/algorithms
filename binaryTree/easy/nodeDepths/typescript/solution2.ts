export function nodeDepths(root: BinaryTree) {
  const treeInfo: TreeInfo = { depthSum: 0 };
  sumDepths(root, 0, treeInfo);
  return treeInfo.depthSum;
}

function sumDepths(tree: BinaryTree | null, currNodeDepth: number, treeInfo: TreeInfo) {
  if (tree === null) return;

  treeInfo.depthSum += currNodeDepth;
  sumDepths(tree.left, currNodeDepth + 1, treeInfo);
  sumDepths(tree.right, currNodeDepth + 1, treeInfo);
}

interface TreeInfo { depthSum: number; };

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
