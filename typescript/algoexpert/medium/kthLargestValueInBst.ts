// This is an input class. Do not edit.c5c 5 c
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// SOLUTION 3
{
  // O(n) time, O(n) space
  function findKthLargestValueInBst(tree: BST | null, k: number) {
    // traverse tree in descending order of values
    const array: number[] | undefined = reverseInorderTraverse(tree);
    
    // console.log(array);
    // return the kth largest value by index since array is sorted in descending order
    return array![k-1];
  }

  function reverseInorderTraverse(tree: BST | null, array: number[] = []) {
    if(!tree) return;
    reverseInorderTraverse(tree.right, array);
    array.push(tree.value);
    reverseInorderTraverse(tree.left, array);
    return array;
  }
}

// SOLUTION 2
{
  // O(h + k) time,
  // O(n) space (b/c as k tends to number of nodes (n), we could store every node in array)
  // h = height of the tree
  // n = length of array
  function findKthLargestValueInBst(tree: BST | null, k: number) {
    // traverse tree in descending order of values
    const array: number[] =  [];
    reverseInorderTraverse(tree, k, array);
    
    console.log(array);
    // return the kth largest value by index since array is sorted in descending order
    return array[k-1];
  }

  function reverseInorderTraverse(tree: BST | null, k: number, array: number[] = []) {
    if(!tree || array.length >= k) {
      return;
    }
    reverseInorderTraverse(tree.right, k, array);
    if(array.length < k) {
      array.push(tree.value);
      reverseInorderTraverse(tree.left, k, array);
    }
  }
}


// SOLUTION 1
{
  class TreeInfo {
    numberOfVisitedNodes: number;
    latestVisitedNodeValue: number;
  
    constructor(numberOfVisitedNodes: number, latestVisitedNodeValue: number) {
      this.numberOfVisitedNodes = numberOfVisitedNodes;
      this.latestVisitedNodeValue = latestVisitedNodeValue;
    }
  }
  
  // O(h + k) time, O(h) space
  // h = height of the tree
  function findKthLargestValueInBst(tree: BST | null, k: number) {
     const treeInfo: TreeInfo =  new TreeInfo(0, -1);
     // traverse tree in descending order of values
    reverseInorderTraverse(tree, k, treeInfo);
    
    return treeInfo.latestVisitedNodeValue;
  }
  
  function reverseInorderTraverse(node: BST | null, k: number, treeInfo: TreeInfo) {
    if(!node || treeInfo.numberOfVisitedNodes >= k) {
      return;
    }
    reverseInorderTraverse(node.right, k, treeInfo);
    if(treeInfo.numberOfVisitedNodes < k) {
      treeInfo.numberOfVisitedNodes += 1;
      treeInfo.latestVisitedNodeValue = node.value;
      reverseInorderTraverse(node.left, k, treeInfo);
    }
  }

  test(findKthLargestValueInBst);
}


function test(func){

  const root = new BST(15);
  root.left = new BST(5);
  root.left.right = new BST(5);
  root.left.left = new BST(2);
  root.left.left.left = new BST(1);
  root.left.left.right = new BST(3);
  root.right = new BST(20);
  root.right.right = new BST(22);
  root.right.left = new BST(17);
  
  
  console.log(func(root, 3));
}
