import Node from './node'

const node = Node.fromArray(3, 4, 5, 6)

node.concat(node)

const circularNode = Node.fromArray(1, 2).concat(node)

console.log(
  'Should find beginning circular node',
  node,
  'in',
  circularNode,
  ':\n'
)
console.log(Node.findBegginningOfCircle(circularNode))

console.log('\nCannot find node in linear cycle:')
console.log(Node.findBegginningOfCircle(Node.fromArray(1, 2, 3, 4, 5, 6)))
