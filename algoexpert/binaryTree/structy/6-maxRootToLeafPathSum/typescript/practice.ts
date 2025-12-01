/**
 * Find the maximum Path Sum
 */

import { BinaryTree, root } from '../../BinaryTree';
import { root2 } from '../../testTree2';

{
  { // RECURSION I (best solution)

    function maxPathSum(root: BinaryTree): number {
      if (root === null) return -Infinity;

      if (root.left === null && root.right === null) {
        return root.value;
      }

      let left = maxPathSum(root.left);
      let right = maxPathSum(root.right);

      return root.value + Math.max(left, right);
    }

    // console.log(maxPathSum(root)); // expect 18
    // console.log(maxPathSum(root2)); // expect 16
  }
  { // RECURSION II

    function maxPathSum(root: BinaryTree, currentPathSum: number = 0): number {
      if (root === null) return -Infinity;

      if (root.left === null && root.right === null) {
        return currentPathSum + root.value;
      }

      let left = maxPathSum(root.left, currentPathSum + root.value);
      let right = maxPathSum(root.right, currentPathSum + root.value);

      return Math.max(left, right);
    }

    // console.log(maxPathSum(root)); // expect 18
    // console.log(maxPathSum(root2)); // expect 16
  }
  { // RECURSION III

    function maxPathSum(root: BinaryTree): number {
      const treeInfo: TreeInfo = { maxPathSum: -Infinity };
      computePathSum(root, 0, treeInfo);
      return treeInfo.maxPathSum;
    }

    function computePathSum(root: BinaryTree, currentPathSum: number, treeInfo: TreeInfo): void {
      if (root === null) return;

      if (root.left === null && root.right === null) {
        currentPathSum += root.value;
        if (currentPathSum > treeInfo.maxPathSum) {
          treeInfo.maxPathSum = currentPathSum;
        }
      }

      computePathSum(root.left, currentPathSum + root.value, treeInfo);
      computePathSum(root.right, currentPathSum + root.value, treeInfo);
    }

    interface TreeInfo { maxPathSum: number; };
    // console.log(maxPathSum(root)); // expect 18
    // console.log(maxPathSum(root2)); // expect 16
  }
  { // ITERATION (DFS)

    function maxPathSum(root: BinaryTree): number {
      let maxSum = -Infinity;
      const stack: [[BinaryTree, number]] = [[root, root.value]];

      while (stack.length > 0) {
        const [currentNode, currentPathSum] = stack.pop();

        if (currentNode.left) stack.push([currentNode.left, currentPathSum + currentNode.left.value]);
        if (currentNode.right) stack.push([currentNode.right, currentPathSum + currentNode.right.value]);

        if (currentNode.left == null && currentNode.right === null) { // leaf node
          if (currentPathSum > maxSum) {
            maxSum = currentPathSum;
          }
        };
      }

      return maxSum;
    }

    // console.log(maxPathSum(root)); // expect 18
    // console.log(maxPathSum(root2)); // expect 16
  }
  { // ITERATION (BFS)

    function maxPathSum(root: BinaryTree): number {
      let maxSum = -Infinity;
      const queue: [[BinaryTree, number]] = [[root, root.value]];

      while (queue.length > 0) {
        const [currentNode, currentPathSum] = queue.shift();

        if (currentNode.left) queue.push([currentNode.left, currentPathSum + currentNode.left.value]);
        if (currentNode.right) queue.push([currentNode.right, currentPathSum + currentNode.right.value]);

        if (currentNode.left == null && currentNode.right === null) { // leaf node
          if (currentPathSum > maxSum) {
            maxSum = currentPathSum;
          }
        };
      }

      return maxSum;
    }

    // console.log(maxPathSum(root)); // expect 18
    // console.log(maxPathSum(root2)); // expect 16
  }
  {
    function maxPathSum(root: BinaryTree): number {
      const max: [number] = [-Infinity];
      findMaxPathSum(root, 0, max);
      return max[0];
    }

    function findMaxPathSum(root: BinaryTree | null, currSum: number, max: [number]) {
      if (root === null) return;
      currSum += root.value;
      if (root.left === null && root.right === null) {
        if (currSum > max[0]) max[0] = currSum;
      }
      // console.log({ node: root.value, currSum });
      findMaxPathSum(root.left, currSum, max);
      findMaxPathSum(root.right, currSum, max);
    }

    console.log(maxPathSum(root)); // expect 18
    console.log(maxPathSum(root2)); // expect 16
  }

  {// Recursion
    // O(n) time | O(d) space
    function maxPathSum(root: BinaryTree): number {
      if (root === null) return -Infinity;

      if (root.left === null && root.right === null) {
        return root.value;
      }

      return root.value + Math.max(
        maxPathSum(root.left),
        maxPathSum(root.right)
      );
    }

    console.log(maxPathSum(root)); // expect 18
    console.log(maxPathSum(root2)); // expect 16
  }


}