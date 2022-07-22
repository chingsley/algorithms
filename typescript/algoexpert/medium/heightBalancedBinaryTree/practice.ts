import { BinaryTree } from './solution1';

{
  {
    interface TreeInfo {
      isBalanced: boolean;
    }
    function heightBalancedBinaryTree(tree: BinaryTree) {
      const treeInfo: TreeInfo = { isBalanced: true };
      isTreeBalanced(tree, treeInfo);
      return treeInfo.isBalanced;
    }

    // O(n) time | o(d) space
    function isTreeBalanced(tree: BinaryTree | null, treeInfo: TreeInfo): number {
      if (tree === null || !treeInfo.isBalanced) return 0;

      const leftHeight = isTreeBalanced(tree.left, treeInfo);
      const rightHeight = isTreeBalanced(tree.right, treeInfo);

      if (Math.abs(leftHeight - rightHeight) > 1) {
        treeInfo.isBalanced = false;
      }
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }
  {
    function heightBalancedBinaryTree(tree: BinaryTree) {
      const treeInfo = isTreeBalanced(tree);
      return treeInfo.isBalanced;
    }

    function isTreeBalanced(tree: BinaryTree | null): TreeInfo {
      if (tree === null) return { height: 0, isBalanced: true };

      const left = isTreeBalanced(tree.left);
      const right = isTreeBalanced(tree.right);
      if (!left.isBalanced || !right.isBalanced) {
        return { height: -1, isBalanced: false };
      }
      if (Math.abs(left.height - right.height) > 1) {
        return { height: -1, isBalanced: false };
      }
      const height = Math.max(left.height, right.height) + 1;
      return { height, isBalanced: true };
    }


    interface TreeInfo {
      height: number;
      isBalanced: boolean;
    }

  }
  {
    function heightBalancedBinaryTree(tree: BinaryTree): boolean {
      const [isBalanced, _] = validateHeight(tree);
      return isBalanced;
    }

    function validateHeight(tree: BinaryTree | null): [boolean, number] {
      if (tree === null) return [true, 0];

      const [isLeftBalanced, leftHeight] = validateHeight(tree.left);
      const [isRightBalanced, rightHeight] = validateHeight(tree.right);

      const isCurrentBalanced = Math.abs(leftHeight - rightHeight) <= 1 && isLeftBalanced && isRightBalanced;
      return [isCurrentBalanced, Math.max(leftHeight, rightHeight) + 1];
    }
  }
}