import { LinkedList } from "../../buildLinkedList/typescript/solution3";
function splitLinkedList(head) {
    return split(head, head, head, head);
}
function split(head, prev, slow, fast) {
    if (slow.next === null && slow === fast)
        return [head, null]; // handle a one-node List
    if (fast === null || fast.next === null) {
        prev.next = null;
        return [head, slow];
    }
    ;
    return split(head, slow, slow.next, fast.next.next);
}
const list = new LinkedList([1, 2, 3, 4, 5]);
const [h1, h2] = splitLinkedList(list.head);
console.log(h1);
console.log(h2);
h1 && h1.print();
h2 && h2.print();
