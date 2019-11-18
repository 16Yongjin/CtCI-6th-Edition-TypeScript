import TreeNode from './treeNode'
import printTree from './printTree'

function createMinimalBST(array: number[]): TreeNode {
  return _createMinimalBST(array, 0, array.length - 1)
}

function _createMinimalBST(
  array: number[],
  start: number,
  end: number
): TreeNode {
  if (end < start) return null

  const mid = Math.floor((start + end) / 2)
  const node = new TreeNode(array[mid])
  node.left = _createMinimalBST(array, start, mid - 1)
  node.right = _createMinimalBST(array, mid + 1, end)

  return node
}

printTree(createMinimalBST([0, 1, 2, 3, 4, 5, 6]))
