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

// O(n) time. | O(d) space
// where n = no. of nodes,  d = depth of the tree
// but depth of a tree d = log(n)
// therefore space complexity = O(logn)
export function invertBinaryTree(tree: BinaryTree | null) {
  invertTree(tree);
  return tree;
}


function invertTree(node: BinaryTree | null) {
  if (!node) {
    return;
  }
  const temp: BinaryTree | null = node.right;
  node.right = node.left;
  node.left = temp;
  invertTree(node.left);
  invertTree(node.right);
}