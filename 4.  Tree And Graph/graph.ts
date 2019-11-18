export default class Graph {
  nodes: object

  constructor() {
    this.nodes = {}
  }

  addEdge(node, edge): Graph {
    if (this.nodes[node] && !this.nodes[node][edge])
      this.nodes[node][edge] = true

    return this
  }

  addNode(value): Graph {
    if (!this.nodes[value]) this.nodes[value] = {}

    return this
  }

  addNodes(...values): Graph {
    for (let value of values) {
      this.addNode(value)
    }

    return this
  }

  findEdges(node) {
    return Object.keys(this.nodes[node] || {})
  }

  findChildren(node) {
    return Object.keys(this.findEdges(node))
  }

  hasEdge(node, edge): boolean {
    return !!(this.nodes[node] && this.nodes[node][edge])
  }

  hasNode(node): boolean {
    return !!this.nodes[node]
  }

  removeEdge(node, edge): Graph {
    if (this.nodes[node]) delete this.nodes[node][edge]

    return this
  }

  removeNode(node): Graph {
    if (this.nodes[node]) {
      delete this.nodes[node]

      for (var currNode in this.nodes) {
        if (this.nodes[currNode][node]) {
          delete this.nodes[currNode][node]
        }
      }
    }

    return this
  }

  traverseDFS(node, fn) {
    if (!this.hasNode(node)) return console.log('Node not found')

    this._traverseDFS(node, {}, fn)
  }

  _traverseDFS(node, visited, fn) {
    visited[node] = true

    fn(node)

    for (let n of this.findEdges(node))
      if (!visited[n]) this._traverseDFS(n, visited, fn)
  }

  toArrayDFS(node): any[] {
    const arr = []
    this.traverseDFS(node, v => arr.push(v))

    return arr
  }
  toArrayBFS(node): any[] {
    const arr = []
    this.traverseBFS(node, v => arr.push(v))

    return arr
  }

  traverseBFS(node, fn) {
    if (!this.hasNode(node)) return console.log('Node not found')

    const queue = [node]
    const visited = { [node]: true }

    while (queue.length) {
      node = queue.shift()
      fn(node)

      for (let n of this.findEdges(node))
        if (!visited[n]) visited[n] = true && queue.push(n)
    }
  }

  hasPath(node1, node2) {
    if (!this.hasNode(node1) && !this.hasNode(node2))
      return console.log('Node not found'), false

    const queue = [node1]
    const visited = { [node1]: true }

    while (queue.length) {
      node1 = queue.shift()

      if (node1 == node2) return true

      for (let n of this.findEdges(node1))
        if (!visited[n]) visited[n] = true && queue.push(n)
    }

    return false
  }
}
