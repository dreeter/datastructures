export enum HEAPTYPE {
  MIN,
  MAX,
}

export class BinaryHeap<T> {
  public heapValues: T[] = [];

  constructor(private type: HEAPTYPE = HEAPTYPE.MAX) {}

  insert(data: T) {
    this.heapValues.push(data);
    if (this.heapValues.length === 1) return this;

    let childIndex: number = this.heapValues.length - 1;
    let parentIndex: number = Math.floor((childIndex - 1) / 2);

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

  private swap(parentIndex: number, childIndex: number) {
    const temp: T = this.heapValues[parentIndex];
    this.heapValues[parentIndex] = this.heapValues[childIndex];
    this.heapValues[childIndex] = temp;
  }

  remove() {
    if (!this.heapValues.length) return undefined;
    if (this.heapValues.length === 1) return this.heapValues.pop();

    this.swap(0, this.heapValues.length - 1);

    const removedValue: T | undefined = this.heapValues.pop();

    let parentIndex: number = 0;
    let parent: T = this.heapValues[parentIndex];
    while (true) {
      const rightChildIndex: number = 2 * parentIndex + 2;
      const leftChildIndex: number = 2 * parentIndex + 1;
      const rightChild: T = this.heapValues[rightChildIndex];
      const leftChild: T = this.heapValues[leftChildIndex];
      let swapped: boolean = false;

      switch (this.type) {
        case HEAPTYPE.MAX: {
          if (parent < rightChild || parent < leftChild) {
            if (rightChild > leftChild) {
              this.swap(parentIndex, rightChildIndex);
              parentIndex = rightChildIndex;
            } else {
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
            } else {
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
      } else {
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
