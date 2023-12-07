/**
 * https://leetcode.cn/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 88. 合并两个有序数组
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {
//     for (let i = 0; i < nums1.length; i++) {
//         if (m === 0) {
//             nums1[nums1.length - i - 1] = nums2[--n];
//         } else if (n === 0) {
//             break;
//         } else {
//             nums1[nums1.length - i - 1] = nums1[m - 1] > nums2[n - 1] ? nums1[--m] : nums2[--n];
//         }
//     }
//     return nums1;
// };
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let currentIndex = m + n - 1;

    while (currentIndex >= 0) {
        if (i >= 0 && j >= 0) {
            if (nums1[i] > nums2[j]) {
                nums1[currentIndex] = nums1[i];
                i--;
            } else {
                nums1[currentIndex] = nums2[j];
                j--;
            }
        } else {
            if (i >= 0) {
                nums1[currentIndex] = nums1[i];
                i--;
            }
            if (j >= 0) {
                nums1[currentIndex] = nums2[j];
                j--;
            }
        }
        currentIndex--;
    }
    return nums1;
}

// 双指针法进行比较 时间复杂度为 O(m + n) 空间复杂度为 O(1)