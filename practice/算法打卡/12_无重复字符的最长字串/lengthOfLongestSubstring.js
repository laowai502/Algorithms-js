/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串的长度。
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(str) {
    const charIndex = new Map();
    let start = 0; // 滑点起始位置
    let maxLength = 0;

    for (let i = 0; i <  str.length; i++) {
        const char = str[i];
        if (charIndex.has(char) && charIndex.get(char) >= start) {
            start = charIndex.get(char) + 1;
        }
        charIndex.set(char, i);
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
};

const sr = lengthOfLongestSubstring('ajaskdjancncgadxiuj');
console.log(sr);


var lengthOfLongestSubstringSet = function(str) {
    let set = new Set();
    let i = 0, j = 0;
    let maxLen = 0;
    while(j < str.length) {
        if (!set.has(s[j])) {
            set.add(s[j++]);
            maxLen = Math.max(maxLen, set.size);
        } else {
            set.delete(s[i++]);
        }
    }
    return maxLen;
};

const srS = lengthOfLongestSubstringSet('ajaskdjancncgadxiuj');
console.log(srS);