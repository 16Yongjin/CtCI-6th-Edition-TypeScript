import Graph from './graph'

/*
  자식이 없는 즉, 종속이 없는 노드를 순서배열에 넣고 그 노드를 제거하는 것을 반복한다.
  * 위상 정렬과 같다
*/

function findNodeWithNoChildren(graph: Graph) {
  for (let node in graph.nodes)
    if (graph.findChildren(node).length <= 0) return node

  return undefined
}

function orderProject(projects: string[], dependencies: string[][]) {
  const graph = new Graph()

  for (let project of projects) graph.addNode(project)

  for (let [first, second] of dependencies) graph.addEdge(second, first)

  let order: string[] = []

  let currentNode = findNodeWithNoChildren(graph)

  while (currentNode) {
    order.push(currentNode)
    graph.removeNode(currentNode)
    currentNode = findNodeWithNoChildren(graph)
  }

  return order.length === projects.length
    ? order
    : Error('Cycle Dependency Error')
}

console.log(
  orderProject(
    ['a', 'b', 'c', 'd', 'e', 'f'],
    [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']]
  )
)

console.log(
  orderProject(
    ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    [
      ['f', 'c'],
      ['f', 'b'],
      ['f', 'a'],
      ['c', 'a'],
      ['b', 'a'],
      ['a', 'e'],
      ['b', 'e'],
      ['d', 'g']
      // ['c', 'f']
    ]
  )
)
