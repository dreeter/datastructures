import { DLNode } from "./DLNode.js";
export class DoublyLinkedList {
    constructor(head = null, tail = null, length = 0) {
        this.head = head;
        this.tail = tail;
        this.length = length;
    }
    print() {
        let currentNode = this.head;
        if (!currentNode) {
            console.log("Empty: " +
                "head: " +
                this.head +
                "tail: " +
                this.tail +
                " length: " +
                this.length);
        }
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.nextNode;
        }
    }
    push(data) {
        const newNode = new DLNode(data, null, null);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.nextNode = newNode;
            newNode.prevNode = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head)
            return undefined;
        const poppedNode = this.tail;
        if (poppedNode && poppedNode.prevNode) {
            this.tail = poppedNode.prevNode;
            this.tail.nextNode = null;
        }
        else {
            this.tail = null;
            this.head = null;
        }
        this.length--;
        return poppedNode;
    }
    shift() {
        if (!this.head)
            return undefined;
        const shiftedNode = this.head;
        if (this.head.nextNode) {
            this.head = this.head.nextNode;
            this.head.prevNode = null;
        }
        else {
            this.tail = null;
            this.head = null;
        }
        this.length--;
        return shiftedNode;
    }
    unshift(data) {
        if (!this.head)
            return this.push(data);
        const newNode = new DLNode(data, this.head, null);
        this.head.prevNode = newNode;
        this.head = newNode;
        return this;
    }
    get() {
        //return node
    }
    set() {
        //return boolean
    }
    insert() {
        //return boolean
    }
    remove() {
        //return boolean
    }
}
const DLL = new DoublyLinkedList();
DLL.push(10);
DLL.push(5);
DLL.push(35);
DLL.unshift(11);
DLL.unshift(45);
DLL.print();
