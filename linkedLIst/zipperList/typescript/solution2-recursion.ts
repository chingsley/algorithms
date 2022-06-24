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


// CASE 1: By Mutation the input lists; no new list is created
export function zipperLists(head1: Node, head2: Node) {
  traverse(head1, head1.next, head2, 0);

  return head1;
};

function traverse(head: Node, current1: Node | null, current2: Node | null, count: number) {
  if (current1 === null) return head.next = current2;
  if (current2 === null) return head.next = current1;

  if (count % 2 === 0) {
    head.next = current2;
    current2 = current2.next;
  } else {
    head.next = current1;
    current1 = current1.next;
  }
  traverse(head.next, current1, current2, count + 1);
}


// 1 -> 2 -> 3 -> 4
const l1 = new LinkedList([1, 2, 3]);
const l2 = new LinkedList([4, 5, 6, 7, 8]);;
l1.print();
l2.print();

const head = zipperLists(l1.head, l2.head);

console.log(
  l1.toArray(head).join(' -> ')
);;

//     c1

// 5 -> 6
// c2

// count = 0;

// 1 -> 5
// h
//      c