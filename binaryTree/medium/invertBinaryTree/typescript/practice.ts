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
  {
    // O(n) time | O(d) space
    function invertBinaryTree(tree: BinaryTree | null) {
      if (tree === null) return tree;

      [tree.left, tree.right] = [tree.right, tree.left];
      invertBinaryTree(tree.left);
      invertBinaryTree(tree.right);

      return tree;
    }
  }
  {
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

    // O(n) time | O(d) space
    function invertBinaryTree(tree: BinaryTree | null) {
      if (tree === null) return;
      [tree.left, tree.right] = [tree.right, tree.left];
      invertBinaryTree(tree.left);
      invertBinaryTree(tree.right);
    }
  }
}