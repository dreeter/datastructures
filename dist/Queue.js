import { SLNode } from "./SLNode.js";
class Queue {
    constructor(head = null, tail = null) {
        this.head = head;
        this.tail = tail;
    }
    enqueue(data) {
        const newNode = new SLNode(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
        return this;
    }
    dequeue() {
        if (!this.head)
            return undefined;
        const dequeuedNode = this.head;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = this.head.nextNode;
        }
        return dequeuedNode;
    }
}
