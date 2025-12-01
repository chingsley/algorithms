// This is an input class. Do not edit.
export class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
// Feel free to add new properties and methods to the class.
export class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // remove before submission
    buildList(array) {
        let current = null;
        for (let i = 0; i < array.length; i++) {
            const node = new Node(array[i]);
            if (i === 0) {
                this.head = node;
                current = this.head;
            }
            else {
                current.next = node;
                node.prev = current;
                current = node;
            }
            if (i === array.length - 1) {
                this.tail = current;
            }
        }
    }
    // remove before submission
    print() {
        const array = this.toArray(this.head);
        console.log(array[0] ? array.join(' <-> ') : 'List is Empty!');
    }
    // remove before submission
    toArray(head) {
        let current = head;
        const array = [];
        while (current !== null) {
            array.push(current.value);
            current = current.next;
        }
        return array;
    }
    // O(1) time, O(1) space
    setHead(node) {
        if (this.head === null) {
            this.head = node;
            this.tail = node;
            return;
        }
        this.insertBefore(this.head, node);
    }
    // O(1) time, O(1) space
    setTail(node) {
        if (this.head === null) {
            this.head = node;
            this.tail = node;
            return;
        }
        this.insertAfter(this.tail, node);
    }
    // 1 < - > 2 < - > 3 < - > 4
    // 5, 3
    insertBefore(node, nodeToInsert) {
        if (nodeToInsert === this.head && nodeToInsert === this.tail)
            return;
        this.remove(nodeToInsert);
        nodeToInsert.prev = node.prev;
        nodeToInsert.next = node;
        if (node.prev === null) {
            this.head = nodeToInsert;
        }
        else {
            node.prev.next = nodeToInsert;
        }
        node.prev = nodeToInsert;
    }
    insertAfter(node, nodeToInsert) {
        if (nodeToInsert === this.head && nodeToInsert === this.tail)
            return;
        this.remove(nodeToInsert);
        nodeToInsert.prev = node;
        nodeToInsert.next = node.next;
        if (node.next === null) {
            this.tail = nodeToInsert;
        }
        else {
            node.next.prev = nodeToInsert;
        }
        node.next = nodeToInsert;
    }
    insertAtPosition(position, nodeToInsert) {
        if (position === 1) {
            this.setHead(nodeToInsert);
            return;
        }
        let count = 1;
        let current = this.head;
        while (count < position && current !== null) {
            count += 1;
            current = current.next;
        }
        if (current === null) {
            this.setTail(nodeToInsert);
        }
        else {
            this.insertBefore(current, nodeToInsert);
        }
    }
    // O(n) time, O(1) space
    removeNodesWithValue(value) {
        let current = this.head;
        while (current !== null) {
            const next = current.next;
            if (current.value === value) {
                this.remove(current);
            }
            current = next;
        }
    }
    // O(1) time | O(1) space
    remove(node) {
        if (node === this.head)
            this.head = this.head.next;
        if (node === this.tail)
            this.tail = this.tail.prev;
        this.removeNodeBindings(node);
    }
    removeNodeBindings(node) {
        if (node.prev !== null)
            node.prev.next = node.next;
        if (node.next !== null)
            node.next.prev = node.prev;
        node.prev = null;
        node.next = null;
    }
    containsNodeWithValue(value) {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
}
const array = [10, 11, 12, 13];
const dList = new DoublyLinkedList();
dList.buildList(array);
dList.print();
// dList.setHead(dList.head);
// dList.print();
// dList.setHead(dList.head.next);
// dList.print();
// dList.setHead(dList.tail);
// dList.print();
// dList.setHead(new Node(13));
// dList.print();p
dList.setTail(dList.head);
dList.print();
