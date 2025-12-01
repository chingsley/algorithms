export class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// O(n) time. | O(d) space
// where n = no. of nodes,  d = depth of the tree
// but depth of a tree d = log(n)
// therefore space complexity = O(logn)
export function invertBinaryTree(tree) {
    invertTree(tree);
    return tree;
}
function invertTree(node) {
    if (!node) {
        return;
    }
    const temp = node.right;
    node.right = node.left;
    node.left = temp;
    invertTree(node.left);
    invertTree(node.right);
}
