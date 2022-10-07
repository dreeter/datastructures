import { SLNode } from "./SLNode.js";

class Queue<T> {
  constructor(
    private head: SLNode<T> | null = null,
    private tail: SLNode<T> | null = null
  ) {}

  enqueue(data: T) {
    const newNode: SLNode<T> = new SLNode<T>(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.nextNode = newNode;
      this.tail = newNode;
    }

    return this;
  }

  dequeue() {
    if (!this.head) return undefined;

    const dequeuedNode: SLNode<T> = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.nextNode;
    }

    return dequeuedNode;
  }
}
