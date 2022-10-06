import { SLNode } from "./SLNode.js";
export class SinglyLinkedList {
    constructor(head = null, tail = null, length = 0) {
        this.head = head;
        this.tail = tail;
        this.length = length;
    }
    push(data) {
        const newNode = new SLNode(data, null);
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.nextNode = newNode;
            this.tail = this.tail.nextNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head)
            return undefined;
        const poppedNode = this.tail;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        else {
            let currentNode = this.head;
            while (currentNode.nextNode) {
                if (currentNode.nextNode === this.tail) {
                    this.tail = currentNode;
                    this.tail.nextNode = null;
                    break;
                }
                else {
                    currentNode = currentNode.nextNode;
                }
            }
        }
        this.length--;
        return poppedNode;
    }
    shift() {
        if (!this.head)
            return undefined;
        const shiftedNode = this.head;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = this.head.nextNode;
        }
        this.length--;
        return shiftedNode;
    }
    unshift(data) {
        if (!this.head)
            return this.push(data);
        const previousHead = this.head;
        const newHead = new SLNode(data, previousHead);
        this.head = newHead;
        this.length++;
        return this;
    }
    get(position) {
        if (position < 0 || position > this.length - 1)
            return undefined;
        if (!this.length)
            return undefined;
        let currentPosition = 0;
        let currentNode = this.head;
        while (currentPosition < position) {
            currentPosition++;
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }
    set(position, data) {
        const nodeToSet = this.get(position);
        if (nodeToSet) {
            nodeToSet.data = data;
            return true;
        }
        return false;
    }
    insert(position, data) {
        if (position === this.length)
            return !!this.push(data);
        if (position === 0)
            return !!this.unshift(data);
        if (position < 0 || position > this.length)
            return false;
        const prevNode = this.get(position - 1);
        if (prevNode && prevNode.nextNode) {
            const newNode = new SLNode(data, prevNode.nextNode);
            prevNode.nextNode = newNode;
            this.length++;
            return true;
        }
        else {
            return false;
        }
    }
    remove(position) {
        if (position < 0 || position > this.length - 1)
            return false;
        if (position === 0)
            return !!this.shift();
        if (position === this.length - 1)
            return !!this.pop();
        const prevNode = this.get(position - 1);
        if (prevNode && prevNode.nextNode) {
            if (prevNode.nextNode.nextNode === null) {
                prevNode.nextNode = null;
            }
            else {
                prevNode.nextNode = prevNode.nextNode.nextNode;
            }
        }
        this.length--;
        return true;
    }
    reverse() {
        if (this.head === this.tail || !this.head)
            return this;
        let next = this.head.nextNode;
        let prev = this.head;
        this.head.nextNode = null;
        this.tail = this.head;
        while (next) {
            const newNext = next.nextNode;
            next.nextNode = prev;
            prev = next;
            next = newNext;
        }
        this.head = prev;
        return this;
    }
}
