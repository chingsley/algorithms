// This is an input class. Do not edit.
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number, left: BST | null = null, right: BST | null = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class TreeInfo {
  rootIdx: number;

  constructor(rootIdx: number) {
    this.rootIdx = rootIdx;
  }
}

// O(n) time | o(h) space (no considering output tree, but only as a result of the recursive calls),
// O(n) time | o(n) space (considering output tree. This is the actual space complexity),
// where h is the height of the tree (and is due to recursive calls)
// where n is the length of the input array
export function reconstructBst(preOrderTraversalValues: number[]): BST | null {
  const treeInfo = new TreeInfo(0);
  return reconstructBstFromRange(-Infinity, Infinity, preOrderTraversalValues, treeInfo);
}

function reconstructBstFromRange(lowerBound: number, upperBound: number, preOrderTraversalValues: number[], currentSubtreeInfo: TreeInfo): BST | null {
  if (currentSubtreeInfo.rootIdx === preOrderTraversalValues.length) {
    return null;
  }

  const rootValue: number = preOrderTraversalValues[currentSubtreeInfo.rootIdx];
  if (rootValue < lowerBound || rootValue >= upperBound) {
    return null;
  }

  currentSubtreeInfo.rootIdx += 1;
  const leftSubtree = reconstructBstFromRange(lowerBound, rootValue, preOrderTraversalValues, currentSubtreeInfo);
  const rightSubtree = reconstructBstFromRange(rootValue, upperBound, preOrderTraversalValues, currentSubtreeInfo);
  return new BST(rootValue, leftSubtree, rightSubtree);
}



// PRACTICE
{
  {
    //   export class BST {
    //     value: number;
    //     left: BST | null;
    //     right: BST | null;

    //     constructor(value: number, left: BST | null, right: BST | null) {
    //       this.value = value;
    //       this.left = left;
    //       this.right = right;
    //     }
    //   }

    //   interface TreeInfo {
    //     rootIdx: number;
    //   }

    //   // O(n) time | O(h) space (if only recursive space cost are considered)
    //   // O(n) time | O(n) space (if we consider the output tree constructed)
    //   export function reconstructBst(preOrderTraversalValues: number[]): BST | null {
    //     const treeInfo: TreeInfo = { rootIdx: 0 }
    //     return reconstructFromRange(-Infinity, Infinity, preOrderTraversalValues, treeInfo);
    //   }



    //   function reconstructFromRange(lowerBound: number, upperBound: number, array: number[], treeInfo: TreeInfo): BST | null {
    //     const iArr = treeInfo.rootIdx;
    //     if(iArr > array.length - 1) return null;

    //     const value = array[iArr];
    //     if(value < lowerBound || value >= upperBound) return null;

    //     treeInfo.rootIdx += 1;
    //     const left = reconstructFromRange(lowerBound, value, array, treeInfo);
    //     const right = reconstructFromRange(value, upperBound, array, treeInfo);
    //     return new BST(value, left, right);
    //   }
  }
  {
    // class BST {
    //   value: number;
    //   left: BST | null;
    //   right: BST | null;

    //   constructor(value: number, left: BST | null, right: BST | null) {
    //     this.value = value;
    //     this.left = left;
    //     this.right = right;
    //   }
    // }

    // export function reconstructBst(preOrderTraversalValues: number[]): BST | null {
    //   const tInfo: TreeInfo = { rootIdx: 0 };
    //   return reconstructFromRange(-Infinity, Infinity, preOrderTraversalValues, tInfo);
    // }

    // function reconstructFromRange(lowerBound: number, upperBound: number, array: number[], tInfo: TreeInfo): BST | null {
    //   if(tInfo.rootIdx > array.length - 1) return null;

    //   const val = array[tInfo.rootIdx];
    //   if(val < lowerBound || val >= upperBound) return null;  // val must be >= lower and strictly < upper

    //   tInfo.rootIdx += 1;
    //   const left = reconstructFromRange(lowerBound, val, array, tInfo)
    //   const right = reconstructFromRange(val, upperBound, array, tInfo);
    //   return new BST(val, left, right);
    // }

    // interface TreeInfo {
    //   rootIdx: number;
    // }
  }
}
