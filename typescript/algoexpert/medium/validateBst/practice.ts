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
    // export function validateBst(tree: BST) {
    //   return validateNode(tree, -Infinity, Infinity);
    // }

    // function validateNode(node: BST | null, lowerBound: number, upperBound: number): boolean {
    //   if(node === null) return true;

    //   if(node.value < lowerBound || node.value >= upperBound) return false;

    //   const isValidLeftSubtree = validateNode(node.left, lowerBound, node.value);
    //   const isValidRightSubtree = validateNode(node.right, node.value, upperBound);
    //   return isValidLeftSubtree && isValidRightSubtree;
    // }
  }
}