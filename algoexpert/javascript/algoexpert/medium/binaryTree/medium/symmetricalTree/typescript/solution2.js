// This is an input class. Do not edit.
export class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// O(n) time | O(h) space (n = no. of nodes in tree, h = height of tree)
export function symmetricalTree(tree) {
    return isMirror(tree.left, tree.right);
}
function isMirror(left, right) {
    if (left === null && right === null)
        return true;
    if (left === null && right !== null)
        return false;
    if (left !== null && right === null)
        return false;
    if (left.value !== right.value)
        return false;
    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
}
