import { SLNode } from "./SLNode.js";

export class SinglyLinkedList<T> {
  constructor(
    private head: SLNode<T> | null = null,
    private tail: SLNode<T> | null = null,
    private length: number = 0
  ) {}

  push(data: T) {
    const newNode: SLNode<T> = new SLNode<T>(data, null);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.nextNode = newNode;
      this.tail = this.tail!.nextNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;

    const poppedNode: SLNode<T> | null = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let currentNode: SLNode<T> | null = this.head;

      while (currentNode.nextNode) {
        if (currentNode.nextNode === this.tail) {
          this.tail = currentNode;
          this.tail.nextNode = null;
          break;
        } else {
          currentNode = currentNode.nextNode;
        }
      }
    }

    this.length--;

    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;

    const shiftedNode: SLNode<T> | null = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.nextNode;
    }

    this.length--;

    return shiftedNode;
  }

  unshift(data: T) {
    if (!this.head) return this.push(data);

    const previousHead: SLNode<T> | null = this.head;
    const newHead: SLNode<T> | null = new SLNode<T>(data, previousHead);

    this.head = newHead;
    this.length++;

    return this;
  }

  get(position: number) {
    if (position < 0 || position > this.length - 1) return undefined;

    if (!this.length) return undefined;

    let currentPosition: number = 0;
    let currentNode: SLNode<T> | null = this.head;

    while (currentPosition < position) {
      currentPosition++;
      currentNode = currentNode!.nextNode;
    }

    return currentNode;
  }

  set(position: number, data: T) {
    const nodeToSet: SLNode<T> | undefined | null = this.get(position);

    if (nodeToSet) {
      nodeToSet.data = data;
      return true;
    }

    return false;
  }

  insert(position: number, data: T) {
    if (position === this.length) return !!this.push(data);
    if (position === 0) return !!this.unshift(data);

    if (position < 0 || position > this.length) return false;

    const prevNode: SLNode<T> | null | undefined = this.get(position - 1);

    if (prevNode && prevNode.nextNode) {
      const newNode: SLNode<T> = new SLNode<T>(data, prevNode.nextNode);
      prevNode.nextNode = newNode;
      this.length++;
      return true;
    } else {
      return false;
    }
  }

  remove(position: number) {
    if (position < 0 || position > this.length - 1) return false;

    if (position === 0) return !!this.shift();
    if (position === this.length - 1) return !!this.pop();

    const prevNode: SLNode<T> | undefined | null = this.get(position - 1);

    if (prevNode && prevNode.nextNode) {
      if (prevNode.nextNode.nextNode === null) {
        prevNode.nextNode = null;
      } else {
        prevNode.nextNode = prevNode.nextNode.nextNode;
      }
    }

    this.length--;

    return true;
  }

  reverse() {
    if (this.head === this.tail || !this.head) return this;

    let next: SLNode<T> | null = this.head.nextNode;
    let prev: SLNode<T> | null = this.head;

    this.head.nextNode = null;
    this.tail = this.head;

    while (next) {
      const newNext: SLNode<T> | null = next.nextNode;

      next.nextNode = prev;

      prev = next;
      next = newNext;
    }

    this.head = prev;

    return this;
  }
}
