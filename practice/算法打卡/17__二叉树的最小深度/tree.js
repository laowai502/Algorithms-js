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
// binaryRoot.left.left.left = new BinaryTreeNode(8);
// binaryRoot.right.right.right = new BinaryTreeNode(9);

/**
 * https://leetcode.cn/problems/minimum-depth-of-binary-tree/
 * 
 * 给定一个二叉树，找出其最小深度。
   最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (!root) return 0;
    const q = [[root, 1]];
    while (q.length > 0) {
        const [n, l] = q.shift();
        if (!n.left && !n.right) {
            return l;
        }
        if (n.left) q.push([n.left, l + 1]);
        if (n.right) q.push([n.right, l + 1]);
    }
};

console.log('minDepth: ', minDepth(binaryRoot));

// O(n) O(W)