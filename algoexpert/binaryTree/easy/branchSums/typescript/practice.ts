import { BinaryTree } from './solution1';
{
  {

    // O(n) time 
    // o(n) space (due to the output array which is less than n in size
    // but we say O(n) because it's bounded by n. The size of the output
    // array is actually the no. of leaf nodes in the tree)
    function branchSums(root: BinaryTree): number[] {
      const branchSumsArr: number[] = [];
      sumBranches(root, 0, branchSumsArr);
      return branchSumsArr;
    }

    function sumBranches(node: BinaryTree | null, runningSum: number, branchSumsArr: number[]) {
      if (node === null) return;
      if (node.left === null && node.right === null) { // i.e at a leaf node
        branchSumsArr.push(node.value + runningSum);
      };

      sumBranches(node.left, runningSum + node.value, branchSumsArr);
      sumBranches(node.right, runningSum + node.value, branchSumsArr);
    }
  }
  {
    function branchSums(root: BinaryTree): number[] {
      const result: number[] = [];
      sumBranches(root, 0, result);
      return result;
    }

    // O(n) time | O(n) time
    function sumBranches(root: BinaryTree | null, sumSoFar: number, array: number[]) {
      if (root === null) return;

      if (root.left === null && root.right === null) {
        array.push(sumSoFar + root.value);
        return;
      }

      sumSoFar += root.value;
      sumBranches(root.left, sumSoFar, array);
      sumBranches(root.right, sumSoFar, array);
    }

  }
  {
    function branchSums(root: BinaryTree): number[] {
      const arr: number[] = [];
      const stack: [[BinaryTree, number]] = [[root, root.value]];

      while (stack.length > 0) {
        const [node, runningSum] = stack.pop()!;

        if (node.left === null && node.right === null) {
          arr.push(runningSum);
        }

        if (node.right) stack.push([node.right, runningSum + node.right.value]);
        if (node.left) stack.push([node.left, runningSum + node.left.value]);
      }
      return arr;
    }


  }
  {
    // O(n) time | O(d) space
    function branchSums(root: BinaryTree): number[] {
      const array: number[] = [];
      traverse(root, 0, array);
      return array;
    }

    function traverse(node: BinaryTree | null, sumAtNode: number, array: number[]) {
      if (node === null) return;

      sumAtNode += node.value;
      if (node.left === null && node.right === null) array.push(sumAtNode);
      traverse(node.left, sumAtNode, array);
      traverse(node.right, sumAtNode, array);
    }
  }
  {
    // O(n) time | O(d + l) space
    // n = no. of nodes, d = depth of tree, l = no. of leaft nodes
    function branchSums(root: BinaryTree): number[] {
      const sums: number[] = [];
      sumBranches(root, 0, sums);
      return sums;
    }

    function sumBranches(node: BinaryTree | null, runningSum: number, sums: number[]) {
      if (node === null) return;

      const currSum = runningSum + node.value;
      if (node.left === null && node.right === null) {
        sums.push(currSum);
      } else {
        sumBranches(node.left, currSum, sums);
        sumBranches(node.right, currSum, sums);
      }
    }
  }
  {
    // O(n^2) time (due to the spread operator at every node. The actual time complexity is better than O(n^2))
    // O(d + l) space
    // n = no. of nodes, d = depth of tree, l = no. of leaft nodes
    function branchSums(root: BinaryTree): number[] {
      return sumBranches(root, 0);
    }

    function sumBranches(node: BinaryTree | null, currSum: number): number[] {
      if (node === null) return [];
      if (!node.left && !node.right) return [currSum + node.value];

      const leftSums = sumBranches(node.left, currSum + node.value);
      const rightSums = sumBranches(node.right, currSum + node.value);
      return [...leftSums, ...rightSums];

    }
  }
}