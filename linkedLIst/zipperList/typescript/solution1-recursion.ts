import { LinkedList } from "../../buildLinkedList/typescript/solution3";




/**
 * Write a function, zipperLists, that takes in the head of two linked  lists as arguments.
 * The function should zipper the two lists together into single linked list by alternating
 * nodes. If one of the linked lists is longer than the other, the resulting list should terminate
 * with the remaining nodes. The function should return the head of the zippered linked list.
 */



export class Node {
  value: number;
  next: Node | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}


// CASE 1: Returning a new list, without mutating either input lists
export function zipperLists(head1: Node, head2: Node) {
  const head = new Node(head1.value);
  let current1 = head1.next;
  let current2 = head2;
  let count = 0;
  traverse(head, current1, current2, count);
  return head;
};

function traverse(head: Node, current1: Node | null, current2: Node | null, count: number) {
  if (current1 === null && current2 === null) return;

  if (count % 2 === 0 && current2 !== null) {
    head.next = new Node(current2.value);
    current2 = current2.next;
    head = head.next;
  }
  if (count % 2 !== 0 && current1 !== null) {
    head.next = new Node(current1.value);
    current1 = current1.next;
    head = head.next;
  }
  traverse(head, current1, current2, count + 1);
}



const l1 = new LinkedList([1, 2, 3, 4]);
const l2 = new LinkedList([4]);;
l1.print();
l2.print();

const head = zipperLists(l1.head, l2.head);
console.log(
  l1.toArray(head).join(' -> ')
);;
