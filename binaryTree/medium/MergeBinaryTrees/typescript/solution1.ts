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

export function mergeBinaryTrees(tree1: BinaryTree, tree2: BinaryTree) {
  const merged = new BinaryTree(tree1.value + tree2.value);
  merge(tree1.left, tree2.left, merged, true);
  merge(tree1.right, tree2.right, merged, false);
  return merged;
}

function merge(node1: BinaryTree | null, node2: BinaryTree | null, currNode: BinaryTree, isLeft: boolean) {
  if (node1 === null && node2 === null) return;

  let [
    node1LeftChild,
    node1RightChild,
    val1
  ] = node1 != null ? [node1.left, node1.right, node1.value] : [null, null, 0];
  const [
    node2LeftChild,
    node2RightChild,
    val2
  ] = node2 != null ? [node2.left, node2.right, node2.value] : [null, null, 0];

  if (isLeft) {
    currNode.left = new BinaryTree(val1 + val2);
    currNode = currNode.left;
  } else {
    currNode.right = new BinaryTree(val1 + val2);
    currNode = currNode.right;
  }

  merge(node1LeftChild, node2LeftChild, currNode, true);
  merge(node1RightChild, node2RightChild, currNode, false);
}
