/**
 * https://leetcode.cn/problems/top-k-frequent-elements/
 * 
 * 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) { // 桶排序
    // 创建一个哈希表来统计每个数字的出现频率
    const frequencyMap = new Map();
    for (let num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // 将出现频率作为桶的索引，桶中存储对应频率的数字数组
    const buckets = [];
    for (let [num, frequency] of frequencyMap) {
        if (!buckets[frequency]) {
            buckets[frequency] = [];
        }
        buckets[frequency].push(num);
    }

    // 从高频率向低频率遍历桶，提取出现频率最高的K的数字
    const result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        if (buckets[i]) {
            result.push(...buckets[i]);
        }
    }

    return result;
};

const arr = [1, 1, 1, 2, 2, 3];
console.log(topKFrequent(arr, 2));
// O(N)