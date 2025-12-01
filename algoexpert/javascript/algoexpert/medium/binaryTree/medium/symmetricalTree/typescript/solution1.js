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
    const [leftStack, rightStack] = [[], []];
    if (tree.left)
        leftStack.push(tree.left);
    if (tree.right)
        rightStack.push(tree.right);
    while (leftStack.length > 0 && rightStack.length > 0) {
        const [leftNode, rightNode] = [leftStack.pop(), rightStack.pop()];
        if (leftNode.value !== rightNode.value)
            return false;
        if (leftNode.left)
            leftStack.push(leftNode.left);
        if (leftNode.right)
            leftStack.push(leftNode.right);
        if (rightNode.right)
            rightStack.push(rightNode.right);
        if (rightNode.left)
            rightStack.push(rightNode.left);
    }
    return leftStack.length === rightStack.length;
}
