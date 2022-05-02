// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n) time, O(n) space
export function branchSums(root: BinaryTree): number[] {
  const result: number[] = [];
  const runningSum = 0;
  sumBranches(root, runningSum, result);

  return result;
}

function sumBranches(
  currentNode: BinaryTree,
  runningSum: number,
  result: number[]
) {
  // console.log({ runningSum, currentNode: currentNode.value, result });
  if (currentNode.left === null && currentNode.right === null) {
    return result.push(runningSum + currentNode.value);
  }
  currentNode.left &&
    sumBranches(currentNode.left, runningSum + currentNode.value, result);
  currentNode.right &&
    sumBranches(currentNode.right, runningSum + currentNode.value, result);
}

{
  // METHOD 2 OF IMPLEMENTING THE sumBranches2 recursive function
  function sumBranches2(
    currentNode: BinaryTree | null,
    runningSum: number,
    result: number[]
  ) {
    if (currentNode === null) {
      return;
    }

    if (currentNode.left === null && currentNode.right === null) {
      return result.push(runningSum + currentNode.value);
    }

    sumBranches2(currentNode.left, runningSum + currentNode.value, result);
    sumBranches2(currentNode.right, runningSum + currentNode.value, result);
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

console.log(branchSums(one));
