// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
  const arr = reverseInorderTraverse(tree, []);
  console.log({ arr });

  return arr[k - 1];
}

function reverseInorderTraverse(tree, array) {
  if (!tree) {
    return;
  }

  reverseInorderTraverse(tree.right, array);
  array.push(tree.value);
  reverseInorderTraverse(tree.left, array);
  return array;
}

// SOLUTION 2
{
  // O(h+k) time, O(h) space
  // whre h = height of the tree
  // and k = the input parameter for kth
  function findKthLargestValueInBst(tree, k) {
    const treeInfo = new TreeInfo(0, null);
    reverseInorderTraverse(tree, k, treeInfo);
    return treeInfo.valueOfLastVisitedTree;
  }

  function reverseInorderTraverse(node, k, treeInfo) {
    if (!node || treeInfo.numOfVisitedTrees >= k) {
      return;
    }

    reverseInorderTraverse(node.right, k, treeInfo);
    if (treeInfo.numOfVisitedTrees < k) {
      treeInfo.numOfVisitedTrees += 1;
      treeInfo.valueOfLastVisitedTree = node.value;
      reverseInorderTraverse(node.left, k, treeInfo);
    }
  }

  class TreeInfo {
    constructor(numOfVisitedTrees, valueOfLastVisitedTree) {
      this.numOfVisitedTrees = numOfVisitedTrees;
      this.valueOfLastVisitedTree = valueOfLastVisitedTree;
    }
  }
}

// Do not edit the lines below.
exports.BST = BST;
exports.findKthLargestValueInBst = findKthLargestValueInBst;
