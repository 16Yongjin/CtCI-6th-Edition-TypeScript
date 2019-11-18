import Node from './node'

console.log('Find Union Node\n')

const node1 = new Node(40)
  .appendToTail(50)
  .appendToTail(60)
  .appendToTail(70)

const node2 = new Node(10)
  .appendToTail(20)
  .appendToTail(30)
  .concat(node1)

console.log('node1 and node2 have 40 50 60 70 as union node:')

Node.findUnionNode(node1, node2).print()

console.log('\nnode3 and node 4 have no union node:')

const node3 = new Node(40)
  .appendToTail(50)
  .appendToTail(60)
  .appendToTail(70)

const node4 = new Node(10)
  .appendToTail(20)
  .appendToTail(30)
  .appendToTail(40)
  .appendToTail(50)
  .appendToTail(60)
  .appendToTail(70)

console.log(Node.findUnionNode(node3, node4))
