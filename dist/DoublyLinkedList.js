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
        this.length++;
        return this;
    }
    get(position) {
        if (position < 0 || position > this.length - 1)
            return undefined;
        if (!this.head)
            return undefined;
        let currentPosition = 0;
        let currentNode = this.head;
        while (currentPosition < position) {
            currentPosition++;
            if (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            }
        }
        return currentNode;
    }
    set(data, position) {
        if (position < 0 || position > this.length - 1)
            return false;
        const targetNode = this.get(position);
        if (!targetNode)
            return false;
        targetNode.data = data;
        return true;
    }
    insert(data, position) {
        if (position < 0 || position > this.length)
            return false;
        if (position === this.length)
            return !!this.push(data);
        if (position === 0)
            return !!this.unshift(data);
        const prevNode = this.get(position - 1);
        if (prevNode) {
            const newNode = new DLNode(data, prevNode.nextNode, prevNode);
            prevNode.nextNode.prevNode = newNode;
            prevNode.nextNode = newNode;
        }
        return true;
    }
}
const DLL = new DoublyLinkedList();
