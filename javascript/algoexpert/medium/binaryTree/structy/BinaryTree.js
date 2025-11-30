// This is the class of the input root.
// Do not edit it.
export class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
const one = new BinaryTree(1); // one is the root
const two = new BinaryTree(2);
const three = new BinaryTree(3);
const four = new BinaryTree(4);
const five = new BinaryTree(5);
const six = new BinaryTree(6);
const seven = new BinaryTree(7);
const eight = new BinaryTree(8);
const nine = new BinaryTree(9);
const ten = new BinaryTree(10);
one.left = two;
one.right = three;
two.left = four;
two.right = five;
four.left = eight;
four.right = nine;
five.left = ten;
three.left = six;
three.right = seven;
export const root = one;
// work in progress!
function printTree(root, tabCount, first = false) {
    if (root === null)
        return;
    if (first)
        console.log(indent(tabCount), root.value);
    const leftTabCount = tabCount / 2;
    const rightTabCount = (tabCount / 2);
    console.log(indent(leftTabCount), '/', indent(rightTabCount), '\\');
    console.log(indent(leftTabCount), root.left && root.left.value, indent(rightTabCount), root.right && root.right.value);
    printTree(root.left, leftTabCount);
    printTree(root.right, rightTabCount);
}
function indent(count) {
    let str = '';
    while (count-- > 0)
        str += ' ';
    return str;
}
// printTree(root, 10, true);
