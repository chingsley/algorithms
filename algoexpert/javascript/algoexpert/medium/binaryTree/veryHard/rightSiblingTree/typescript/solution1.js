// This is the class of the input root. Do not edit it.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// O(n) time | O(h) space (n = no. of nodes in tree, h = height of tree)
export function rightSiblingTree(root) {
    updateRightPointers(root, null, false);
    return root;
}
function updateRightPointers(node, parent, nodeIsLeftChild) {
    if (node === null)
        return;
    updateRightPointers(node.left, node, true);
    const nodeRightChildBeforeUpdate = node.right;
    if (nodeIsLeftChild) {
        node.right = parent.right;
    }
    else {
        if (parent === null) { // this is the case when the node is the root node
            node.right = null;
        }
        else {
            node.right = parent.right ? parent.right.left : null;
        }
    }
    updateRightPointers(nodeRightChildBeforeUpdate, node, false);
}
