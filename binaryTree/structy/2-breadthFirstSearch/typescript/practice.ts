import { BinaryTree, root } from '../../BinaryTree';


{
  {
    // BFS (Iteration)
    // O(n) time | O(n) space;
    // n = no. of nodes in the tree
    function breadthFirstTraverse(root: BinaryTree) {
      const queue: BinaryTree[] = [root];
      const array: number[] = [];

      while (queue.length > 0) {
        const currentNode = queue.shift();
        array.push(currentNode.value);
        if (currentNode.right) queue.push(currentNode.right);
        if (currentNode.left) queue.push(currentNode.left);
      }
      return array;
    }
  }
  {// BFS
    // O(n) tiem | O(n) space
    function breadthFirstTraverse(root: BinaryTree) {
      const queue = [root];
      const array: number[] = [];

      while (queue.length > 0) {
        const current = queue.shift();
        array.push(current.value);

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
      }

      return array;
    }
    console.log(
      breadthFirstTraverse(root)
    );

  }
}

/**
 * expect:
 * [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
 * or
 * [ 1, 3,  2, 7, 6, 5, 4, 10, 9, 8 ]
 * 
 */

