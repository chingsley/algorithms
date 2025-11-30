/**
 * Recursive Solution
 */
export class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
    print() {
        const array = this.traverse(this);
        console.log(array.join(' -> '));
    }
    traverse(node, array = []) {
        if (node === null)
            return array;
        array.push(node.value);
        return this.traverse(node.next, array);
    }
}
export class LinkedList {
    constructor(array) {
        this.head = this.buildList(array);
    }
    // O(n) time, O(n) space
    buildList(array, currentIdx = 0) {
        if (array.length < 1)
            return null;
        if (!array[currentIdx])
            return null;
        let head = new Node(array[currentIdx]);
        head.next = this.buildList(array, currentIdx + 1);
        return head;
    }
    reverse() {
        this.head = this.reverseLinkedList(this.head);
    }
    // O(n) time, O(n) space
    reverseLinkedList(head, prev = null) {
        if (head === null)
            return prev;
        const next = head.next;
        head.next = prev;
        return this.reverseLinkedList(next, head);
    }
    print() {
        const array = this.toArray(this.head);
        console.log(array.join(' -> '));
    }
    // O(n) time, O(n) space
    toArray(node, arr = []) {
        if (node === null)
            return arr;
        arr = [...arr, node.value];
        return this.toArray(node.next, arr);
    }
}
// node: 10 -> 11 -> 12 -> 13 -> 14 -> 15
// index  0 ->  1 ->  2 ->  3 ->  4 ->  5
const testRun = () => {
    const list = new LinkedList([10, 11, 12, 13, 14, 15]);
    list.print();
    list.reverse();
    list.print();
};
// testRun();
export default {
    LinkedList,
    Node,
};
