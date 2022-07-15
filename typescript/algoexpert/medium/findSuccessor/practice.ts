import { BinaryTree } from './solution1';
{
  {
    // O(n) time | O(1) space;
    function findSuccessor(tree: BinaryTree, node: BinaryTree) {
      if (node.right !== null) return getLeastNodeInRightSubtree(node.right);
      const rightMostParent = getRightMostParent(node);
      return rightMostParent.parent;
    }

    function getLeastNodeInRightSubtree(node: BinaryTree): BinaryTree {
      let currNode = node;
      while (currNode.left !== null) {
        currNode = currNode.left;
      }
      return currNode;
    }

    function getRightMostParent(node: BinaryTree) {
      let currNode = node;
      while (currNode.parent !== null && currNode === currNode.parent.right) {
        currNode = currNode.parent;
      }
      return currNode;
    }
  }
  {
    // O(n) time | O(n) space;
    function findSuccessor(tree: BinaryTree, node: BinaryTree) {
      const array: BinaryTree[] = [];
      const treeInfo: TreeInfo = { nodeIdx: -1 };
      inOrderTraverse(tree, node, array, treeInfo);
      return array[treeInfo.nodeIdx + 1] || null;
    }

    function inOrderTraverse(tree: BinaryTree | null, node: BinaryTree, array: BinaryTree[], treeInfo: TreeInfo) {
      if (tree === null) return;
      if (array.length === treeInfo.nodeIdx) return; // --- OPTIMIZATION. We can stop recursion once we're sure the array the successor. For this to work, the initial value of the treeInfo.nodeIdx must be less that 0 (hence the -1), since the initial value of array.length is 0 for []

      inOrderTraverse(tree.left, node, array, treeInfo);
      array.push(tree);
      if (tree === node) treeInfo.nodeIdx = array.length - 1;
      inOrderTraverse(tree.right, node, array, treeInfo);
    }

    interface TreeInfo { nodeIdx: number; }
  }
  {
    // O(n) time | O(n) space
    // n = no. of nodes in the tree;
    function findSuccessor(tree: BinaryTree, node: BinaryTree) {
      const treeInfo: TreeInfo = {
        nodes: [],
        nodeIdx: -1
      };
      inOrderTraverse(tree, node, treeInfo);
      if (treeInfo.nodeIdx > -1 && treeInfo.nodeIdx + 1 < treeInfo.nodes.length) {
        return treeInfo.nodes[treeInfo.nodeIdx + 1];
      } else {
        return null;
      }
    }

    function inOrderTraverse(tree: BinaryTree | null, node: BinaryTree, treeInfo: TreeInfo) {
      if (tree === null) return;


      inOrderTraverse(tree.left, node, treeInfo);
      treeInfo.nodes.push(tree);
      if (tree === node) {
        treeInfo.nodeIdx = treeInfo.nodes.length - 1;
      }
      inOrderTraverse(tree.right, node, treeInfo);
    }

    interface TreeInfo {
      nodes: BinaryTree[],
      nodeIdx: number;
    }

  }
  {
    // O(h) time | O(1) space
    // h = height of the tree;
    function findSuccessor(tree: BinaryTree, node: BinaryTree) {
      if (node.right !== null) return getLeftMostChildIn(node.right);
      const rightMostParent = getRightMostParent(node);
      return rightMostParent.parent;
    }

    function getLeftMostChildIn(node: BinaryTree): BinaryTree | null {
      let currentNode = node;
      while (currentNode.left !== null) currentNode = currentNode.left;
      return currentNode;
    }

    function getRightMostParent(node: BinaryTree): BinaryTree {
      let currentNode = node;
      while (currentNode.parent !== null && currentNode === currentNode.parent.right) {
        currentNode = currentNode.parent;
      }
      return currentNode;
    }
  }
  {
    // O(h) time 
    //  O(h) space (due to the recursive calls)
    // h = height of the tree;
    function findSuccessor(tree: BinaryTree, node: BinaryTree) {
      if (node.right !== null) return getLeftMostChildIn(node.right);
      const rightMostParent = getRightMostParent(node);
      return rightMostParent.parent;
    }

    function getLeftMostChildIn(node: BinaryTree): BinaryTree | null {
      if (node.left === null) return node;
      return getLeftMostChildIn(node.left);
    }

    function getRightMostParent(node: BinaryTree): BinaryTree {
      if (node.parent === null || node !== node.parent.right) return node;
      return getRightMostParent(node.parent);
    }
  }
}