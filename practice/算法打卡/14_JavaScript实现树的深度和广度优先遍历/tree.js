/**
    多叉树的遍历复杂度取决于树的结构、深度和节点数量。以下是深度优先遍历（DFS）和广度优先遍历（BFS）的一般复杂度：

    深度优先遍历（DFS）
    时间复杂度： O(N)，其中 N 是树中的节点数。
    DFS 会访问每个节点一次。
    空间复杂度： O(H)，其中 H 是树的高度。
    递归调用堆栈的深度等于树的深度。在最坏情况下，如果树是线性的（每个节点都只有一个子节点），空间复杂度将是 O(N)。
    广度优先遍历（BFS）
    时间复杂度： O(N)，其中 N 是树中的节点数。
    BFS 会访问每个节点一次。
    空间复杂度： O(W)，其中 W 是树的最大宽度（即某一层上的最大节点数）。
    在最坏情况下，当树是平衡的时，树的宽度为2^(H-1)，其中 H 是树的高度。因此，空间复杂度是 O(2^(H-1))，但通常情况下，W 较小，空间复杂度可以视为 O(N)。
    在实践中，具体的复杂度可能会受到具体树结构的影响，例如树的平衡性、每个节点的子节点数量等。在选择遍历方式时，通常取决于问题的要求和性能的考虑。
 */
class MultiwayTreeNode { // 多叉树
    constructor(val) {
        this.val = val;
        this.children = [];
    }

    addChild(childNode) {
        this.children.push(childNode);
    }
}

const rootNode = new MultiwayTreeNode('root');

const child1 = new MultiwayTreeNode('child1');
const child2 = new MultiwayTreeNode('child2');

const grandChild1 = new MultiwayTreeNode('grandChild1');
const grandChild2 = new MultiwayTreeNode('grandChild2');

const grandChild3 = new MultiwayTreeNode('grandChild3');
const grandChild4 = new MultiwayTreeNode('grandChild4');

rootNode.addChild(child1);
rootNode.addChild(child2);

child1.addChild(grandChild1);
child1.addChild(grandChild2);
child2.addChild(grandChild3);
child2.addChild(grandChild4);

const MultiwayTreeDFS = function(root) {
    console.log(root.val);
    for (const child of root.children) {
        MultiwayTreeDFS(child);
    }
};

// MultiwayTreeDFS(rootNode);

const MultiwayTreeBFS = function(root) {
    const queue = [root];
    while (queue.length) {
        const node = queue.shift();
        console.log(node.val);
        queue.push(...node.children);
    }
};

MultiwayTreeBFS(rootNode);


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

const BinaryTreeDFS = function(node) {
    if (node === null) {
        return;
    }
    console.log(node.val);
    BinaryTreeDFS(node.left);
    BinaryTreeDFS(node.right);
};

BinaryTreeDFS(binaryRoot);

// 时间复杂度 O(N), 空间复杂度 O(W), 宽度，所有子节点
const BinaryTreeBFS = function(node) {
    if (node === null) {
        return;
    }
    const queue = [node];
    while (queue.length > 0) {
        const curr = queue.shift();
        console.log(curr.val);
        if (curr.left !== null) {
            queue.push(curr.left);
        }
        if (curr.right !== null) {
            queue.push(curr.right);
        }
    }
};

BinaryTreeBFS(binaryRoot);