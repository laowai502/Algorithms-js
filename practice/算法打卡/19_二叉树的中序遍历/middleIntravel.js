class BinaryTreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const root = new BinaryTreeNode(3);
root.left = new BinaryTreeNode(9);
root.right = new BinaryTreeNode(20);
root.right.left = new BinaryTreeNode(15);
root.right.right = new BinaryTreeNode(7);

const middleOrderIntravel = function(root) {
    const res = [];
    const stack = [];
    let node = root;

    while (stack.length > 0 || node) {
        while (node) {
            stack.push(node);
            node = node.left;
        }
        const cur = stack.pop();
        res.push(cur.val);
        node = cur.right;
    }

    return res;
};

console.log(middleOrderIntravel(root));