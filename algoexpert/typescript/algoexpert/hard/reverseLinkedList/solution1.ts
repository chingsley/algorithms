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
export function reverseLinkedList(head: LinkedList) {
  let prev: LinkedList | null = null;
  let current: LinkedList | null = head;
  while (current) {
    const next: LinkedList | null = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
