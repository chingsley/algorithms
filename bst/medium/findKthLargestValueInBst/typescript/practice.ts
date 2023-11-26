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

{
  {

    // O(n) time, O(n) space
    function findKthLargestValueInBst(tree: BST | null, k: number) {
      // traverse tree in descending order of values
      const array: number[] | undefined = reverseInorderTraverse(tree);

      // console.log(array);
      // return the kth largest value by index since array is sorted in descending order
      return array![k - 1];
    }

    function reverseInorderTraverse(tree: BST | null, array: number[] = []) {
      if (!tree) return;
      reverseInorderTraverse(tree.right, array);
      array.push(tree.value);
      reverseInorderTraverse(tree.left, array);
      return array;
    }
  }
  {
    // O(n) time | O(d + k) space 
    // n = no. of nodes
    // d = depth of tree
    function findKthLargestValueInBst(tree: BST | null, k: number) {
      const array: number[] = [];
      reverseInOrderTraverse(tree, array, k);
      console.log(array);
      return array[k - 1];
    }

    function reverseInOrderTraverse(tree: BST | null, array: number[], k: number) {
      if (tree === null || array.length >= k) return;

      reverseInOrderTraverse(tree.right, array, k);
      if (array.length < k) {
        array.push(tree.value);
        reverseInOrderTraverse(tree.left, array, k);
      }
    }
  }
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
      const treeInfo: TreeInfo = new TreeInfo(0, -1);
      // traverse tree in descending order of values
      reverseInorderTraverse(tree, k, treeInfo);

      return treeInfo.latestVisitedNodeValue;
    }

    function reverseInorderTraverse(node: BST | null, k: number, treeInfo: TreeInfo) {
      if (!node || treeInfo.numberOfVisitedNodes >= k) {
        return;
      }
      reverseInorderTraverse(node.right, k, treeInfo);
      if (treeInfo.numberOfVisitedNodes < k) {
        treeInfo.numberOfVisitedNodes += 1;
        treeInfo.latestVisitedNodeValue = node.value;
        reverseInorderTraverse(node.left, k, treeInfo);
      }
    }



  }
  {
    // O(n) time (n = no. of nodes in the tree)
    // O(max(k, n)) ()
    function findKthLargestValueInBst(tree: BST | null, k: number) {
      const array: number[] = [];
      reverseInOrderTraversal(tree, array, k);
      console.log(array);
      return array[k - 1];
    }

    function reverseInOrderTraversal(tree: BST | null, array: number[], k: number) {
      if (tree === null || array.length >= k) return;

      reverseInOrderTraversal(tree.right, array, k);
      if (array.length < k) {
        array.push(tree.value);
        reverseInOrderTraversal(tree.left, array, k);
      }
    }
  }
  {
    // O(n) time | O(n) space
    function findKthLargestValueInBst(tree: BST | null, k: number) {
      const array: number[] = [];
      reverseInOrderTraverse(tree, array, k);
      return array[k - 1];
    }

    function reverseInOrderTraverse(tree: BST | null, array: number[], k: number) {
      if (tree === null) return;

      reverseInOrderTraverse(tree.right, array, k);
      array.push(tree.value);
      reverseInOrderTraverse(tree.left, array, k);
    }
  }
  {
    // O(n) time | O(max(d, k)) space (OPTIMIZED)
    function findKthLargestValueInBst(tree: BST | null, k: number) {
      const array: number[] = [];
      reverseInOrderTraverse(tree, array, k);
      console.log('here: ', array);
      return array[k - 1];
    }

    function reverseInOrderTraverse(tree: BST | null, array: number[], k: number) {
      console.log(array);
      if (tree === null) return;

      if (array.length > k) return; // --- OPTIMIZATION

      reverseInOrderTraverse(tree.right, array, k);
      array.push(tree.value);
      reverseInOrderTraverse(tree.left, array, k);
    }
  }
  {
    // O(n) time | O(n) space (without OPTIMIZATION)
    // O(n) time | O(d + k) space (with OPTIMIZATION) (d from recursive call stacks, and k from length of array)
    function findKthLargestValueInBst(tree: BST | null, k: number) {
      const array: number[] = [];
      reverseInorderTraverse(tree, array, k);
      return array[k - 1];
    }

    function reverseInorderTraverse(tree: BST | null, array: number[], k: number) {
      if (tree === null) return;

      reverseInorderTraverse(tree.right, array, k);
      if (array.length >= k) return; // optimization: Stop if kth item is reached
      array.push(tree.value);
      reverseInorderTraverse(tree.left, array, k);
    }
  }
  {
    // O(n) time | O(n) space;
    // n = no. of nodes in the tree
    function findKthLargestValueInBst(tree: BST | null, k: number) {
      const array: number[] = [];
      traverseDescending(tree, array, k);
      return array[k - 1];
    }

    function traverseDescending(tree: BST | null, array: number[], k: number) {
      console.log(tab(array.length), 'traverseDescending(', tree && tree.value, ',', JSON.stringify(array), ', ', k, ')');
      if (tree === null) return;

      traverseDescending(tree.right, array, k);
      array.push(tree.value);
      if (array.length >= k) return; //----- OPTIMIZATION:
      traverseDescending(tree.left, array, k);
    }

    function tab(length: number) {
      let space = '';
      let count = 0;
      while (count++ < length) space += ' ';
      return space;
    }
  }
  {
    class BST {
      value: number;
      left: BST | null;
      right: BST | null;
      constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
      }
    }

    class TraversalInfo {
      k: number;
      kthLargest: number;
      constructor() {
        this.k = 0;
        this.kthLargest = 0;
      }
    }

    // O(d + k) time | O(d) space;
    // d = depth of the tree
    function findKthLargestValueInBst(tree: BST | null, k: number) {
      const traversalInfo = new TraversalInfo();
      reverseInorderTraverse(tree, k, traversalInfo);
      return traversalInfo.kthLargest;
    }

    function reverseInorderTraverse(tree: BST | null, k: number, trvInfo: TraversalInfo) {
      if (tree === null) return;

      reverseInorderTraverse(tree.right, k, trvInfo);
      if (trvInfo.k === k) return;
      trvInfo.kthLargest = tree.value;
      trvInfo.k += 1;
      reverseInorderTraverse(tree.left, k, trvInfo);
    }
  }
  {

    // O(n) time | O(n) space
    function findKthLargestValueInBst(tree: BST | null, k: number) {
      const sortedNodes: number[] = [];
      visit(tree, k, sortedNodes);
      return sortedNodes[k - 1];
    }

    function visit(node: BST | null, k: number, sortedNodes: number[]) {
      if (node === null) return;
      visit(node.right, k, sortedNodes);
      sortedNodes.push(node.value);
      visit(node.left, k, sortedNodes);
    }

  }
  {
    // O(k) time | O(k) space
    function findKthLargestValueInBst(tree: BST | null, k: number) {
      const sortedNodes: number[] = [];
      visit(tree, k, sortedNodes);
      return sortedNodes[k - 1];
    }

    function visit(node: BST | null, k: number, sortedNodes: number[]) {
      if (node === null) return;
      if (sortedNodes.length >= k) return;

      visit(node.right, k, sortedNodes);
      sortedNodes.push(node.value);
      visit(node.left, k, sortedNodes);
    }
  }
}