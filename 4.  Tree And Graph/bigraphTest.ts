import Graph from './bidirectianlGraph'
const graph = new Graph()

graph.addVertex(1, 2, 3, 4, 5, 6)
console.log('Added Verteces')
graph.print() // 1 -> | 2 -> | 3 -> | 4 -> | 5 -> | 6 ->
graph.addEdge(1, 2)
graph.addEdge(1, 5)
graph.addEdge(2, 3)
graph.addEdge(2, 5)
graph.addEdge(3, 4)
graph.addEdge(4, 5)
graph.addEdge(4, 6)

console.log('Added Edges')
graph.print()

console.log('Graph size (number of vertices):', graph.size) // => 6
console.log('Graph relations (number of edges):', graph.relations) // => 7

console.log('DFS traverse')
graph.traverseDFS(1, console.log) // => 1 2 3 4 5 6
console.log('------------')
console.log('DFS traverse')
graph.traverseBFS(1, console.log) // => 1 2 5 3 4 6
console.log('------------')

console.log('Non existed Vertex')
graph.traverseDFS(0, console.log) // => 'Vertex not found'
graph.traverseBFS(0, console.log) // => 'Vertex not found'

console.log('Path from 6 to 1:', graph.pathFromTo(6, 1)) // => 6-4-5-1
console.log('Path from 3 to 5:', graph.pathFromTo(3, 5)) // => 3-2-5
graph.removeEdge(1, 2)
graph.removeEdge(4, 5)
graph.removeEdge(10, 11)
console.log('Removed 2 edges and one wrong edges')
console.log('Graph relations (number of edges):', graph.relations) // => 5
console.log('Path from 6 to 1:', graph.pathFromTo(6, 1)) // => 6-4-3-2-5-1

graph.addEdge(1, 2)
graph.addEdge(4, 5)
console.log('Added 2 edges')
console.log('Graph relations (number of edges):', graph.relations) // => 7
console.log('Path from 6 to 1:', graph.pathFromTo(6, 1)) // => 6-4-5-1
graph.removeVertex(5)
console.log('Graph size (number of vertices):', graph.size) // => 5
console.log('Graph relations (number of edges):', graph.relations) // => 4
console.log('Path from 6 to 1:', graph.pathFromTo(6, 1)) // => 6-4-3-2-1
