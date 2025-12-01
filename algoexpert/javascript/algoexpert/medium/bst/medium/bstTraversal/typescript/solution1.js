class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// O(n) time, O(n) space. (n = no. of nodes)
export function inOrderTraverse(tree, array) {
    if (!tree)
        return;
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
    return array;
}
// O(n) time, O(n) space. (n = no. of nodes)
export function preOrderTraverse(tree, array) {
    if (!tree)
        return;
    array.push(tree.value);
    preOrderTraverse(tree.left, array);
    preOrderTraverse(tree.right, array);
    return array;
}
// O(n) time, O(n) space. (n = no. of nodes)
export function postOrderTraverse(tree, array) {
    if (!tree)
        return;
    postOrderTraverse(tree.left, array);
    postOrderTraverse(tree.right, array);
    array.push(tree.value);
    return array;
}
const root = new BST(10); // ten is the root
const fiveA = new BST(5);
const fiveB = new BST(5);
const fifteen = new BST(15);
const two = new BST(2);
const one = new BST(1);
const twentyTwo = new BST(22);
root.left = fiveA;
root.right = fifteen;
fiveA.left = two;
fiveA.right = fiveB;
two.left = one;
fifteen.right = twentyTwo;
console.log(inOrderTraverse(root, []));
console.log(preOrderTraverse(root, []));
console.log(postOrderTraverse(root, []));
