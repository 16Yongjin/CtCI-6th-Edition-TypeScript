export default class BidirectionalGraph {
  vertices: any
  edges: object

  constructor() {
    this.vertices = [] // 노드
    this.edges = {} // 연결
  }

  get size() {
    return this.vertices.length
  }

  get relations() {
    return (
      Object.values(this.edges).reduce((acc, edge) => acc + edge.length, 0) / 2
    )
  }

  addVertex(...vertices) {
    for (let vertex of vertices) {
      this.vertices.push(vertex)
      this.edges[vertex] = []
    }
  }

  removeVertex(vertex) {
    const index = this.vertices.indexOf(vertex)
    if (!~index) return console.log('No vertext to remove')

    this.vertices.splice(index, 1)

    while (this.edges[vertex].length) {
      const adjacentVertex = this.edges[vertex].pop()
      this.removeEdge(adjacentVertex, vertex)
    }
  }

  addEdge(vertex1, vertex2) {
    this.edges[vertex1].push(vertex2)
    this.edges[vertex2].push(vertex1)
  }

  removeEdge(vertex1, vertex2) {
    const index1 = this.edges[vertex1]
      ? this.edges[vertex1].indexOf(vertex2)
      : -1
    const index2 = this.edges[vertex2]
      ? this.edges[vertex2].indexOf(vertex1)
      : -1

    if (~index1) this.edges[vertex1].splice(index1, 1)
    if (~index2) this.edges[vertex2].splice(index2, 1)
  }

  traverseDFS(vertex, fn) {
    if (!~this.vertices.indexOf(vertex)) return console.log('Vertex not found')

    const visited = {}
    this._traverseDFS(vertex, visited, fn)
  }

  _traverseDFS(vertex, visited, fn) {
    visited[vertex] = true

    fn(vertex)

    for (let v of this.edges[vertex])
      if (!visited[v]) this._traverseDFS(v, visited, fn)
  }

  traverseBFS(vertex, fn) {
    if (!~this.vertices.indexOf(vertex)) return console.log('Vertex not found')

    const queue = [vertex]
    const visited = { [vertex]: true }

    while (queue.length) {
      vertex = queue.shift()
      fn(vertex)

      for (let v of this.edges[vertex]) {
        if (!visited[v]) {
          visited[v] = true
          queue.push(v)
        }
      }
    }
  }

  pathFromTo(vertexSource, vertexDestination) {
    if (!~this.vertices.indexOf(vertexSource))
      return console.log('Vertex not found')

    const queue = [vertexSource]
    const visited = { [vertexSource]: true }
    const paths = {}
    // 시작 지점에서 갈 수 있는 지점을 다 가보고
    while (queue.length) {
      const vertex = queue.shift()
      for (let v of this.edges[vertex]) {
        if (!visited[v]) {
          visited[v] = true
          queue.push(v)
          paths[v] = vertex
        }
      }
    }

    if (!visited[vertexDestination]) return undefined
    // 도착 지점에서 시작 지점으로 다시 돌아오기
    const path = []
    for (let i = vertexDestination; i !== vertexSource; i = paths[i]) {
      path.push(i)
    }
    path.push(vertexSource)
    return path.reverse().join('-')
  }

  print() {
    console.log(
      this.vertices
        .map(vertex => `${vertex} -> ${this.edges[vertex].join(', ').trim()}`)
        .join('\n')
    )
  }
}
