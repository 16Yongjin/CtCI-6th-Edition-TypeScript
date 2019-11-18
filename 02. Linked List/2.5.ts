import Node from './node'

console.log('Add Two Number Test\n')
const node1 = new Node(1)
  .appendToTail(2)
  .appendToTail(3)
  .appendToTail(4)

const node2 = new Node(4).appendToTail(5).appendToTail(6)

console.log('4321 + 654 =', 4321 + 654)
const result1 = Node.addReversedNumberRepresentation(node1, node2)
console.log('result1 is', result1)

console.log()

console.log('1234 + 456 =', 1234 + 456)
const result2 = Node.addNumberRepresentation(node1, node2)
console.log('result2 is', result2)
