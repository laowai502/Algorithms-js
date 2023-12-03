// JS 中通常用数组表示堆
// 左侧子节点的位置是 2 * index + 1
// 右侧子节点的位置是 2 * index + 2
// 父子节点的位置是 （index - 1）/2


class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    heapIfUp(index) {
        // 从当前节点向上化
        const parentIndex = this.getParentIndex(index);
        if (parentIndex >= 0 && this.heap[index] < this.heap[parentIndex]) {
            this.swap(index, parentIndex);
            this.heapIfUp(parentIndex);
        }
    }

    heapIfDown(index) {
        const leftChildIndex = this.getLeftChildIndex(index);
        const rightChildIndex = this.getRightChildIndex(index);
        let smallestIndex = index;

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
            // 如果左子节点小于当前节点，则更新最小值索引为左子节点的索引
            smallestIndex = leftChildIndex;
        }

        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
            smallestIndex = rightChildIndex;
        }

        if (smallestIndex !== index) {
            // 如果最小值索引不是当前节点的索引，则交换它们，并继续向下堆化
            this.swap(index, smallestIndex);
            this.heapIfDown(smallestIndex);
        }
    }

    insert(value) {
        this.heap.push(value);
        this.heapIfUp(this.heap.length - 1);
    }

    extractMin() {
        // 提取堆顶最小值
        if (this.heap.length === 0) {
            return null;
        }

        const minValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapIfDown(0);

        return minValue;
    }
}

export { MinHeap };