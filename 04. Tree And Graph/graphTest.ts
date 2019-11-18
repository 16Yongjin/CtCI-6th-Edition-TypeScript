import Graph from './graph'

const graph = new Graph()

graph
  .addNodes(0, 1, 2, 3, 4, 5)
  .addEdge(0, 1)
  .addEdge(0, 4)
  .addEdge(0, 5)
  .addEdge(1, 3)
  .addEdge(1, 4)
  .addEdge(2, 1)
  .addEdge(3, 2)
  .addEdge(3, 4)

// graph.traverseDFS(0, console.log)

graph.traverseBFS(0, console.log)
