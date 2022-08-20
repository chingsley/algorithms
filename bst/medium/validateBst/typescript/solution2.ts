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

export function validateBst(tree: BST) {
  return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(tree: BST | null, lowerBound: number, upperBound: number): boolean {
  if (tree === null) return true;
  if (!(tree.value >= lowerBound && tree.value < upperBound)) return false;
  const isValidLeft = validateBstHelper(tree.left, lowerBound, tree.value);
  const isValidRight = validateBstHelper(tree.right, tree.value, upperBound);
  return isValidLeft && isValidRight;
}