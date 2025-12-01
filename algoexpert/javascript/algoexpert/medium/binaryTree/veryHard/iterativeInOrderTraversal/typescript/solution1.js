class BinaryTree {
    constructor(value, parent = null) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = parent;
    }
}
// O(n) time | O(1) space (n = no. of nodes in tree)
export function iterativeInOrderTraversal(tree, callback) {
    let current = tree;
    let previous = null;
    const arr = [];
    while (current !== null) {
        if ((current.left === null && current.right === null) ||
            ((current.left === null || current.left === previous) && current.right !== previous)) {
            callback(current);
        }
        if (current.parent === previous && current.left !== null) {
            previous = current;
            current = current.left;
        }
        else if (current.left === previous && current.right !== null) {
            previous = current;
            current = current.right;
        }
        else if (current.left == null && current.right !== null && current.right !== previous) {
            previous = current;
            current = current.right;
        }
        else {
            previous = current;
            current = current.parent;
        }
    }
}
