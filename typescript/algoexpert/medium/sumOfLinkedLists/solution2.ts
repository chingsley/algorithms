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

export function sumOfLinkedLists(linkedListOne: LinkedList, linkedListTwo: LinkedList) {
  let sum = linkedListOne.value + linkedListTwo.value;
  let carry = Math.floor(sum / 10);
  const head = new LinkedList(sum % 10);

  let listOne = linkedListOne.next;
  let listTwo = linkedListTwo.next;
  let current: LinkedList = head;
  while (listOne || listTwo) {
    let val1 = listOne ? listOne.value : 0;
    let val2 = listTwo ? listTwo.value : 0;
    sum = val1 + val2 + carry;
    current.next = new LinkedList(sum % 10);

    carry = Math.floor(sum / 10);
    listOne = listOne && listOne.next;
    listTwo = listTwo && listTwo.next;
    current = current.next;
  }

  if (carry > 0) {
    current.next = new LinkedList(carry);
  }

  return head;

}

const list1 = new List.LinkedList([2, 4, 7, 1]);
const list2 = new List.LinkedList([9, 4, 5]);
list1.print();
list2.print();
const newListHead = sumOfLinkedLists(list1.head, list2.head);
console.log(list1.toArray(newListHead).join(' -> '));
// 5 -> 5 -> 6
// 6 -> 4 -> 6
// 1 -> 0 -> 13