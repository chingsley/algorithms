// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// O(n) time | O(1) space
function removeKthNodeFromEnd(head, k) {
  let first = head;
  let second = head;

  let counter = 1;
  while (counter <= k) {
    // move second kth node ahead
    second = second.next;
    counter++;
  }

  if (!second) {
    // if second points to null, remove at head
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }

  while (second.next) {
    second = second.next;
    first = first.next;
  }

  // at this point, first will..
  // be at node just before kth node
  first.next = first.next.next;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeKthNodeFromEnd = removeKthNodeFromEnd;
