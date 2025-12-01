{
  {
    // O(n) time | O(h) space (n = no. of nodes in tree, h = height of tree)
    function allKindsOfNodeDepths(root: BinaryTree) {
      const sum: { value: number; } = { value: 0 };
      traverse(root, sum);
      return sum.value;
    }

    function traverse(node: BinaryTree, sum: { value: number; }): [number, number] {
      if (node.left === null && node.right === null) {
        return [1, 1];
      }

      let [dl, cl, dr, cr] = [0, 0, 0, 0];
      if (node.left !== null) {
        [dl, cl] = traverse(node.left, sum);
      }
      if (node.right !== null) {
        [dr, cr] = traverse(node.right, sum);
      }

      const depthSumAtCurrentNode = dl + dr;
      sum.value += depthSumAtCurrentNode;

      const childCountsPlusCurrentNode = cl + cr + 1;
      const depthToReturn = depthSumAtCurrentNode + childCountsPlusCurrentNode;
      return [depthToReturn, childCountsPlusCurrentNode];
    }

    // This is the class of the input binary tree.
    class BinaryTree {
      value: number;
      left: BinaryTree | null;
      right: BinaryTree | null;

      constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
      }
    }

  }
}