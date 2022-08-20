// * NOTE: THIS QUESTIN IS SAME AS RECONSTRUCTING A BST FROM AN IN-ORDER TRAVERSAL

// O(n) time | O(n) space
export function minHeightBst(array: number[]): BST | null {
  return construct(array, 0, array.length - 1);
}

function construct(array: number[], startIdx: number, endIdx: number): BST | null {
  if (startIdx > endIdx) return null;

  const midIdx = Math.floor((endIdx + startIdx) / 2);
  const val = array[midIdx];
  const bst = new BST(val);
  bst.left = construct(array, startIdx, midIdx - 1);
  bst.right = construct(array, midIdx + 1, endIdx);
  return bst;


}

class BST {
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

console.log(
  minHeightBst([1, 2, 5, 7, 10, 13, 14, 15, 22])
);