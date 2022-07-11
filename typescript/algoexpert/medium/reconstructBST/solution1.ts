// This is an input class. Do not edit.
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(
    value: number,
    left: BST | null = null,
    right: BST | null = null
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// O(n^2) time | o(h) space (no considering output tree, but only as a result of the recursive calls),
// O(n^2) time | o(n) space (considering output tree),
// where h is the height of the tree (and is due to recursive calls)
// where n is the length of the input array
export function reconstructBst(preOrderTraversalValues: number[]): BST | null {
  if (preOrderTraversalValues.length === 0) {
    return null;
  }
  const currentValue = preOrderTraversalValues[0];
  let rightSubtreeRootIdx = preOrderTraversalValues.length;

  for (let idx = 0; idx < preOrderTraversalValues.length; idx++) {
    const value = preOrderTraversalValues[idx];
    if (value > currentValue) {
      rightSubtreeRootIdx = idx;
      break;
    }
  }

  const leftSubtree = reconstructBst(
    preOrderTraversalValues.slice(1, rightSubtreeRootIdx)
  );
  const rightSubtree = reconstructBst(
    preOrderTraversalValues.slice(rightSubtreeRootIdx)
  );
  return new BST(currentValue, leftSubtree, rightSubtree);
}


// PRACTICES
{
  {

    // export function reconstructBst(preOrderTraversalValues: number[]): BST | null {
    //   if(preOrderTraversalValues.length < 1) return null;

    //   const currValue = preOrderTraversalValues[0];
    //   let rightNodeIdx: number = preOrderTraversalValues.length;
    //   for(let i = 1; i < preOrderTraversalValues.length; i++) {
    //     if(preOrderTraversalValues[i] >= currValue) {
    //       rightNodeIdx = i;
    //       break;
    //     }
    //   }

    //   const leftSubtree: BST | null = reconstructBst(preOrderTraversalValues.slice(1, rightNodeIdx));
    //   const rightSubtree: BST | null = reconstructBst(preOrderTraversalValues.slice(rightNodeIdx));
    //   return new BST(currValue, leftSubtree, rightSubtree);
    // }
  }
}

