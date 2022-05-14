/**
 * Time: (n) time
 * Space (n) space
 * where n - no. of nodes in the BST = no. of items in the array
 *
 * @param array Array of sorted distinct numbers
 * @returns BST
 */
export function minHeightBst(array: number[]) {
  return constructMinHeightBst(array, 0, array.length - 1);
}

function constructMinHeightBst(
  array: number[],
  startIdx: number = 0,
  endIdx: number
) {
  if (endIdx < startIdx) {
    return null;
  }

  const midIdx: number = Math.floor((startIdx + endIdx) / 2);
  const bst: BST = new BST(array[midIdx]);

  bst.left = constructMinHeightBst(array, startIdx, midIdx - 1);
  bst.right = constructMinHeightBst(array, midIdx + 1, endIdx);
  return bst;
}

export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
