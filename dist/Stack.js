class Node {
    constructor(data, nextNode = null) {
        this.data = data;
        this.nextNode = nextNode;
    }
}
export class Stack {
    constructor(first = null, last = null, size = 0) {
        this.first = first;
        this.last = last;
        this.size = size;
    }
    print() {
        let currentNode = this.first;
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.nextNode;
        }
    }
    push(data) {
        const newNode = new Node(data);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            newNode.nextNode = this.first;
            this.first = newNode;
        }
        return ++this.size;
    }
    pop() {
        const poppedNode = this.first;
        if (!this.first)
            return undefined;
        if (this.first === this.last) {
            this.first = null;
            this.last = null;
        }
        else {
            this.first = this.first.nextNode;
        }
        this.size--;
        return poppedNode;
    }
}
