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
}