import Node from './node'

console.log('Split List Test\n')
const node = new Node(3)
  .appendToTail(5)
  .appendToTail(8)
  .appendToTail(5)
  .appendToTail(10)
  .appendToTail(2)
  .appendToTail(1)

console.log('Original Linked List')
node.print()
console.log('\nSplitted List')
Node.unstableSplit(node, 5).print()
