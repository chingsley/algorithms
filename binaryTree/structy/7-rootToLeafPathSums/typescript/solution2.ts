/**
 * Sum the values of all the nodes in the tree
 */

import { BinaryTree, root } from '../../BinaryTree';
import { root2 } from '../../testTree2';

{
  { // ITERATION (DFT)
    function pathSum(root: BinaryTree): number[] {
      const array: number[] = [];
      const stack: [[BinaryTree, number]] = [[root, root.value]];

      while (stack.length > 0) {
        const [currentNode, currentPathSum] = stack.pop();

        if (currentNode.left) stack.push([currentNode.left, currentPathSum + currentNode.left.value]);
        if (currentNode.right) stack.push([currentNode.right, currentPathSum + currentNode.right.value]);

        if (currentNode.left === null && currentNode.right === null) {// leaf node
          array.push(currentPathSum);
        }
      }

      return array;
    }

    console.log(pathSum(root)); // expect [ 11, 10, 18, 16, 15 ]
    console.log(pathSum(root2)); // expect [ 11, 10, -42, 16, 15 ]
  }
  { // ITERATION (BFT)
    function pathSum(root: BinaryTree): number[] {
      const array: number[] = [];
      const queue: [[BinaryTree, number]] = [[root, root.value]];

      while (queue.length > 0) {
        const [currentNode, currentPathSum] = queue.shift();

        if (currentNode.left) queue.push([currentNode.left, currentPathSum + currentNode.left.value]);
        if (currentNode.right) queue.push([currentNode.right, currentPathSum + currentNode.right.value]);

        if (currentNode.left === null && currentNode.right === null) {// leaf node
          array.push(currentPathSum);
        }
      }

      return array;
    }

    console.log(pathSum(root)); // expect [ 10, 11, 15, 16, 18 ]
    console.log(pathSum(root2)); // expect [ 10, 11, 15, 16, -42 ]
  }
}
