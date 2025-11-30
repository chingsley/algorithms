class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// O(n) time | O(k) space;
// n = no. of nodes in the tree
export function findKthLargestValueInBst(tree, k) {
    const array = [];
    traverseDescending(tree, array, k);
    return array[k - 1];
}
function traverseDescending(tree, array, k) {
    if (tree === null)
        return;
    traverseDescending(tree.right, array, k);
    array.push(tree.value);
    if (array.length >= k)
        return; //----- OPTIMIZATION:
    traverseDescending(tree.left, array, k);
}
