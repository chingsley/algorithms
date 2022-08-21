import { BinaryTree } from './solution1';
{
  {
    // O(n) time
    // O(d) space (recursive calls)
    // n = no. of nodes in tree
    // d = depth or height of the tree
    function binaryTreeDiameter(tree: BinaryTree) {
      const treeInfo = new TreeInfo();
      getDiameterInTree(tree, treeInfo);
      return treeInfo.maxDiameter;
    }

    function getDiameterInTree(tree: BinaryTree | null, treeInfo: TreeInfo): number {
      if (tree === null) return 0;

      const leftHeight = getDiameterInTree(tree.left, treeInfo);
      const rightHeight = getDiameterInTree(tree.right, treeInfo);
      const diameter = leftHeight + rightHeight;
      if (diameter > treeInfo.maxDiameter) {
        treeInfo.maxDiameter = diameter;
      }
      return Math.max(leftHeight, rightHeight) + 1;
    }

    class TreeInfo {
      maxDiameter: number;

      constructor() {
        this.maxDiameter = -Infinity;
      }
    }
  }
  {
    // O(n) time
    // O(d) space (recursive calls)
    // n = no. of nodes in tree
    // d = depth or height of the tree
    function binaryTreeDiameter(tree: BinaryTree) {
      const treeInfo: TreeInfo = { maxDiameter: -Infinity };
      getDiameterInTree(tree, treeInfo);
      return treeInfo.maxDiameter;
    }

    function getDiameterInTree(tree: BinaryTree | null, treeInfo: TreeInfo): number {
      if (tree === null) return 0;

      const leftHeight = getDiameterInTree(tree.left, treeInfo);
      const rightHeight = getDiameterInTree(tree.right, treeInfo);
      const diameter = leftHeight + rightHeight;
      if (diameter > treeInfo.maxDiameter) {
        treeInfo.maxDiameter = diameter;
      }
      return Math.max(leftHeight, rightHeight) + 1;
    }

    interface TreeInfo {
      maxDiameter: number;
    }
  }
  {
    // O(n) time | O(d) space
    function binaryTreeDiameter(tree: BinaryTree) {
      return traverse(tree)[0];
    }

    function traverse(tree: BinaryTree | null): [number, number] {
      if (tree === null) return [0, 0];

      const [leftMaxDiam, leftHeight] = traverse(tree.left);
      const [rightMaxDiam, rightHeight] = traverse(tree.right);
      const diameterAtNode = leftHeight + rightHeight;

      return [
        Math.max(diameterAtNode, leftMaxDiam, rightMaxDiam),
        Math.max(leftHeight, rightHeight) + 1
      ];

    }
  }
  {
    // O(n) time | O(d) space
    function binaryTreeDiameter(tree: BinaryTree) {
      const treeInfo = new TreeInfo();
      traverse(tree, treeInfo);
      return treeInfo.maxDiameter;
    }

    function traverse(tree: BinaryTree | null, treeInfo: TreeInfo): number {
      if (tree === null) return 0;

      const left = traverse(tree.left, treeInfo);
      const right = traverse(tree.right, treeInfo);
      treeInfo.maxDiameter = Math.max(treeInfo.maxDiameter, left + right);
      return Math.max(left, right) + 1;
    }

    class TreeInfo {
      maxDiameter: number;
      constructor() {
        this.maxDiameter = -Infinity;
      }
    }
  }
}