import TreeNode from './treeNode'
import printTree from './printTree'

function middleIndex(array: number[]) {
  return Math.floor(array.length / 2)
}

function middleElement(array: number[]) {
  return array[middleIndex(array)]
}

function getLeftHalf(array: number[]) {
  return array.slice(0, middleIndex(array))
}

function getRightHalf(array: number[]) {
  return array.slice(middleIndex(array) + 1)
}

function insertMiddle(tree: TreeNode, array: number[]) {
  if (!array.length) return

  tree.insertInOrder(middleElement(array))

  insertMiddle(tree, getLeftHalf(array))
  insertMiddle(tree, getRightHalf(array))
}

function arrayToBST(array: number[]): TreeNode {
  const tree = new TreeNode(middleElement(array))

  insertMiddle(tree, getLeftHalf(array))
  insertMiddle(tree, getRightHalf(array))

  return tree
}

// printTree(
//   arrayToBST([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])
// )

export default arrayToBST
