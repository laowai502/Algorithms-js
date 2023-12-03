/**
 * https://leetcode.cn/problems/binary-tree-level-order-traversal/description/
 * 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）
 */


// 定义二叉树节点类
class BinaryTreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// 示例：构建二叉树
const root = new BinaryTreeNode(3);
root.left = new BinaryTreeNode(9);
root.right = new BinaryTreeNode(20);
root.right.left = new BinaryTreeNode(15);
root.right.right = new BinaryTreeNode(7);

// 层序遍历函数
function levelOrderTraversal(root) {
    if (!root) return []; // 如果根节点为空，返回空数组

    const result = [];
    const queue = [root]; // 使用队列追踪节点

    while (queue.length > 0) {
        let currentLevelSize = queue.length;
        const currentLevel = []; // 考虑空间复杂度，可优化此处

        for (let i = 0; i < currentLevelSize; i++) {
            const node = queue.shift(); // 出队列
            currentLevel.push(node.val); // 将当前节点值存入当前层级数组

            // 将当前节点的子节点（如果存在）加入队列
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(currentLevel); // 存入结果数组
    }

    return result;
}

// 进行层序遍历并输出结果
const traversalResult = levelOrderTraversal(root);
console.log(traversalResult); // 层序遍历的结果