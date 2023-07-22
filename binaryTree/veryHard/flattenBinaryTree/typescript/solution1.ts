// This is the class of the input root. Do not edit it.
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

// O(n) time | O(d) space (n = no. of nodes in tree, d = depth of tree)
export function flattenBinaryTree(root: BinaryTree) {
  const [leftMost, _] = flattenNode(root);
  return leftMost;
}

function flattenNode(node: BinaryTree): [BinaryTree, BinaryTree] {
  let leftMost, rightMost;

  if (node.left === null) {
    leftMost = node;
  } else {
    const [leftSubtreeLeftMost, leftSubtreeRightMost] = flattenNode(node.left);
    leftMost = leftSubtreeLeftMost;
    connect(leftSubtreeRightMost, node);
  }

  if (node.right === null) {
    rightMost = node;
  } else {
    const [rightSubtreeLeftMost, rightSubtreeRightMost] = flattenNode(node.right);
    rightMost = rightSubtreeRightMost;
    connect(node, rightSubtreeLeftMost);
  }

  return [leftMost, rightMost];
}

function connect(leftNode: BinaryTree, rightNode: BinaryTree) {
  leftNode.right = rightNode;
  rightNode.left = leftNode;
}
