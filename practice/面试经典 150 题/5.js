/**
 * https://leetcode.cn/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 169. 多数元素
 * 
 * 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    if (nums.length < 3) {
        return nums[0];
    }
    const map = new Map();
    const n = nums.length / 2;
    for (num of nums) {
        let count = map.has(num) ? map.get(num) + 1 : 1;
        if (count > n) {
            return num;
        }
        map.set(num, count);
    }
};