class BSTNode<T> {
  constructor(
    public data: T,
    public leftNode: BSTNode<T> | null = null,
    public rightNode: BSTNode<T> | null = null
  ) {}
}

export enum DFSORDER {
  PREORDER,
  INORDER,
  POSTORDER,
}

export class BST<T> {
  constructor(public root: BSTNode<T> | null = null) {}

  insert(data: T, node: BSTNode<T> | null = this.root): BST<T> {
    const newNode: BSTNode<T> = new BSTNode<T>(data);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    if (node) {
      const currentNode: BSTNode<T> = node;

      if (data === currentNode.data) return this;

      if (data < currentNode.data) {
        if (currentNode.leftNode)
          return this.insert(data, currentNode.leftNode);

        currentNode.leftNode = newNode;
      } else {
        if (currentNode.rightNode)
          return this.insert(data, currentNode.rightNode);

        currentNode.rightNode = newNode;
      }
    }

    return this;
  }

  find(data: T, node: BSTNode<T> | null = this.root): boolean {
    if (!node) return false;

    if (data < node.data) {
      if (node.leftNode) return this.find(data, node.leftNode);
      return false;
    }

    if (data > node.data) {
      if (node.rightNode) return this.find(data, node.rightNode);
      return false;
    }

    return true;
  }

  BFS() {
    const nodesToVisit: BSTNode<T>[] = [];
    const data: T[] = [];

    if (!this.root) return [];
    nodesToVisit.push(this.root);

    while (nodesToVisit.length) {
      const dequeuedNode: BSTNode<T> | undefined = nodesToVisit.shift();

      if (dequeuedNode) {
        data.push(dequeuedNode.data);

        if (dequeuedNode.leftNode) nodesToVisit.push(dequeuedNode.leftNode);

        if (dequeuedNode.rightNode) nodesToVisit.push(dequeuedNode.rightNode);
      }
    }

    return data;
  }

  DFS(
    node: BSTNode<T> | null = this.root,
    order: DFSORDER = DFSORDER.PREORDER
  ): T[] {
    let data: T[] = [];

    if (!node) return data;

    switch (order) {
      case DFSORDER.PREORDER: {
        data.push(node.data);
        if (node.leftNode) data.push(...this.DFS(node.leftNode, order));
        if (node.rightNode) data.push(...this.DFS(node.rightNode, order));
        break;
      }
      case DFSORDER.INORDER: {
        if (node.leftNode) data.push(...this.DFS(node.leftNode, order));
        data.push(node.data);
        if (node.rightNode) data.push(...this.DFS(node.rightNode, order));
        break;
      }
      case DFSORDER.POSTORDER: {
        if (node.leftNode) data.push(...this.DFS(node.leftNode, order));
        if (node.rightNode) data.push(...this.DFS(node.rightNode, order));
        data.push(node.data);
        break;
      }
      default: {
        break;
      }
    }

    return data;
  }
}
