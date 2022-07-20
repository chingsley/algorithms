import { BinaryTree, root } from '../../BinaryTree';

{
  {// ITERATION (BFS)

    /**
     * Question: Return True if tree inclues value, else return false
     * 
     * Time: O(n) (n = no. of nodes in the tree)
     * Space: (n)
     * @param root BinaryTree
     * @param value number
     * @returns bolean
     */
    function treeIncludes(root: BinaryTree, value: number) {
      const queue: BinaryTree[] = [root];

      while (queue.length > 0) {
        const currNode = queue.shift();
        if (currNode.value === value) return true;
        if (currNode.left) queue.push(currNode.left);
        if (currNode.right) queue.push(currNode.right);
      }

      return false;
    }


    // console.log(treeIncludes(root, 10)); // expect true
    // console.log(treeIncludes(root, 123)); // expect false
  }
  {// ITERATION (DFS)

    /**
     * Question: Return True if tree inclues value, else return false
     * 
     * Time: O(n) (n = no. of nodes in the tree)
     * * Space: (n)
     * @param root BinaryTree
     * @param value number
     * @returns bolean
     */
    function treeIncludes(root: BinaryTree, value: number) {
      const stack: BinaryTree[] = [root];

      while (stack.length > 0) {
        const currNode = stack.pop();
        if (currNode.value === value) return true;
        if (currNode.left) stack.push(currNode.left);
        if (currNode.right) stack.push(currNode.right);
      }

      return false;
    }


    console.log(treeIncludes(root, 10)); // expect true
    console.log(treeIncludes(root, 123)); // expect false
  }
  {

    /**
     * Question: Return True if tree inclues value, else return false
     * 
     * Time: O(n) (n = no. of nodes in the tree)
     * Space: (d) (due to recursive calls; d = depth or height of the tree)
     * @param root BinaryTree
     * @param value number
     * @returns bolean
     */
    function treeIncludes(root: BinaryTree, value: number) {
      if (root === null) return false;
      if (root.value === value) return true;

      const foundInLeft = treeIncludes(root.left, value);
      const foundInRight = treeIncludes(root.right, value);
      return foundInLeft || foundInRight;
    }


    // console.log(treeIncludes(root, 10)); // expect true
    // console.log(treeIncludes(root, 123)); // expect false
  }

}