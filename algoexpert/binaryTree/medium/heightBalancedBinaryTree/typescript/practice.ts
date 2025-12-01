import buildTree from '../../../../utils/buildTree';
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
  {
    // O(n) time | O(d) space
    function heightBalancedBinaryTree(tree: BinaryTree): boolean {
      const treeInfo = new TreeInfo();
      getTreeHeight(tree, treeInfo);
      return treeInfo.isBalanced;
    }

    function getTreeHeight(tree: BinaryTree | null, treeInfo: TreeInfo): number {
      if (tree === null) return 0;

      // --- OPTIMZED, once a unbalanced node is identifified, no further recursive call is made
      if (treeInfo.isBalanced === false) return Infinity;

      const left = getTreeHeight(tree.left, treeInfo);
      const right = getTreeHeight(tree.right, treeInfo);

      if (tree.value === 1) console.log({ left, right });
      if (tree.value === 2) console.log({ left, right });
      if (left === Infinity || right === Infinity || Math.abs(left - right) > 1) treeInfo.isBalanced = false;
      return Math.max(left, right) + 1;
    }

    class TreeInfo {
      isBalanced: boolean;
      constructor() {
        this.isBalanced = true;
      }
    }

    const test = {
      "nodes": [
        { "id": "1", "left": "2", "right": "3", "value": 1 },
        { "id": "2", "left": "4", "right": "5", "value": 2 },
        { "id": "3", "left": null, "right": "6", "value": 3 },
        { "id": "4", "left": null, "right": null, "value": 4 },
        { "id": "5", "left": "7", "right": "8", "value": 5 },
        { "id": "6", "left": null, "right": null, "value": 6 },
        { "id": "7", "left": null, "right": "9", "value": 7 },
        { "id": "8", "left": null, "right": null, "value": 8 },
        { "id": "9", "left": null, "right": "10", "value": 9 },
        { "id": "10", "left": null, "right": null, "value": 8 }
      ],
      "root": "1"
    };
    const tree = buildTree(test.nodes, test.root);
    console.log(
      heightBalancedBinaryTree(tree)
    );
  }
  {
    // O(n) time | O(h) space (n = no. of nodes in tree, h = height of tree)
    function heightBalancedBinaryTree(tree: BinaryTree) {
      const [leftBalanced, leftHeight] = checkBalance(tree.left);
      const [rightBalanced, rightHeight] = checkBalance(tree.right);
      if (!leftBalanced || !rightBalanced) return false;
      if (Math.abs(leftHeight - rightHeight) > 1) return false;

      return true;
    }

    function checkBalance(node: BinaryTree | null): [boolean, number] {
      if (node === null) return [true, 0];

      const [leftBalanced, leftHeight] = checkBalance(node.left);
      const [rightBalanced, rightHeight] = checkBalance(node.right);
      if (!leftBalanced || !rightBalanced) return [false, -1];
      if (Math.abs(leftHeight - rightHeight) > 1) return [false, -1];

      return [true, Math.max(leftHeight, rightHeight) + 1];
    }

  }
}