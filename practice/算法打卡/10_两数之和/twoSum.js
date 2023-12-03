/**
 * https://leetcode.cn/problems/two-sum/
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
   你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
   你可以按任意顺序返回答案。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = new Map();
    for (let i = 0; i < nums.length; i++) {
        let a = target - nums[i];
        if (hash.has(a)) {
            return [hash.get(a), i];
        }
        hash.set(nums[i], i);
    }
    return [];
};

// 哈希表的方式去优化时间复杂度


// const map = new Map();
// map.set(1, 1);
// map.set(1, 2);
// map.set(2, 2);

// console.log(map);