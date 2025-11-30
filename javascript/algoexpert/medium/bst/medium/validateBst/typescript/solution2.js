class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
export function validateBst(tree) {
    return validateBstHelper(tree, -Infinity, Infinity);
}
function validateBstHelper(tree, lowerBound, upperBound) {
    if (tree === null)
        return true;
    if (!(tree.value >= lowerBound && tree.value < upperBound))
        return false;
    const isValidLeft = validateBstHelper(tree.left, lowerBound, tree.value);
    const isValidRight = validateBstHelper(tree.right, tree.value, upperBound);
    return isValidLeft && isValidRight;
}
