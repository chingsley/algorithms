import { BinaryTree, root } from '../../BinaryTree';


// DFS (Iteration)
function breadthFirstSearch(root: BinaryTree) {
  const queue: BinaryTree[] = [root];
  const array: number[] = [];
  while (queue.length > 0) {
    const current = queue.shift();
    array.push(current.value);
    if (current.right) queue.push(current.right);
    if (current.left) queue.push(current.left);
  }

  return array;
}

console.log(
  breadthFirstSearch(root)
);

