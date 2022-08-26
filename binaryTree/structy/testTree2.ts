import { BinaryTree } from './BinaryTree';

const one = new BinaryTree(1); // one is the root
const two = new BinaryTree(2);
const three = new BinaryTree(3);
const four = new BinaryTree(4);
const five = new BinaryTree(55);
const six = new BinaryTree(6);
const seven = new BinaryTree(7);
const eight = new BinaryTree(8);
const nine = new BinaryTree(9);
const ten = new BinaryTree(-100);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
four.left = eight;
four.right = nine;
five.left = ten;
three.left = six;
three.right = seven;

export const root2 = one;
