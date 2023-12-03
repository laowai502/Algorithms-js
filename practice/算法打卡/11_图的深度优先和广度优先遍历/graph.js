class Graph {
    constructor() {
        this.vertices = {};
    }

    addVertex(vertex) {
        if (!this.vertices[vertex]) {
            this.vertices[vertex] = [];
        }
    }

    addEdge(from, to) {
        if (!this.vertices[from] || !this.vertices[to]) {
            return;
        }
        this.vertices[from].push(to);
        this.vertices[to].push(from); // 如果是有向图，可以忽略这一步
    }


    // 时间复杂度 O(V + E)
    // 空间复杂度 O(2V) => O(V) Vertex Edge
    depthFirstSearch(startVertex, visited = {}) {
        if (!this.vertices[startVertex]) {
            return;
        }

        visited[startVertex] = true;
        console.log(startVertex);

        for (const neighbor of this.vertices[startVertex]) {
            if (!visited[neighbor]) {
                this.depthFirstSearch(neighbor, visited);
            }
        }
    }

    // 时间复杂度 O(V + E)
    // 空间复杂度 O(V)
    breadthFirstSearch(startVertex) {
        if (!this.vertices[startVertex]) {
            return;
        }

        const visited = {};
        const queue = [startVertex];
        visited[startVertex] = true;

        while (queue.length > 0) {
            const currentVertex = queue.shift();
            console.log(currentVertex);

            for (const neighbor of this.vertices[currentVertex]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('D', 'F');
graph.addEdge('C', 'E');
graph.addEdge('E', 'A');


console.log(graph.vertices);

graph.depthFirstSearch('A');
graph.breadthFirstSearch('A');

/*
  A: [ 'B', 'C', 'E' ],
  B: [ 'A', 'D' ],
  C: [ 'A', 'E' ],
  D: [ 'B', 'F' ],
  E: [ 'C', 'A' ],
  F: [ 'D' ]
*/

//   A B C D E E F G
// A 1 1 1 0 1 0 1 0
// B 0 1 1 0 1 0 1 0
// C 1 0 1 0 1 0 1 0
// D 1 0 1 0 1 0 1 1
// E 0 0 1 0 1 0 1 0
// F 0 1 1 0 1 0 1 0
// G 0 1 1 0 1 0 1 0