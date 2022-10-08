export class Graph<T> {
  constructor(public adjacenyList: { [vertex: string]: string[] } = {}) {}

  addVertex(vertex: string) {
    if (this.adjacenyList[vertex]) return false;

    this.adjacenyList[vertex] = [];

    return true;
  }

  addEdge(vertexOne: string, vertexTwo: string) {
    if (!this.adjacenyList[vertexOne] || !this.adjacenyList[vertexTwo])
      return false;

    this.adjacenyList[vertexOne].push(vertexTwo);
    this.adjacenyList[vertexTwo].push(vertexOne);

    return true;
  }

  removeVertex(vertex: string) {
    if (!this.adjacenyList[vertex]) return false;

    while (this.adjacenyList[vertex].length) {
      const adjacentVertex: string | undefined =
        this.adjacenyList[vertex].pop();

      if (adjacentVertex) {
        this.removeEdge(vertex, adjacentVertex);
      }
    }

    delete this.adjacenyList[vertex];

    return true;
  }

  removeEdge(vertexOne: string, vertexTwo: string) {
    if (!this.adjacenyList[vertexOne] || !this.adjacenyList[vertexTwo])
      return false;

    let indexToRemove: number = this.adjacenyList[vertexOne].findIndex(
      (vertex) => vertex === vertexTwo
    );

    if (indexToRemove > -1)
      this.adjacenyList[vertexOne].splice(indexToRemove, 1);

    indexToRemove = this.adjacenyList[vertexTwo].findIndex(
      (vertex) => vertex === vertexOne
    );

    if (indexToRemove > -1)
      this.adjacenyList[vertexTwo].splice(indexToRemove, 1);
  }
}
