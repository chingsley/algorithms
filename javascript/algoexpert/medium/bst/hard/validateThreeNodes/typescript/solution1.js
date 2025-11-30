// O(log(n)) time | O(1) space;
export function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
    let ancestor = null;
    let node = findDescendantNode(nodeTwo, nodeOne);
    if (node !== null) {
        ancestor = nodeThree;
    }
    else {
        node = findDescendantNode(nodeTwo, nodeThree);
        if (node !== null)
            ancestor = nodeOne;
    }
    if (ancestor === null)
        return false;
    node = findDescendantNode(ancestor, nodeTwo);
    if (node === null)
        return false;
    return true;
}
function findDescendantNode(ancestor, descendant) {
    let currNode = ancestor;
    while (currNode !== null) {
        if (currNode.value === descendant.value) {
            return currNode;
        }
        else if (descendant.value < currNode.value) {
            currNode = currNode.left;
        }
        else {
            currNode = currNode.right;
        }
    }
    return null;
}
export class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
