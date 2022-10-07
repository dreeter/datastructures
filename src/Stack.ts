class Node<T> {
  constructor(public data: T, public nextNode: Node<T> | null = null) {}
}

export class Stack<T> {
  constructor(
    private first: Node<T> | null = null,
    private last: Node<T> | null = null,
    private size: number = 0
  ) {}

  print() {
    let currentNode = this.first;

    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.nextNode;
    }
  }

  push(data: T) {
    const newNode: Node<T> = new Node(data);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.nextNode = this.first;
      this.first = newNode;
    }

    return ++this.size;
  }

  pop() {
    const poppedNode: Node<T> | null = this.first;

    if (!this.first) return undefined;

    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first!.nextNode;
    }

    this.size--;

    return poppedNode;
  }
}
