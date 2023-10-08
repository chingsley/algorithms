// O(log(n)) time | O(1) space;
export function validateThreeNodes(nodeOne: BST, nodeTwo: BST, nodeThree: BST) {
  let ancestor: BST | null = null;
  let node = findDescendantNode(nodeTwo, nodeOne);
  if (node !== null) {
    ancestor = nodeThree;
  } else {
    node = findDescendantNode(nodeTwo, nodeThree);
    if (node !== null) ancestor = nodeOne;
  }

  if (ancestor === null) return false;

  node = findDescendantNode(ancestor, nodeTwo);
  if (node === null) return false;

  return true;
}

function findDescendantNode(ancestor: BST, descendant: BST): BST | null {
  let currNode: BST | null = ancestor;
  while (currNode !== null) {
    if (currNode.value === descendant.value) {
      return currNode;
    } else if (descendant.value < currNode.value) {
      currNode = currNode.left;
    } else {
      currNode = currNode.right;
    }
  }

  return null;
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
}