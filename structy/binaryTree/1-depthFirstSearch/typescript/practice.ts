import { BinaryTree, root } from '../../BinaryTree';

{
  {
    // DFS (Iteration)
    // O(n) time | O(n) space;
    // n = no. of nodes in the tree
    function depthFirstTraverse(root: BinaryTree) {
      const stack: BinaryTree[] = [root];
      const array: number[] = [];

      while (stack.length > 0) {
        const currNode = stack.pop();
        array.push(currNode.value);
        if (currNode.left) stack.push(currNode.left);
        if (currNode.right) stack.push(currNode.right);
      }

      return array;
    }

    // console.log(
    //   depthFirstTraverse(root)
    // );

  }
  {
    // DFS (Iteration)
    // O(n) time | O(n) space;
    // n = no. of nodes in the tree
    function depthFirstTraverse(root: BinaryTree): number[] {
      if (root === null) return [];

      const left = depthFirstTraverse(root.left);
      const right = depthFirstTraverse(root.right);

      return [root.value, ...left, ...right];
    }

    // console.log(
    //   depthFirstTraverse(root)
    // );
  }
  {
    // DFS (Iteration)
    // O(n) time | O(n) space;
    // n = no. of nodes in the tree
    function depthFirstTraverse(root: BinaryTree, array: number[] = []): number[] {
      if (root === null) return [];

      array.push(root.value);
      depthFirstTraverse(root.left, array);
      depthFirstTraverse(root.right, array);

      return array;
    }

    // console.log(
    //   depthFirstTraverse(root)
    // );
  }
  {
    // DFS (Iteration)
    // O(n) time | O(n) space;
    // n = no. of nodes in the tree
    function depthFirstTraverse(root: BinaryTree): number[] {
      const array: number[] = [];
      dfsHelper(root, array);
      return array;
    }

    function dfsHelper(root: BinaryTree, array: number[]): void {
      if (root === null) return;

      array.push(root.value);
      dfsHelper(root.left, array);
      dfsHelper(root.right, array);
    }

    console.log(
      depthFirstTraverse(root)
    );
  }


}

/**
 * expect:
 * [  1,  3, 7, 6, 2, 5, 10, 4, 9, 8 ]
 * or
 * [ 1,  2, 4, 8, 9, 5, 10, 3, 6, 7 ]
 */
