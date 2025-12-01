// This is an input class. Do not edit.
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

// O(n) time, O(d) space
// where d = depth of the treee
export function validateBst(tree: BST) {
  // Write your code here.
  return validate(tree, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}

function validate(
  tree: BST | null,
  lowerBound: number,
  upperBound: number
): boolean {
  if (!tree) return true;

  const validNode = tree.value >= lowerBound && tree.value < upperBound;
  if (!validNode) return false;

  const validateLeft = validate(tree.left, lowerBound, tree.value);
  const validateRight = validate(tree.right, tree.value, upperBound);
  return validateLeft && validateRight;
}
