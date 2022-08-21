export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

{
  {
    // O(n) time | O(d) space
    function maxPathSum(tree: BinaryTree) {
      const treeInfo: TreeInfo = { max: -Infinity };
      calcMaxPathSum(tree, treeInfo);
      return treeInfo.max;
    }

    function calcMaxPathSum(tree: BinaryTree | null, treeInfo: TreeInfo): number {
      if (tree === null) return 0;

      const left = calcMaxPathSum(tree.left, treeInfo);
      const right = calcMaxPathSum(tree.right, treeInfo);
      const maxAtNode = Math.max(
        tree.value,
        tree.value + left,
        tree.value + right,
        tree.value + left + right
      );
      treeInfo.max = Math.max(treeInfo.max, maxAtNode);
      return Math.max(
        tree.value,
        tree.value + left,
        tree.value + right
      );
    }


    interface TreeInfo {
      max: number;
    };
  }
}