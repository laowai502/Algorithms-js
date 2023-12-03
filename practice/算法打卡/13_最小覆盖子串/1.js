/**
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
   注意：
        对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
        如果 s 中存在这样的子串，我们保证它是唯一的答案。
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const map = {};
  for(const c of t) {
    map[c] = map[c] ? map[c] + 1 : 1;
  }
  let left = 0, right = 0;
  let count = Object.keys(map).length;
  let minLen = Infinity, minStart = 0;
  while(right < s.length) {
    const c = s[right];
    if (map[c] !== undefined) {
      map[c]--;
      if (map[c] === 0) count--;
    }
    right++;

    while(count === 0) {
      console.log(s.substring(left, right));
      if (right - left < minLen) {
        minLen = right -left;
        minStart = left;
      }
      const c = s[left];
      if (map[c] !== undefined) {
        map[c]++;
        if (map[c] < 0) count++;
      }
      left++;
    }
  }
  return minLen === Infinity ? '' : s.substring(minStart, minLen);
};