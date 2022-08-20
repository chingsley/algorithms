/**
 * * NOTE: THIS QUESTIN IS SAME AS RECONSTRUCTING A BST FROM AN IN-ORDER TRAVERSAL
 * 
 * NOTE: solutions 1 and 2 (both of the same approach) have better
 * time complexity that this solution
 */

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

// O(nlog(n)) time | O(n) space
export function minHeightBst(array: number[]) {
  return constructFromRange(0, array.length - 1, array, null);
}

function constructFromRange(startIdx: number, endIdx: number, array: number[], root: BST | null): BST | null {
  if (endIdx < startIdx) return null;

  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const value = array[midIdx];
  if (root === null) {
    root = new BST(value);
  } else {
    root.insert(value);
  }
  constructFromRange(startIdx, midIdx - 1, array, root);
  constructFromRange(midIdx + 1, endIdx, array, root);
  return root;
}