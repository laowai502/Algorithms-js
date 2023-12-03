/**
 * https://leetcode.cn/problems/path-sum/
 * 
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
 * 如果存在，返回 true ；否则，返回 false 。叶子节点 是指没有子节点的节点。
 */
class BinaryTreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const root = new BinaryTreeNode(5);
root.left = new BinaryTreeNode(4);
root.right = new BinaryTreeNode(8);
root.left.left = new BinaryTreeNode(11);
root.left.left.left = new BinaryTreeNode(7);
root.left.left.right = new BinaryTreeNode(2);
root.right.left = new BinaryTreeNode(13);
root.right.right = new BinaryTreeNode(4);
root.right.right.right = new BinaryTreeNode(1);

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = function(root, targetSum) {
    if (root == null) return false;
    const stack = [];
    stack.push(root);
    while (stack.length > 0) {
        const node = stack.pop();
        // 到达字节点时，检查条件是否满足了要求
        if (node.left === null && node.right === null) {
            if (node.val === targetSum) {
                return true;
            } 
        }
        if (node.left !== null) {
            node.left.val += node.val;
            stack.push(node.left);
        }
        if (node.right !== null) {
            node.right.val += node.val;
            stack.push(node.right);
        }
    }
    return false;
};

console.log('hasPathSum: ', hasPathSum(root, 22));
// O(N)  O(H)