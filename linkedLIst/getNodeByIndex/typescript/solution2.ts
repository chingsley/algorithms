export class Node {
  value: number;
  next: Node | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

// O(n) time, O(n) space
// n = no. of nodes in the list
function getNodeValue(head: Node, idx: number): number | null {
  return findAndReturn(head, idx, 0);
}

function findAndReturn(node: Node, targetIdx: number, currentIdx: number) {
  if (node === null) return null;
  if (currentIdx === targetIdx) return node.value;
  return findAndReturn(node.next, targetIdx, currentIdx + 1);
}

// node: 10 -> 11 -> 12 -> 13 -> 14 -> 15
// index  0 ->  1 ->  2 ->  3 ->  4 ->  5
const head = new Node(10);
const eleven = new Node(11);
const twelve = new Node(12);
const thirteen = new Node(13);
const fourteen = new Node(14);
const fifteen = new Node(15);

head.next = eleven;
eleven.next = twelve;
twelve.next = thirteen;
thirteen.next = fourteen;
fourteen.next = fifteen;


console.log(getNodeValue(head, 0)); // expect 10
console.log(getNodeValue(head, 1)); // expect 11
console.log(getNodeValue(head, 2)); // expect 12
console.log(getNodeValue(head, 3)); // expect 13
console.log(getNodeValue(head, 4)); // expect 14
console.log(getNodeValue(head, 5)); // expect 14
console.log(getNodeValue(head, 6)); // expect null