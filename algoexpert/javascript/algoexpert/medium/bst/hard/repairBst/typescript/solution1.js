// This is an input class. Do not edit.
export class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// O(n^2) time | O(h) space
export function repairBst(tree) {
    const sortedNodes = [];
    traverseTree(tree, sortedNodes);
    return tree;
}
function traverseTree(node, sortedNodes) {
    if (node === null)
        return;
    traverseTree(node.left, sortedNodes);
    sortedNodes.push(node);
    let [i, j] = [sortedNodes.length - 2, sortedNodes.length - 1];
    while (i >= 0 && sortedNodes[j].value < sortedNodes[i].value) {
        [sortedNodes[i].value, sortedNodes[j].value] = [sortedNodes[j].value, sortedNodes[i].value];
        [i, j] = [i - 1, j - 1];
    }
    traverseTree(node.right, sortedNodes);
}
