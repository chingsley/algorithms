// This is the class of the input root. Do not edit it.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// O(n) time | O(d) space (n = no. of nodes in tree, d = depth of tree)
export function flattenBinaryTree(root) {
    const [leftMost, _] = flattenNode(root);
    return leftMost;
}
function flattenNode(node) {
    let leftMost, rightMost;
    if (node.left === null) {
        leftMost = node;
    }
    else {
        const [leftSubtreeLeftMost, leftSubtreeRightMost] = flattenNode(node.left);
        leftMost = leftSubtreeLeftMost;
        connect(leftSubtreeRightMost, node);
    }
    if (node.right === null) {
        rightMost = node;
    }
    else {
        const [rightSubtreeLeftMost, rightSubtreeRightMost] = flattenNode(node.right);
        rightMost = rightSubtreeRightMost;
        connect(node, rightSubtreeLeftMost);
    }
    return [leftMost, rightMost];
}
function connect(leftNode, rightNode) {
    leftNode.right = rightNode;
    rightNode.left = leftNode;
}
