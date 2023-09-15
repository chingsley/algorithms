import { BinaryTree } from './solution1';
{
  {

    // O(n) time | O(h) space (n = no. of nodes, h = height of tree)
    function evaluateExpressionTree(tree: BinaryTree): number {
      if (tree.left === null && tree.right === null) {
        return tree.value;
      }

      const val1 = evaluateExpressionTree(tree.left!);
      const val2 = evaluateExpressionTree(tree.right!);


      if (tree.value === -1) return val1 + val2;
      if (tree.value === -2) return val1 - val2;
      if (tree.value === -3) return Math.trunc(val1 / val2); // round the result towards zero:
      return val1 * val2;
    }

  }
}