/**
 * 两个数组的交集
 * @param {number[]} nums1 
 * @param {number[]} nums2 
 * @returns {number[]}
 */
// O(m + n),  O(m + n) 数组
const intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let res = [];
    for (let num of nums2) {
        if (set1.has(num)) {
            res.push(num);
            set1.delete(num);
        }
    }
    return res
};

const intersectionMap = function(nums1, nums2) {
    const map = new Map();
    nums1.forEach(n => {
        map.set(n, true);
    });
    const res = [];
    nums2.forEach(m => {
        if (map.get(m)) {
            res.push(m);
            map.delete(n);
        }
    });
    return res;
};
// 注意时间复杂度，不要 O(n^2)，做成 O(m + n);

