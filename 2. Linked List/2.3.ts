import Node from './node'

function deleteNode(node: Node) {
  if (node && node.next) {
    node.data = node.next.data
    node = node.next
  }
}

console.log('Remove Middle Node\n')
const node = new Node(10)
  .appendToTail(20)
  .appendToTail(30)
  .appendToTail(40)
  .appendToTail(50)

console.log('Original Linked List')
node.print()

console.log('\nLinked List without Middle Node 1')
Node.deleteMiddle(node).print()

console.log('\nLinked List without Middle Node 2')
Node.deleteMiddle(node).print()

console.log('\nLinked List without Middle Node 3')
Node.deleteMiddle(node).print()

console.log('\nFirst and Last Node should not be deleted')
Node.deleteMiddle(node).print()
