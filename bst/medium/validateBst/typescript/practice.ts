export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


{
  {
    // O(n) time | O(d) space;
    // n = no. of nodes in the tree | d = depth or height of the tree
    function validateBst(tree: BST) {
      return validateNode(tree, -Infinity, Infinity);
    }

    function validateNode(node: BST | null, lowerBound: number, upperBound: number): boolean {
      if (node === null) return true;

      if (node.value < lowerBound || node.value >= upperBound) return false;

      const isValidLeftSubtree = validateNode(node.left, lowerBound, node.value);
      const isValidRightSubtree = validateNode(node.right, node.value, upperBound);
      return isValidLeftSubtree && isValidRightSubtree;
    }
  }
  {
    // O(n) time | O(d) space;
    // n = no. of nodes in the tree | d = depth or height of the tree
    function validateBst(tree: BST) {
      return validate(tree, -Infinity, Infinity);
    }

    function validate(tree: BST | null, lowerBound: number, upperBound: number): boolean {
      if (tree === null) return true;

      // is valid if: lowerBound <= tree.value < upperBound
      if (lowerBound > tree.value || tree.value >= upperBound) return false;
      const isValidLeft = validate(tree.left, lowerBound, tree.value);
      const isValidRight = validate(tree.right, tree.value, upperBound);
      return isValidLeft && isValidRight;
    }
  }
  {
    function validateBst(tree: BST) {
      return validate(tree, -Infinity, Infinity);
    }

    function validate(tree: BST | null, lowerBound: number, upperBound: number): boolean {
      if (tree === null) return true;

      if (tree.value < lowerBound || tree.value >= upperBound) return false;

      const isValidLeft = validate(tree.left, lowerBound, tree.value);
      const isValidRight = validate(tree.right, tree.value, upperBound);
      return isValidLeft && isValidRight;
    }
  }
  {
    // O(n) time | O(h) space
    // n = no. of nodes | h = height of the tree
    function validateBst(tree: BST) {
      return validateNode(tree, [-Infinity, Infinity]);
    }


    function validateNode(node: BST | null, [lowerBound, upperBound]: number[]): boolean {
      if (node === null) return true;

      if (node.value >= upperBound || node.value < lowerBound) return false;

      const isValidLeft = validateNode(node.left, [lowerBound, node.value]);
      const isValidRight = validateNode(node.right, [node.value, upperBound]);
      return isValidLeft && isValidRight;
    }

  }
}