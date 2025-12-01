// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

// O(n) time | O(1) space
// where n = no. of nodes in the linkedList
export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
  let prev: LinkedList = linkedList;
  let current: LinkedList | null = linkedList.next;

  while (current !== null) {
    if (prev.value === current.value) {
      prev.next = current.next;
      current = current.next;
    } else {
      prev = current;
      current = current.next;
    }
  }
  return linkedList;
}