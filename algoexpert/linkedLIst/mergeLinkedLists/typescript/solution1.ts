// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

// O(m + n) time, O(1) space
// m = length of list 1
// n = length of list 2
export function mergeLinkedLists(headOne: LinkedList, headTwo: LinkedList) {
  let parentHead: LinkedList | null = null;
  let childHead: LinkedList | null = null;
  if (headOne.value < headTwo.value) {
    parentHead = headOne;
    childHead = headTwo;
  } else {
    parentHead = headTwo;
    childHead = headOne;
  }

  let prevParentHead: LinkedList | null = null;
  let currentParentHead: LinkedList | null = parentHead;
  while (childHead !== null) {
    while (currentParentHead !== null && childHead.value >= currentParentHead.value) {
      prevParentHead = currentParentHead;
      currentParentHead = currentParentHead.next;
    }

    const nextChildHead: LinkedList | null = childHead.next;
    childHead.next = currentParentHead;
    prevParentHead!.next = childHead;
    currentParentHead = childHead;
    childHead = nextChildHead;
  }

  return parentHead;
}
