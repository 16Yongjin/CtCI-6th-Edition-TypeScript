import TreeNode from './treeNode'
import Node from '../linkedList/node'
import printTree from './printTree'

function _createLevelLinkedList(arr: Node[], node: TreeNode, level: number) {
  if (!node) return

  if (!arr[level]) arr[level] = new Node(node.data)
  else arr[level].appendToTail(node.data)

  _createLevelLinkedList(arr, node.left, level + 1)
  _createLevelLinkedList(arr, node.right, level + 1)
}

function createLevelLinkedList(node: TreeNode): Node[] {
  const array: Node[] = []

  _createLevelLinkedList(array, node, 0)

  return array
}

const tree = new TreeNode(3)

for (let v of [1, 5, 0, 2, 4, 6]) {
  tree.insertInOrder(v)
}

console.log('tree looks like :')
printTree(tree)

console.log('\nresult :\n')
console.log(createLevelLinkedList(tree).map(n => n.toArray()))
