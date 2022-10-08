export var HEAPTYPE;
(function (HEAPTYPE) {
    HEAPTYPE[HEAPTYPE["MIN"] = 0] = "MIN";
    HEAPTYPE[HEAPTYPE["MAX"] = 1] = "MAX";
})(HEAPTYPE || (HEAPTYPE = {}));
export class BinaryHeap {
    constructor(type = HEAPTYPE.MAX) {
        this.type = type;
        this.heapValues = [];
    }
    insert(data) {
        this.heapValues.push(data);
        if (this.heapValues.length === 1)
            return this;
        let childIndex = this.heapValues.length - 1;
        let parentIndex = Math.floor((childIndex - 1) / 2);
        switch (this.type) {
            case HEAPTYPE.MAX: {
                while (this.heapValues[childIndex] > this.heapValues[parentIndex]) {
                    this.swap(parentIndex, childIndex);
                    childIndex = parentIndex;
                    parentIndex = Math.floor((childIndex - 1) / 2);
                }
                break;
            }
            case HEAPTYPE.MIN: {
                while (this.heapValues[childIndex] < this.heapValues[parentIndex]) {
                    this.swap(parentIndex, childIndex);
                    childIndex = parentIndex;
                    parentIndex = Math.floor((childIndex - 1) / 2);
                }
                break;
            }
            default: {
                break;
            }
        }
        return this;
    }
    swap(parentIndex, childIndex) {
        const temp = this.heapValues[parentIndex];
        this.heapValues[parentIndex] = this.heapValues[childIndex];
        this.heapValues[childIndex] = temp;
    }
    remove() {
        if (!this.heapValues.length)
            return undefined;
        if (this.heapValues.length === 1)
            return this.heapValues.pop();
        this.swap(0, this.heapValues.length - 1);
        const removedValue = this.heapValues.pop();
        let parentIndex = 0;
        let parent = this.heapValues[parentIndex];
        while (true) {
            const rightChildIndex = 2 * parentIndex + 2;
            const leftChildIndex = 2 * parentIndex + 1;
            const rightChild = this.heapValues[rightChildIndex];
            const leftChild = this.heapValues[leftChildIndex];
            let swapped = false;
            switch (this.type) {
                case HEAPTYPE.MAX: {
                    if (parent < rightChild || parent < leftChild) {
                        if (rightChild > leftChild) {
                            this.swap(parentIndex, rightChildIndex);
                            parentIndex = rightChildIndex;
                        }
                        else {
                            this.swap(parentIndex, leftChildIndex);
                            parentIndex = leftChildIndex;
                        }
                        swapped = true;
                    }
                    break;
                }
                case HEAPTYPE.MIN: {
                    if (parent > rightChild || parent > leftChild) {
                        if (rightChild < leftChild) {
                            this.swap(parentIndex, rightChildIndex);
                            parentIndex = rightChildIndex;
                        }
                        else {
                            this.swap(parentIndex, leftChildIndex);
                            parentIndex = leftChildIndex;
                        }
                        swapped = true;
                    }
                    break;
                }
                default: {
                    break;
                }
            }
            if (!swapped) {
                break;
            }
            else {
                parent = this.heapValues[parentIndex];
                swapped = false;
            }
        }
        return removedValue;
    }
}
const heap = new BinaryHeap();
heap.insert(55);
heap.insert(39);
heap.insert(41);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(33);
heap.remove();
heap.remove();
heap.remove();
heap.remove();
heap.remove();
heap.remove();
heap.remove();
console.log(heap.heapValues);
