// O(n) time, O(d) space
function validateBst(tree) {
  return validateBstHelper(
    tree,
    Number.NEGATIVE_INFINITY,
    Number.POSITIVE_INFINITY
  );
}

function validateBstHelper(tree, minValue, maxValue) {
  if (!tree) {
    return true;
  }
  if (tree.value < minValue || tree.value >= maxValue) {
    return false;
  }
  leftIsValid = validateBstHelper(tree.left, minValue, tree.value);
  return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue);
}
