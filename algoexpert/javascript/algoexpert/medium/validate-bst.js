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

// SOLUTION 2
{
  // This is an input class. Do not edit.
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  function validateBst(tree) {
    return validate(tree);
  }

  function validate(tree, lowerBound = -Infinity, upperBound = Infinity) {
    if (!tree) {
      return true;
    }
    const validTree = tree.value >= lowerBound && tree.value < upperBound;
    if (!validTree) {
      return false;
    }

    const validateLeft = validate(tree.left, lowerBound, tree.value);
    const validateRight = validate(tree.right, tree.value, upperBound);
    return validateLeft && validateRight;
  }

  // Do not edit the line below.
  exports.BST = BST;
  exports.validateBst = validateBst;
}
