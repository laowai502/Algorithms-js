/**
 * https://leetcode.cn/problems/kth-largest-element-in-an-array/
 * 
 * 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
   请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
   你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。
 */

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

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// const findKthLargest = function(nums, k) {
//     nums.sort((a, b) => b - a);
//     return nums[k - 1];
// };

// const findKthLargestQuickSort = function(nums, k) {
//     const n = nums.length;
//     const targetIndex = n - k;

//     let left = 0;
//     let right = n - 1;

//     while(left <= right) {
//         const pivotIndex = partition(nums, left, right);
//         if (pivotIndex === targetIndex) {
//             return nums[pivotIndex];
//         } else if (pivotIndex < targetIndex) {
//             left = pivotIndex + 1;
//         } else {
//             right = pivotIndex - 1;
//         }
//     }

//     return -1; // error case

//     // 分区函数，根据基准元素将数组划分为两部分
//     function partition(arr, start, end) {
//         const pivot = arr[end];
//         let i = start;

//         for (let j = start; j < end; j++) {
//             if (arr[j] <= pivot) {
//                 swap(arr, i, j);
//                 i++;
//             }
//         }

//         swap(arr, i, end);
//         return i;
//     }

//     function swap(arr, i, j) {
//         const temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
// };

const findKthLargetsHeap = function (nums, k) {
    const minHeap = new MinHeap();
    for (let i = 0; i < nums.length; i++) {
        // console.log(minHeap.heap);
        if (minHeap.heap.length < k) {
            minHeap.insert(nums[i]);
        } else if (nums[i] > minHeap.heap[0]) {
            minHeap.heap[0] = nums[i];
            minHeap.heapIfDown(0);
        }
    }
    return minHeap.heap[0];
};

// console.log([11,22,1,33,4].sort((a, b) => a - b));

// console.log(findKthLargestQuickSort([3, 2, 1, 5, 6, 4], 2));


console.log(findKthLargetsHeap([3,2,3,1,2,4,5,5,6], 4));
// O(nlogK) O(K)