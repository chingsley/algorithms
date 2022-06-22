import List from '../../../../linkedLIst/buildLinkedList/typescript/solution2';
// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

// O(n) time, O(1) space
export function removeKthNodeFromEnd(head: LinkedList, k: number) {
  let counter = 1;
  let prev0: LinkedList | null = null; // node prior to node-to-remove
  let prev1: LinkedList = head; // node-to-remove
  let current: LinkedList | null = head;
  while (counter < k && current !== null) {

    current = current.next;
    counter += 1;
  }

  while (current && current.next !== null) {
    prev0 = prev1;
    prev1 = prev1.next!;
    current = current.next;

  }
  if (prev0 == null) { // then prev1 is at head
    head.value = head.next!.value;
    head.next = head.next!.next;
  } else {
    prev0.next = prev1.next;
  }
  return head;
}


const list = new List.LinkedList([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
list.print();
list.removeKthNodeFromEnd(10);
list.print();
// removeKthNodeFromEnd(list.head, 4);