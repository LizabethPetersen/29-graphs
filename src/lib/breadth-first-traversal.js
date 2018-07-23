export default (graph, startNode, goalNode) => {
  const queue = [];
  const visitedNodes = new Set();

  const parentMap = new Map();
  const currentNode = startNode.next;

  queue.push(startNode);
  
  visitedNodes.add(startNode);

  while (queue.length) {
    currentNode.queue.shift();

    if (currentNode === goalNode) {
      return parentMap;
    }

    const neighbors = graph.getNeighbors(currentNode);
    console.log(neighbors, 'NEIGHBORS');

    /* eslint-disable */
  for (let neighbor of neighbors) {
    let neighborNode = neighbor.node;

    if (visitedNodes.has(neighborNode)) {
      continue;
    }

    visitedNodes.add(neighborNode);

    parentMap.set(neighborNode, currentNode);
    queue.shift(neighborNode);
  }
}
return null;
}
