class BinaryTreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const root = new BinaryTreeNode('1');

root.left = new BinaryTreeNode('2');
root.right = new BinaryTreeNode('3');
root.left.left = new BinaryTreeNode('4');
root.left.right = new BinaryTreeNode('5');
root.right.left = new BinaryTreeNode('6');
root.right.right = new BinaryTreeNode('7');

const binaryTreeDFSByStack = function(node) {
    if (!node) return;
    const stack = [node];

    while(stack.length > 0) {
        const curr = stack.pop();
        console.log(curr.val);
        if (curr.right !== null) {
            stack.push(curr.right);
        }
        if (curr.left !== null) {
            stack.push(curr.left);
        }
    }
};

binaryTreeDFSByStack(root);

const NestedBinaryTreeDFS = function(node) {
    console.log(node.val);
    NestedBinaryTreeDFS(node.left);
    NestedBinaryTreeDFS(node.right);
};


// https://leetcode.cn/problems/binary-tree-preorder-traversal/
// function TreeNode(val, left, right) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
// }

// function TreeDFSByStack(root) {
//     if (!root) return [];
    
//     const result = [];
//     const stack = [root];

//     while (stack.length > 0) {
//         const curr = stack.pop();
//         result.push(curr.val);
//         if (curr.right) {
//             stack.push(curr.right);
//         }
//         if (curr.left) {
//             stack.push(curr.left);
//         }
//     }

//     return result;
// }