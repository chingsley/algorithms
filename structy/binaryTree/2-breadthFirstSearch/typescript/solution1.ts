import { BinaryTree, root } from '../../BinaryTree';


// BFS (Iteration)
function breadthFirstSearch(root: BinaryTree) {
  const queue: BinaryTree[] = [root];
  const array: number[] = [];
  while (queue.length > 0) {
    const current = queue.shift();
    array.push(current.value);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return array;
}

console.log(
  breadthFirstSearch(root)
); /* expect [
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
] */


