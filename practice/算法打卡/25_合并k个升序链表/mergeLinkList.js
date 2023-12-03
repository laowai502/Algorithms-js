/**
 * https://leetcode.cn/problems/merge-k-sorted-lists/
 * 
 * 给你一个链表数组，每个链表都已经按升序排列。
 * 请你将所有链表合并到一个升序链表中，返回合并后的链表。
 */
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
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


    shiftUp(index) {
        // 从当前节点向上化
        const parentIndex = this.getParentIndex(index);
        if (this.heap[parentIndex] && this.heap[parentIndex].val > this.heap[index].val) {
            this.swap(index, parentIndex);
            this.shiftUp(parentIndex);
        }
    }

    shiftDown(index) {
        const leftChildIndex = this.getLeftChildIndex(index);
        const rightChildIndex = this.getRightChildIndex(index);
        let smallestIndex = index;

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].val < this.heap[smallestIndex].val) {
            // 如果左子节点小于当前节点，则更新最小值索引为左子节点的索引
            smallestIndex = leftChildIndex;
        }

        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].val < this.heap[smallestIndex].val) {
            smallestIndex = rightChildIndex;
        }

        if (smallestIndex !== index) {
            // 如果最小值索引不是当前节点的索引，则交换它们，并继续向下堆化
            this.swap(index, smallestIndex);
            this.shiftDown(smallestIndex);
        }
    }

    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    pop() {
        if (this.size() === 1) return this.heap.shift();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
        return top;
    }
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function(lists) {
    const res = new ListNode(0); // 创建虚拟节点头
    let p = res; // 创建一个移动指针
    const h = new MinHeap(); // 创建最小堆
    lists.forEach(l => {
        if (l) h.insert(l);
    });
    while (h.size()) {
        const n = h.pop(); // 插入堆之后排序，弹出堆顶元素
        p.next = n;
        p = p.next;
        if (n.next) h.insert(n.next);
    }

    return res.next;
};

// js 创建链表辅助函数
function createLinkedList(arr) {
    if (!arr || arr.length === 0) {
        return null;
    }

    const head = new ListNode(arr[0]); // 头节点
    let current = head; // 当前指针

    // 遍历数组中的元素，依次创建链表节点，并建立连接关系
    for (let i = 1; i < arr.length; i++) {
        const newNode = new ListNode(arr[i]);
        current.next = newNode;
        current = newNode;
    }

    return head;
}

const l1 = createLinkedList([1,4,5]);
const l2 = createLinkedList([1,3,4]);
const l3 = createLinkedList([2,6]);

const lists = [l1, l2, l3];

const mergedList = mergeKLists(lists);
console.log(mergedList);

// O(nlog(k))  O(n)