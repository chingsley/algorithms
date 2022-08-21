// This is an input class. Do not edit.
export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
  parent: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

// O(n) time 
// O(n) space (due to treeInfo.array... which could be of length <= n.)
//             ... it overdows the space consumed due to recursive calls which is of O(d)
// where n = no. of nodes in the tree
// d = depth (or height) of the tree
export function findSuccessor(tree: BinaryTree, node: BinaryTree) {
  const treeInfo = new TreeInfo();
  inOrderTraverse(tree, node, treeInfo);
  console.log(treeInfo.foundSuccessor);
  return treeInfo.successor;
}

class TreeInfo {
  foundSuccessor: boolean;
  successor: BinaryTree | null;
  array: BinaryTree[];
  constructor() {
    this.foundSuccessor = false;
    this.array = [];
    this.successor = null;
  }
}

function inOrderTraverse(node: BinaryTree | null, subjectNode: BinaryTree, treeInfo: TreeInfo) {
  if(!node || treeInfo.foundSuccessor) return;
  inOrderTraverse(node.left, subjectNode, treeInfo);
  const lastTraversedNode = treeInfo.array[treeInfo.array.length - 1];
  // console.log(treeInfo.array.map(node => node.value), {'node.value': node.value})
  // the check !treeInfo.foundSuccessor in the if condn. below will ensure that
  // !treeInfo.successor is set only once.
  if(!treeInfo.foundSuccessor && lastTraversedNode && lastTraversedNode.value === subjectNode.value) {
    treeInfo.foundSuccessor = true;
    treeInfo.successor = node;
  } else {
    treeInfo.array.push(node);
  }
  inOrderTraverse(node.right, subjectNode, treeInfo);
}


const bt = new BinaryTree(1);
const three = new BinaryTree(3);
const two =  new BinaryTree(2);
const four = new BinaryTree(4);
const five = new BinaryTree(5);
const six = new BinaryTree(6);
bt.right = three;
bt.left = two;
two.right = five;
two.left = four;
four.left = six;

const result = findSuccessor(bt, three);
console.log(
  '----------------------------\n\n', 
  result ? result.value : result
)



// 6 -> 4 -> 2 -> 5 -> 1 -> 3