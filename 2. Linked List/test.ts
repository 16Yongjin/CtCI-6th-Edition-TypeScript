import Node from './node'

const node = new Node(10)

node
  .appendToTail(20)
  .appendToTail(30)
  .appendToTail(20)
  .appendToTail(20)
  .appendToTail(10)

// Node.deleteNode(node, 20)

const node2 = Node.unique(node)

// Node.fromBack(node2, 4).print()
// node2.print()
// Node.deleteMiddle(node2).print()

node2.appendToTail(40)
// node2.appendToTail(50)
// node2.print()
Node.deleteMiddle(node2).print()

Node.deleteMiddle(new Node(10).appendToTail(20)).print()
// Node.deleteAt(node2, 1).print()

// console.log(Node.fromBack(node, 2))

// node.concat(node2).print()
// Node.appendToHead(node, 0).print()

Node.fromArray(1, 2, 3, 4, 5).print()
