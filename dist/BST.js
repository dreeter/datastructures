class BSTNode {
    constructor(data, leftNode = null, rightNode = null) {
        this.data = data;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }
}
export var DFSORDER;
(function (DFSORDER) {
    DFSORDER[DFSORDER["PREORDER"] = 0] = "PREORDER";
    DFSORDER[DFSORDER["INORDER"] = 1] = "INORDER";
    DFSORDER[DFSORDER["POSTORDER"] = 2] = "POSTORDER";
})(DFSORDER || (DFSORDER = {}));
export class BST {
    constructor(root = null) {
        this.root = root;
    }
    insert(data, node = this.root) {
        const newNode = new BSTNode(data);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        if (node) {
            const currentNode = node;
            if (data === currentNode.data)
                return this;
            if (data < currentNode.data) {
                if (currentNode.leftNode)
                    return this.insert(data, currentNode.leftNode);
                currentNode.leftNode = newNode;
            }
            else {
                if (currentNode.rightNode)
                    return this.insert(data, currentNode.rightNode);
                currentNode.rightNode = newNode;
            }
        }
        return this;
    }
    find(data, node = this.root) {
        if (!node)
            return false;
        if (data < node.data) {
            if (node.leftNode)
                return this.find(data, node.leftNode);
            return false;
        }
        if (data > node.data) {
            if (node.rightNode)
                return this.find(data, node.rightNode);
            return false;
        }
        return true;
    }
    BFS() {
        const nodesToVisit = [];
        const data = [];
        if (!this.root)
            return [];
        nodesToVisit.push(this.root);
        while (nodesToVisit.length) {
            const dequeuedNode = nodesToVisit.shift();
            if (dequeuedNode) {
                data.push(dequeuedNode.data);
                if (dequeuedNode.leftNode)
                    nodesToVisit.push(dequeuedNode.leftNode);
                if (dequeuedNode.rightNode)
                    nodesToVisit.push(dequeuedNode.rightNode);
            }
        }
        return data;
    }
    DFS(node = this.root, order = DFSORDER.PREORDER) {
        let data = [];
        if (!node)
            return data;
        switch (order) {
            case DFSORDER.PREORDER: {
                data.push(node.data);
                if (node.leftNode)
                    data.push(...this.DFS(node.leftNode, order));
                if (node.rightNode)
                    data.push(...this.DFS(node.rightNode, order));
                break;
            }
            case DFSORDER.INORDER: {
                if (node.leftNode)
                    data.push(...this.DFS(node.leftNode, order));
                data.push(node.data);
                if (node.rightNode)
                    data.push(...this.DFS(node.rightNode, order));
                break;
            }
            case DFSORDER.POSTORDER: {
                if (node.leftNode)
                    data.push(...this.DFS(node.leftNode, order));
                if (node.rightNode)
                    data.push(...this.DFS(node.rightNode, order));
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
