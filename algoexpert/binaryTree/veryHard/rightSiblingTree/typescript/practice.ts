{
  {
    // This is the class of the input root. Do not edit it.
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

    // O(n) time | O(h) space (n = no. of nodes, h = height of tree)
    function rightSiblingTree(root: BinaryTree) {
      traverse(root, null, false);
      return root;
    }

    function traverse(node: BinaryTree | null, parent: BinaryTree | null, isLeftNode: boolean) {
      if (node === null) return;

      traverse(node.left, node, true);
      const prevRightChild = node.right;
      if (isLeftNode) {
        node.right = parent!.right;
      } else {
        if (parent === null || parent.right === null) {
          node.right = null;
        } else {
          node.right = parent.right.left;
        }
      }

      traverse(prevRightChild, node, false);
    }

  }
}