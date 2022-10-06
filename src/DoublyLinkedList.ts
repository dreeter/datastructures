import { DLNode } from "./DLNode.js";

export class DoublyLinkedList<T> {
  constructor(
    private head: DLNode<T> | null = null,
    private tail: DLNode<T> | null = null,
    private length: number = 0
  ) {}

  print() {
    let currentNode: DLNode<T> | null = this.head;

    if (!currentNode) {
      console.log(
        "Empty: " +
          "head: " +
          this.head +
          "tail: " +
          this.tail +
          " length: " +
          this.length
      );
    }

    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.nextNode;
    }
  }

  push(data: T) {
    const newNode: DLNode<T> = new DLNode(data, null, null);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.nextNode = newNode;
      newNode.prevNode = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;

    const poppedNode: DLNode<T> | null = this.tail;

    if (poppedNode && poppedNode.prevNode) {
      this.tail = poppedNode.prevNode;
      this.tail.nextNode = null;
    } else {
      this.tail = null;
      this.head = null;
    }

    this.length--;

    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;

    const shiftedNode: DLNode<T> = this.head;

    if (this.head.nextNode) {
      this.head = this.head.nextNode;
      this.head.prevNode = null;
    } else {
      this.tail = null;
      this.head = null;
    }

    this.length--;

    return shiftedNode;
  }

  unshift(data: T) {
    if (!this.head) return this.push(data);

    const newNode: DLNode<T> = new DLNode(data, this.head, null);
    this.head.prevNode = newNode;
    this.head = newNode;

    this.length++;

    return this;
  }

  get(position: number) {
    if (position < 0 || position > this.length - 1) return undefined;

    if (!this.head) return undefined;

    let currentPosition: number = 0;
    let currentNode: DLNode<T> = this.head;

    while (currentPosition < position) {
      currentPosition++;

      if (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
    }

    return currentNode;
  }

  set(data: T, position: number) {
    if (position < 0 || position > this.length - 1) return false;

    const targetNode: DLNode<T> | undefined = this.get(position);

    if (!targetNode) return false;

    targetNode.data = data;

    return true;
  }

  insert(data: T, position: number) {
    if (position < 0 || position > this.length) return false;

    if (position === this.length) return !!this.push(data);
    if (position === 0) return !!this.unshift(data);

    const prevNode: DLNode<T> | undefined = this.get(position - 1);

    if (prevNode) {
      const newNode: DLNode<T> = new DLNode<T>(
        data,
        prevNode.nextNode,
        prevNode
      );

      prevNode.nextNode!.prevNode = newNode;
      prevNode.nextNode = newNode;
    }

    return true;
  }

  //   remove(position: number) {
  //     if (position < 0 || position > this.length - 1) return false;

  //     if(position === 0) return !!this.shift();
  //     if(position === this.length - 1) !!this.pop();

  //     const prevNode: DLNode<T> | undefined = this.get(position - 1);

  //     //return boolean
  //   }
}

const DLL = new DoublyLinkedList();
