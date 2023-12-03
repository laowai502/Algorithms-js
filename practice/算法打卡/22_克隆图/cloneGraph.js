/**
 * https://leetcode.cn/problems/clone-graph/
 * 
 */


// Definition for a Node.
function GraphNode(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    if (!node) return null;

    const visited = new Map();
    const stack = [];

    const clone = new GraphNode(node.nodeValue, []);
    visited.set(node, clone);
    stack.push(node);

    while(stack.length > 0) {
        const cur = stack.pop();
        const cloneCur = visited.get(cur);

        for (let neighbor of cur.neighbors) {
            if (!visited.has(neighbor)) {
                const cloneNeigbor = new GraphNode(neighbor.val, []);
                visited.set(neighbor, cloneNeigbor);
                stack.push(neighbor);
            }
            cloneCur.neighbors.push(visited.get(neighbor));
        }
    }

    return clone;
};