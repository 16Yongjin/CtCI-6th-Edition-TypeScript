import TreeNode from './treeNode'
import arrayToBST from './4.2-1'
import printTree from './printTree'

function isSubTree(node1: TreeNode, node2: TreeNode) {
  const arr1 = []
  const arr2 = []

  getOrderArray(node1, arr1)
  getOrderArray(node2, arr2)

  const s1 = arr1.join('')
  const s2 = arr2.join('')

  return s1.includes(s2)
}

function getOrderArray(node: TreeNode, array: string[]) {
  if (!node) {
    return array.push(' ')
  }

  array.push(node.data.toString())
  getOrderArray(node.left, array)
  getOrderArray(node.right, array)
}

const tree1 = arrayToBST([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])
const tree2 = arrayToBST([8, 9, 10])

console.log('Tree1 :')
printTree(tree1)
console.log('\nTree2 :')
printTree(tree2)

console.log(isSubTree(tree1, tree2))
