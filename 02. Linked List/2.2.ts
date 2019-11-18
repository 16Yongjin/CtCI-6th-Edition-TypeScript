import Node from './node'

console.log('Find k th node from behind\n')

const node = new Node(10)
  .appendToTail(20)
  .appendToTail(30)
  .appendToTail(40)
  .appendToTail(50)
  .appendToTail(60)

console.log('Original Linked List')
node.print()
console.log('\n2nd node from behind')
Node.fromBehind(node, 2).print()
