/**
 * Sum the values of all the nodes in the tree
 */

import { BinaryTree, root } from '../../BinaryTree';

{
  {// RECURSION

    function treeSum(root: BinaryTree) {
      if (root === null) return 0;
      return root.value + treeSum(root.left) + treeSum(root.right);
    }

    // console.log(treeSum(root));;
  }
  { // DFT

    function treeSum(root: BinaryTree) {
      const stack: BinaryTree[] = [root];
      let sum = 0;

      while (stack.length > 0) {
        const currNode = stack.pop();
        sum += currNode.value;
        if (currNode.left) stack.push(currNode.left);
        if (currNode.right) stack.push(currNode.right);
      }

      return sum;
    }

    // console.log(treeSum(root));
  }
  { // BST

    function treeSum(root: BinaryTree) {
      const queue: BinaryTree[] = [root];
      let sum = 0;

      while (queue.length > 0) {
        const currNode = queue.shift();
        sum += currNode.value;
        if (currNode.left) queue.push(currNode.left);
        if (currNode.right) queue.push(currNode.right);
      }

      return sum;
    }

    console.log(treeSum(root));
  }
}

// expect 55