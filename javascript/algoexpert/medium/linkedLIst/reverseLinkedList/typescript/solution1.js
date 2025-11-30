import { LinkedList } from "../../buildLinkedList/typescript/solution3";
// O(n) time, O(1) space
// n = no. of nodes in the list
function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}
// node: 10 -> 11 -> 12 -> 13 -> 14 -> 15
// index  0 ->  1 ->  2 ->  3 ->  4 ->  5
const list = new LinkedList([10, 11, 12]);
// list.print();
const result = reverseLinkedList(list.head);
console.log(result);
list.print();
// console.log(reverseLinkedList(list.head));
