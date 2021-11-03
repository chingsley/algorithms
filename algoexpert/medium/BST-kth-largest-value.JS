// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// SOLUTION 1
{
  // // Time: O(n), Space: O(n)
  // function findKthLargestValueInBst(tree, k) {
  //   const sortedNodeValues = [];
  //   inOrderTraverse(tree, sortedNodeValues);
  //   return sortedNodeValues[len(sortedNodeValues) - 1];
  // }
  // function inOrderTraverse(node, sortedNodeValues) {
  //   if (!node) return;
  //   inOrderTraverse(node.left, sortedNodeValues);
  //   sortedNodeValues.append(node.value);
  //   inOrderTraverse(node.right, sortedNodeValues);
  // }
}

// SOLUTION 2 (Optimized)
{
  class TreeInfo {
    constructor(numberOfNodesVisited, latestVisitedNodeValue) {
      this.numberOfNodesVisited = numberOfNodesVisited;
      this.latestVisitedNodeValue = latestVisitedNodeValue;
    }
  }
  // Time: O(h + k), Space: O(h)
  // where h is the height of the BST
  function findKthLargestValueInBst(tree, k) {
    const treeInfo = new TreeInfo(0, -1);
    reverseOrdrTraverse(tree, k, treeInfo);
    return treeInfo.latestVisitedNodeValue;
  }

  function reverseOrdrTraverse(node, k, treeInfo) {
    if (!node || treeInfo.numberOfNodesVisited >= k) {
      return;
    }

    reverseOrdrTraverse(node.right, k, treeInfo);
    if (treeInfo.numberOfNodesVisited < k) {
      treeInfo.numberOfNodesVisited += 1;
      treeInfo.latestVisitedNodeValue = node.value;
      reverseOrdrTraverse(node.left, k, treeInfo);
    }
  }
}

// Do not edit the lines below.
exports.BST = BST;
exports.findKthLargestValueInBst = findKthLargestValueInBst;
