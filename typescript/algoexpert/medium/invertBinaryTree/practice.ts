import { BinaryTree } from './solution1';
{
  {
    // O(n) time | O(d) space
    function invertBinaryTree(tree: BinaryTree | null) {
      if (tree === null) return;

      invertBinaryTree(tree.left);
      invertBinaryTree(tree.right);
      const temp = tree.left;
      tree.left = tree.right;
      tree.right = temp;
    }
  }
  {
    // O(n) time | O(d) space
    function invertBinaryTree(tree: BinaryTree | null) {
      if (tree === null) return;

      const temp = tree.left;
      tree.left = tree.right;
      tree.right = temp;
      invertBinaryTree(tree.left);
      invertBinaryTree(tree.right);
    }
  }
}