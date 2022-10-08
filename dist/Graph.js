export class Graph {
    constructor(adjacenyList = {}) {
        this.adjacenyList = adjacenyList;
    }
    addVertex(vertex) {
        if (this.adjacenyList[vertex])
            return false;
        this.adjacenyList[vertex] = [];
        return true;
    }
    addEdge(vertexOne, vertexTwo) {
        if (!this.adjacenyList[vertexOne] || !this.adjacenyList[vertexTwo])
            return false;
        this.adjacenyList[vertexOne].push(vertexTwo);
        this.adjacenyList[vertexTwo].push(vertexOne);
        return true;
    }
    removeVertex(vertex) {
        if (!this.adjacenyList[vertex])
            return false;
        while (this.adjacenyList[vertex].length) {
            const adjacentVertex = this.adjacenyList[vertex].pop();
            if (adjacentVertex) {
                this.removeEdge(vertex, adjacentVertex);
            }
        }
        delete this.adjacenyList[vertex];
        return true;
    }
    removeEdge(vertexOne, vertexTwo) {
        if (!this.adjacenyList[vertexOne] || !this.adjacenyList[vertexTwo])
            return false;
        let indexToRemove = this.adjacenyList[vertexOne].findIndex((vertex) => vertex === vertexTwo);
        if (indexToRemove > -1)
            this.adjacenyList[vertexOne].splice(indexToRemove, 1);
        indexToRemove = this.adjacenyList[vertexTwo].findIndex((vertex) => vertex === vertexOne);
        if (indexToRemove > -1)
            this.adjacenyList[vertexTwo].splice(indexToRemove, 1);
    }
}
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "D");
graph.addEdge("A", "B");
graph.removeVertex("A");
console.log(graph.adjacenyList);
