import { Node, LinkedList } from "../../buildLinkedList/typescript/solution3";

// O(n) time, O(1) space
// n = no. of nodes in the list
function getNodeValue(head: Node, idx: number): number | null {
  let i = 0;
  let current = head;
  while (current) {
    if (i === idx) return current.value;
    current = current.next;
    i += 1;
  }
  return null;
}


// node: 10 -> 11 -> 12 -> 13 -> 14 -> 15
// index  0 ->  1 ->  2 ->  3 ->  4 ->  5
const list = new LinkedList([10, 11, 12, 13, 14, 15]);
console.log(list.head);

console.log(getNodeValue(list.head, 0)); // expect 10
console.log(getNodeValue(list.head, 1)); // expect 11
console.log(getNodeValue(list.head, 2)); // expect 12
console.log(getNodeValue(list.head, 3)); // expect 13
console.log(getNodeValue(list.head, 4)); // expect 14
console.log(getNodeValue(list.head, 5)); // expect 14
console.log(getNodeValue(list.head, 6)); // expect null