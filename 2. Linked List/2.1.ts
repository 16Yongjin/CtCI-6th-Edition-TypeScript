import Node from './node'

console.log('Unique Test\n')
const node = new Node(10)
  .appendToTail(20)
  .appendToTail(30)
  .appendToTail(40)
  .appendToTail(20)
  .appendToTail(10)
  .appendToTail(10)
  .appendToTail(10)

console.log('Original Linked List')
node.print()
console.log('\nUnique Linked List')
Node.unique(node).print()
