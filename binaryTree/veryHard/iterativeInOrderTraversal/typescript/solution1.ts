class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
  parent: BinaryTree | null;

  constructor(value: number, parent: BinaryTree | null = null) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = parent;
  }
}

// O(n) time | O(1) space (n = no. of nodes in tree)
export function iterativeInOrderTraversal(tree: BinaryTree, callback: (node: BinaryTree) => void) {
  let current: BinaryTree | null = tree;
  let previous: BinaryTree | null = null;
  const arr: number[] = [];

  while (current !== null) {
    if (
      (current.left === null && current.right === null) ||
      ((current.left === null || current.left === previous) && current.right !== previous)
    ) {
      callback(current);
    }

    if (current.parent === previous && current.left !== null) {
      previous = current;
      current = current.left;
    } else if (current.left === previous && current.right !== null) {
      previous = current;
      current = current.right;
    } else if (current.left == null && current.right !== null && current.right !== previous) {
      previous = current;
      current = current.right;
    }
    else {
      previous = current;
      current = current.parent;
    }
  }

}
