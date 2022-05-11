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

/**
 *
 * SOLTION 2: USING ITERATION
 */
// Average Case: O(log(n)) time | O(1) space
// Worst Case: O(n) time | O(1) space
export function findClosestValueInBst2(tree: BST, target: number) {
  return findClosestValueInBstHelper2(tree, target, Infinity);
}

function findClosestValueInBstHelper2(
  tree: BST | null,
  target: number,
  closest: number
): number {
  let currentNode = tree;
  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }

  return closest;
}