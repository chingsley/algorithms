// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

// O(n) time | O(n) space
export function reverseLinkedList(head: LinkedList | null, prev: LinkedList | null = null): LinkedList | null {
  if (head === null) return prev;
  const next: LinkedList | null = head.next;
  head.next = prev;
  return reverseLinkedList(next, head);
}