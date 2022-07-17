import { BST } from './solution2';

// PRACTICE
{
  {
    // O(n) time | O(n) space
    function reconstructBst(preOrderTraversalValues: number[]): BST | null {
      const treeInfo: TreeInfo = { rootIdx: 0 };
      return reconstructFromRange(preOrderTraversalValues, -Infinity, Infinity, treeInfo);
    }

    function reconstructFromRange(array: number[], lowerBound: number, upperBound: number, treeInfo: TreeInfo): BST | null {
      if (treeInfo.rootIdx > array.length - 1) return null;

      const val = array[treeInfo.rootIdx];
      if (val < lowerBound || val >= upperBound) return null;

      treeInfo.rootIdx += 1;
      const left = reconstructFromRange(array, lowerBound, val, treeInfo);
      const right = reconstructFromRange(array, val, upperBound, treeInfo);
      return new BST(val, left, right);
    }

    interface TreeInfo { rootIdx: number; };
  }
  {


    interface TreeInfo {
      rootIdx: number;
    }

    // O(n) time | O(h) space (if only recursive space cost are considered)
    // O(n) time | O(n) space (if we consider the output tree constructed)
    function reconstructBst(preOrderTraversalValues: number[]): BST | null {
      const treeInfo: TreeInfo = { rootIdx: 0 };
      return reconstructFromRange(-Infinity, Infinity, preOrderTraversalValues, treeInfo);
    }



    function reconstructFromRange(lowerBound: number, upperBound: number, array: number[], treeInfo: TreeInfo): BST | null {
      const iArr = treeInfo.rootIdx;
      if (iArr > array.length - 1) return null;

      const value = array[iArr];
      if (value < lowerBound || value >= upperBound) return null;

      treeInfo.rootIdx += 1;
      const left = reconstructFromRange(lowerBound, value, array, treeInfo);
      const right = reconstructFromRange(value, upperBound, array, treeInfo);
      return new BST(value, left, right);
    }
  }
  {


    function reconstructBst(preOrderTraversalValues: number[]): BST | null {
      const tInfo: TreeInfo = { rootIdx: 0 };
      return reconstructFromRange(-Infinity, Infinity, preOrderTraversalValues, tInfo);
    }

    function reconstructFromRange(lowerBound: number, upperBound: number, array: number[], tInfo: TreeInfo): BST | null {
      if (tInfo.rootIdx > array.length - 1) return null;

      const val = array[tInfo.rootIdx];
      if (val < lowerBound || val >= upperBound) return null;  // val must be >= lower and strictly < upper

      tInfo.rootIdx += 1;
      const left = reconstructFromRange(lowerBound, val, array, tInfo);
      const right = reconstructFromRange(val, upperBound, array, tInfo);
      return new BST(val, left, right);
    }

    interface TreeInfo {
      rootIdx: number;
    }
  }
}