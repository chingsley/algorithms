import { BST } from './solution1';

{
  {

    // Average Case: O(log(n)) time | O(log(n)) space
    // Worst Case: O(n) time | O(n) space
    function findClosestValueInBst(tree: BST, target: number): number {
      return findClosest(tree, target);
    }

    function findClosest(tree: BST | null, target: number): number {
      if (tree === null) return Infinity;

      if (tree.left === null && tree.right === null) {
        return tree.value;
      }

      let closest = Infinity;
      if (target < tree.value) {
        closest = findClosest(tree.left, target);
      } else {
        closest = findClosest(tree.right, target);
      }

      if (Math.abs(tree.value - target) < Math.abs(closest - target)) {
        return tree.value;
      } else {
        return closest;
      }
    }
  }
  {
    function findClosestValueInBst(tree: BST, target: number): number {
      return findClosestValueInBstHelper(tree, target, Infinity);
    }

    // O(n) time (worst case)
    // O(nlog(n)) time (average case)
    // O(n) space  (due to recursion)
    function findClosestValueInBstHelper(tree: BST | null, target: number, closest: number): number {
      if (tree === null) return closest;
      if (target === tree.value) return tree.value;

      if (Math.abs(tree.value - target) < Math.abs(closest - target)) {
        closest = tree.value;
      }

      if (target < tree.value) {
        return findClosestValueInBstHelper(tree.left, target, closest);
      } else {
        return findClosestValueInBstHelper(tree.right, target, closest);
      }
    }
  }
  {
    // O(n) time (worst case)
    // O(nlog(n)) time (average case)
    // O(1) space
    function findClosestValueInBst(tree: BST, target: number): number {
      let currentNode: BST | null = tree;
      let closest: number = Infinity;
      while (currentNode !== null) {
        if (Math.abs(currentNode.value - target) < Math.abs(closest - target)) {
          closest = currentNode.value;
        }

        if (currentNode.value === target) {
          return currentNode.value;
        } else if (target < currentNode.value) {
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
      }

      return closest;
    }
  }
  {

    function findClosestValueInBst(tree: BST | null, target: number, closest: number = Infinity): number {
      if (tree === null) return closest;
      if (tree.value === target) return tree.value;

      if (Math.abs(tree.value - target) < Math.abs(closest - target)) {
        closest = tree.value;
      }

      if (target < tree.value) {
        return findClosestValueInBst(tree.left, target, closest);
      } else {
        return findClosestValueInBst(tree.right, target, closest);
      }
    }
  }
  {// ITERATION
    // O(log(n)) time | O(1) space
    function findClosestValueInBst(tree: BST, target: number) {
      let currentNode: BST | null = tree;
      let closest = Infinity;

      while (currentNode !== null) {
        if (Math.abs(currentNode.value - target) < Math.abs(closest - target)) {
          closest = currentNode.value;
        }
        if (currentNode.value === target) {
          return closest;
        } else if (target < currentNode.value) {
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
      }

      return closest;
    }
  }
  {// RECURSION
    // O(log(n)) time | O(d) space
    function findClosestValueInBst(tree: BST, target: number) {
      return findClosest(tree, target, Infinity);
    }

    function findClosest(tree: BST | null, target: number, closest: number): number {
      if (tree === null) return closest;
      if (tree.value === target) return tree.value;

      closest = Math.abs(tree.value - target) < Math.abs(closest - target) ? tree.value : closest;

      if (target < tree.value) {
        return findClosest(tree.left, target, closest);
      } else {
        return findClosest(tree.right, target, closest);
      }
    }
  }
  {
    // Avg. case: O(log(n)) time | O(1) space
    // Worst case: O(n) time | O(1) space
    function findClosestValueInBst(tree: BST, target: number): number {
      let node: BST | null = tree;
      let closest = Infinity;
      while (node !== null) {
        if (node.value === target) {
          return node.value;
        }
        closest = Math.abs(node.value - target) < Math.abs(closest - target) ? node.value : closest;
        if (target < node.value) {
          node = node.left;
        } else {
          node = node.right;
        }
      }

      return closest;
    }
  }
  {
    /**
 *
 *USING ITERATION
 */
    // Average Case: O(log(n)) time | O(1) space
    // Worst Case: O(n) time | O(1) space
    function findClosestValueInBst(tree: BST, target: number): number {
      let closest = tree.value;
      let node: BST | null = tree;
      while (node !== null) {
        if (Math.abs(node.value - target) < Math.abs(closest - target)) {
          closest = node.value;
        }

        if (target < node.value) {
          node = node.left;
        } else if (target > node.value) {
          node = node.right;
        } else {
          return node.value;
        }
      }

      return closest;
    }

  }
}
