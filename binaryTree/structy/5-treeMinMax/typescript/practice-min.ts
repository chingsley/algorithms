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

    // console.log('min = ', treeMin(root)); // expect 1
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

    // console.log('min = ', treeMin(root)); // expect 1
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

    // console.log('min = ', treeMin(root)); // expect 1
  }
  {// Iteration 
    // O(n) time | O(1) space (the stack has maximum length of 2 (pushing left and right noeds, each beaing an instance of a tree node with value and a pointer))
    function treeMin(root: BinaryTree): number {
      const stack = [root];
      let min = Infinity;

      while (stack.length > 0) {
        const current = stack.pop()!;
        if (current.value < min) min = current.value;

        if (current.left) stack.push(current.left);
        if (current.right) stack.push(current.right);
      }

      return min;
    }

    // console.log('min = ', treeMin(root)); // expect 1
  }
  {// Recursion
    // O(n) time | O(d) space
    function treeMin(root: BinaryTree): number {
      if (root === null) return Infinity;

      return Math.min(
        root.value,
        treeMin(root.left),
        treeMin(root.right)
      );
    }
    console.log('min = ', treeMin(root)); // expect 1
  }
}
