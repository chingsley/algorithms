/**
 * Return the minimum value in the tree
 */

import { BinaryTree, root } from '../../BinaryTree';

{ // TREE MIN
  { // RECURSION
    // O(n) time | O(n) space
    // n = no. of nodes in the tree
    function treeMin(root: BinaryTree): number {
      if (root === null) return Infinity;

      const leftMin = treeMin(root.left);
      const rightMin = treeMin(root.right);

      return Math.min(root.value, leftMin, rightMin);
    }

    console.log('min = ', treeMin(root)); // expect 1
  }
  { // DFT
    // O(n) time | O(n) space
    // n = no. of nodes in the tree
    function treeMin(root: BinaryTree): number {
      const stack: BinaryTree[] = [root];
      let min = Infinity;

      while (stack.length > 0) {
        const currNode = stack.pop();
        if (currNode.value < min) min = currNode.value;

        if (currNode.left) stack.push(currNode.left);
        if (currNode.right) stack.push(currNode.right);
      }

      return min;
    }

    console.log('min = ', treeMin(root)); // expect 1
  }
  { // BFT
    // O(n) time | O(n) space
    // n = no. of nodes in the tree
    function treeMin(root: BinaryTree): number {
      const queue: BinaryTree[] = [root];
      let min = Infinity;

      while (queue.length > 0) {
        const currNode = queue.shift();
        if (currNode.value < min) min = currNode.value;

        if (currNode.left) queue.push(currNode.left);
        if (currNode.right) queue.push(currNode.right);
      }

      return min;
    }

    console.log('min = ', treeMin(root)); // expect 1
  }
}
