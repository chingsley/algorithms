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

  insertByIteration(value: number) {
    let currentNode: BST | null = this;
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new BST(value);
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = new BST(value);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }
}

// SOLUTIONS (PRACTICES)
{

  {

    // export function minHeightBst(array: number[]) {
    //   return constructFromRange(0, array.length - 1, array);
    // }

    // function constructFromRange(startIdx: number, endIdx: number, array: number[]): BST | null {
    //   if(endIdx < startIdx) return null;

    //   const midIdx = Math.floor((startIdx + endIdx) / 2);
    //   const value = array[midIdx];
    //   const bst = new BST(value);
    //   bst.left = constructFromRange(startIdx, midIdx - 1, array);
    //   bst.right = constructFromRange(midIdx + 1, endIdx, array);
    //   return bst;
    // }
  }

  {
    // /**
    //  * Time: (n) time
    //  * Space (n) space
    //  * where n - no. of nodes in the BST = no. of items in the array
    //  *
    //  * @param array Array of sorted distinct numbers
    //  * @returns BST
    //  */
    // function minHeightBst(array: number[]) {
    //   return reconstructFromList(array, null, 0, array.length - 1);
    // }

    // function reconstructFromList(array: number[], bst: BST | null, i: number, j: number): BST | null {
    //   if (i > j) return null;

    //   const midIdx = Math.floor((i + j) / 2);
    //   if (bst === null) {
    //     bst = new BST(array[midIdx]);
    //   } else {
    //     bst.insertByIteration(array[midIdx]);
    //   }
    //   reconstructFromList(array, bst, i, midIdx - 1);
    //   reconstructFromList(array, bst, midIdx + 1, j);
    //   return bst;
    // }
  }
}