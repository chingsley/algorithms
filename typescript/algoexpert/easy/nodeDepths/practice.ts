import { BinaryTree } from './solution1';
{
  {
    interface TreeInfo { depthSum: number; };

    // O(n) time (n = no. of tree nodes)
    // O(h) space (h = height of the tree)
    function nodeDepths(root: BinaryTree) {
      const treeInfo: TreeInfo = { depthSum: 0 };
      sumDepths(root, 0, treeInfo);
      return treeInfo.depthSum;
    }

    function sumDepths(tree: BinaryTree | null, currNodeDepth: number, treeInfo: TreeInfo) {
      if (tree === null) return;

      treeInfo.depthSum += currNodeDepth;
      sumDepths(tree.left, currNodeDepth + 1, treeInfo);
      sumDepths(tree.right, currNodeDepth + 1, treeInfo);
    }

  }
  {
    // O(n) time (n = no. of tree nodes)
    // O(h) space (h = height of the tree)
    function nodeDepths(root: BinaryTree) {
      const treeInfo: TreeInfo = { nodeDepths: 0 };
      sumNodeDepths(root, 0, treeInfo);
      return treeInfo.nodeDepths;
    };

    function sumNodeDepths(node: BinaryTree | null, currentNodeDepth: number, treeInfo: TreeInfo) {
      if (node === null) return;

      treeInfo.nodeDepths += currentNodeDepth; // this line must come before the next line, otherwise it will fail
      currentNodeDepth += 1;
      sumNodeDepths(node.left, currentNodeDepth, treeInfo);
      sumNodeDepths(node.right, currentNodeDepth, treeInfo);
    }
    interface TreeInfo { nodeDepths: number; }
  }
  {
    function nodeDepths(root: BinaryTree) {
      return sumDepths(root, 0);
    }

    function sumDepths(tree: BinaryTree | null, totalDepth: number): number {
      if (tree === null) return 0;

      const leftDepth = sumDepths(tree.left, totalDepth + 1);
      const rightDepth = sumDepths(tree.right, totalDepth + 1);
      return totalDepth + leftDepth + rightDepth;
    }
  }
}