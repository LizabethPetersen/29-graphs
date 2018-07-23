export default class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(node) {
    this.adjacencyList.set(node, []);
  }

  addEdge(startNode, endNode) {
    const hasNodes = this.adjacencyList.has(startNode) || this.adjacencyList.has(endNode);
    if (!hasNodes) {
      throw new Error('Invalid Nodes');
    }

    const adjacencies = this.adjacencyList.get(startNode);
    adjacencies.push({
      node: endNode,
    });
  }

  getNeighbors(node) {
    if (!this.adjacencyList.has(node)) {
      throw new Error('Invalid Node');
    }
    return [...this.adjacencyList.get(node)];
  }
}
