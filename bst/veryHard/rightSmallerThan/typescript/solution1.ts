// Avg. case: O(nlog(n)) time | O(n) space;
// worst case (a one branch tree): O(n^2) time | O(n) space
export function rightSmallerThan(array: number[]) {
  if (array.length < 1) return [];

  let result = new Array(array.length).fill(0);
  const rootNode = new BST(array[array.length - 1]);
  for (let i = array.length - 2; i >= 0; i--) {
    let currentNode = rootNode;
    let greaterThanCount = 0;
    while (true) {
      if (array[i] <= currentNode.value) {
        currentNode.numOfLeftChildren += 1;
        if (currentNode.left === null) {
          currentNode.left = new BST(array[i]);
          result[i] = greaterThanCount;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        greaterThanCount += (currentNode.numOfLeftChildren + 1);
        if (currentNode.right === null) {
          currentNode.right = new BST(array[i]);
          result[i] = greaterThanCount;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }
  return result;
}

class BST {
  value: number;
  left: BST | null;
  right: BST | null;
  numOfLeftChildren: number;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.numOfLeftChildren = 0;
  }
}
