// 禁用递归
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

// First order traversal
const FirstOrderTraversal = function(tree) {
    if (!tree) return;
    const stack = [tree];

    while(stack.length > 0) {
        const curr = stack.pop();
        console.log(curr.val);

        if (curr.right) {
            stack.push(curr.right);
        }
        if (curr.left) {
            stack.push(curr.left);
        }
    }
};

FirstOrderTraversal(binaryRoot);

// Middle order traversal
const MiddleOrderTraversal = function(tree) {
    const res = [];
    const stack = [];
    let curr = tree;

    while (stack.length > 0 || curr) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        res.push(curr.val);
        curr = curr.right;
    }

    return res;
};

const midTree = MiddleOrderTraversal(binaryRoot);
console.log('midTree ', midTree);

// Post-order traversal
const PostOrderTraversal = function(tree) {
    const stack = [];
    const res = [];
    let lastVisitedNode = null;

    while (tree || stack.length > 0) {
        if (tree) {
            stack.push(tree);
            tree = tree.left;
        } else {
            const node = stack[stack.length - 1];
            // 如果右子树存在且没有遍历过，则遍历右子树
            if (node.right && node.right !== lastVisitedNode) {
                tree = node.right;
            } else {
                // 右子树遍历过就遍历当前节点
                res.push(node.val);
                lastVisitedNode = stack.pop();
            }
        }
    }
    return res;
};

const postTree = PostOrderTraversal(binaryRoot);
console.log('postTree ', postTree);