
class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n) time | O(k) space;
// n = no. of nodes in the tree
export function findKthLargestValueInBst(tree: BST | null, k: number) {
  const array: number[] = [];
  traverseDescending(tree, array, k);
  return array[k - 1];
}

function traverseDescending(tree: BST | null, array: number[], k: number) {
  if (tree === null) return;

  traverseDescending(tree.right, array, k);
  array.push(tree.value);
  if (array.length >= k) return; //----- OPTIMIZATION:
  traverseDescending(tree.left, array, k);
}
