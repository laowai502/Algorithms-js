class BinaryTreeNode { // 二叉树
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const binaryRoot = new BinaryTreeNode(1);
binaryRoot.left = new BinaryTreeNode(2);
binaryRoot.right = new BinaryTreeNode(3);
binaryRoot.left.left = new BinaryTreeNode(4);
binaryRoot.left.right = new BinaryTreeNode(5);
binaryRoot.right.left = new BinaryTreeNode(6);
binaryRoot.right.right = new BinaryTreeNode(7);

/**
 * https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/
 * 给定一个二叉树 root ，返回其最大深度。
   二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let depth = 0;
    const stack = [];
    if (root) {
        stack.push({ node: root, depth: 1 });
    }

    while (stack.length > 0) {
        const { node, depth: curDepth } = stack.pop();
        depth = Math.max(depth, curDepth);
        if (node.left) {
            stack.push({ node: node.left, depth: curDepth + 1 });
        }
        if (node.right) {
            stack.push({ node: node.right, depth: curDepth + 1 });
        }
    }

    return depth;
};