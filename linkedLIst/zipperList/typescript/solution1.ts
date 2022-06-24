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
  let current = head;
  let current1 = head1.next;
  let current2 = head2;
  let count = 0;

  while (current1 !== null || current2 !== null) {

    if (count % 2 === 0 && current2 !== null) {
      current.next = new Node(current2.value);
      current2 = current2.next;
      current = current.next; // it's important that this is done here. B/c for unequal lists an iteration might not set current wheen count does not match
    } else if (current1 !== null) {
      current.next = new Node(current1.value);
      current1 = current1.next;
      current = current.next; // it's important that this is done here. B/c for unequal lists an iteration might not set current wheen count does not match
    }


    count += 1;
  }

  // if (current1 !== null) current.next = current1;
  // if (current2 !== null) current.next = current2;

  return head;
};


// 1 -> 2 -> 3 -> 4
const l1 = new LinkedList([1, 2, 3, 4]);
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