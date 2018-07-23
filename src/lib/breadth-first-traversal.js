export default (startNode, endNode, goalNode) => {
  const queue = [];

  const visitedNodes = new Set();

  const parentMap = new Map();

  queue.enqueue(startNode);
  visitedNodes.add(startNode);

  while (queue.length) {
    const currentNode = queue.dequeue();
  }

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
    queue.enqueue(neighborNode);
  }
}
return null;
