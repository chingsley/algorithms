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
export function symmetricalTree(tree: BinaryTree) {
  return isMirror(tree.left, tree.right);
}

function isMirror(left: BinaryTree | null, right: BinaryTree | null): boolean {
  if (left === null && right === null) return true;
  if (left === null && right !== null) return false;
  if (left !== null && right === null) return false;
  if (left!.value !== right!.value) return false;

  return isMirror(left!.left, right!.right) && isMirror(left!.right, right!.left);
}
