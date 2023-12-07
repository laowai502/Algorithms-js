/**
 *  https://leetcode.cn/problems/symmetric-tree/
 * 
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return false;


    var isSymmetricTree = function(p, q) {
        if (p === null && q === null) {
            return true;
        }
        if (p === null || q === null || p.val !== q.val) {
            return false;
        }
        return isSymmetricTree(p.left, q.right) && isSymmetricTree(p.right, q.left);
    };

    return isSymmetricTree(root.left, root.right);
};