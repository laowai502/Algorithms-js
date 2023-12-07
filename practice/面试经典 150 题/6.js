/**
 * https://leetcode.cn/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 189. 轮转数组
 * 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) { // 采用额外内存空间的办法，O(n), O(n) 注：k与数字长度的比较
    nums.splice(0, 0, ...nums.splice(-(k % nums.length)));
    return nums;
};

// 反转数组法，将所有元素反转，以轮转个数分割数组，再将两头分割的数组重新反转即得到正确答案
var reverse = function(nums, start, end) {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start += 1;
        end -= 1;
    }
}

var rotateByReverse = function(nums, k) {
    let k = k % nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
}