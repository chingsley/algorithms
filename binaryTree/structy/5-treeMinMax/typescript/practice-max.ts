/**
 * Return the minimum value in the tree
 */

import { BinaryTree, root } from '../../BinaryTree';

{ // TREE MIN
  { // RECURSION
    // O(n) time | O(n) space
    // n = no. of nodes in the tree
    function treeMax(root: BinaryTree): number {
      if (root === null) return -Infinity;

      const leftMin = treeMax(root.left);
      const rightMin = treeMax(root.right);

      return Math.max(root.value, leftMin, rightMin);
    }

    console.log('max = ', treeMax(root)); // expect 10
  }
  { // DFT
    // O(n) time | O(n) space
    // n = no. of nodes in the tree
    function treeMax(root: BinaryTree): number {
      const stack: BinaryTree[] = [root];
      let max = -Infinity;

      while (stack.length > 0) {
        const currNode = stack.pop();
        if (currNode.value > max) max = currNode.value;

        if (currNode.left) stack.push(currNode.left);
        if (currNode.right) stack.push(currNode.right);
      }

      return max;
    }

    console.log('max = ', treeMax(root)); // expect 10
  }
  { // BFT
    // O(n) time | O(n) space
    // n = no. of nodes in the tree
    function treeMax(root: BinaryTree): number {
      const queue: BinaryTree[] = [root];
      let max = -Infinity;

      while (queue.length > 0) {
        const currNode = queue.shift();
        if (currNode.value > max) max = currNode.value;

        if (currNode.left) queue.push(currNode.left);
        if (currNode.right) queue.push(currNode.right);
      }

      return max;
    }

    console.log('max = ', treeMax(root)); // expect 10
  }
}
