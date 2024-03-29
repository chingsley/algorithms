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
  {
    // O(n) time | O(n) space
    function reconstructBst(preOrderTraversalValues: number[]): BST | null {
      const treeInfo: TreeInfo = { rootIdx: 0 };
      return reconstructFromRange(-Infinity, Infinity, preOrderTraversalValues, treeInfo);
    }

    type TreeInfo = { rootIdx: number; };

    function reconstructFromRange(lowerBound: number, upperBound: number, array: number[], treeInfo: TreeInfo): BST | null {
      if (treeInfo.rootIdx >= array.length) return null;
      const val = array[treeInfo.rootIdx];
      if (val >= upperBound || val < lowerBound) return null;

      treeInfo.rootIdx += 1;
      const left = reconstructFromRange(lowerBound, val, array, treeInfo);
      const right = reconstructFromRange(val, upperBound, array, treeInfo);
      return new BST(val, left, right);
    }
  }
  {
    interface TreeInfo { idx: number; };

    // O(n) time | O(n) space
    // n = length of the preOrderTraversalValues array
    function reconstructBst(preOrderTraversalValues: number[]): BST | null {
      const treeInfo: TreeInfo = { idx: 0 };
      return reconstruct([-Infinity, Infinity], treeInfo, preOrderTraversalValues);
    }

    function reconstruct([lowerBound, upperBound]: number[], treeInfo: TreeInfo, array: number[]): BST | null {
      if (treeInfo.idx > array.length - 1) return null;

      const value = array[treeInfo.idx];
      if (value >= upperBound || value < lowerBound) return null;

      treeInfo.idx += 1;
      const left = reconstruct([lowerBound, value], treeInfo, array);
      const right = reconstruct([value, upperBound], treeInfo, array);
      return new BST(value, left, right);
    }
  }
  {
    function reconstructBst(preOrderTraversalValues: number[]): BST | null {
      return createFromRange(-Infinity, Infinity, preOrderTraversalValues, [0]);
    }

    function createFromRange(bb: number, tb: number, arr: number[], currIdx: [number]): BST | null {
      const [idx] = currIdx;
      if (idx >= arr.length) return null;
      if (arr[idx] < bb || arr[idx] > tb) return null;

      currIdx[0] += 1;
      return new BST(
        arr[idx],
        createFromRange(bb, arr[idx] - 1, arr, currIdx),
        createFromRange(arr[idx], tb, arr, currIdx),
      );
    }
  }
}