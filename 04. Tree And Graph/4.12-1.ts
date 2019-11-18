import TreeNode from './treeNode'
import printTree from './printTree'
import arrayToBST from './4.2-1'

function countPathSumEqualTo(tree: TreeNode, target: number): number {
  let pathCount = 0

  function _countPathSumEqualTo(tree: TreeNode, sum: number) {
    if (!tree) return

    sum += tree.data

    if (sum === target) return pathCount++

    _countPathSumEqualTo(tree.left, sum)
    _countPathSumEqualTo(tree.right, sum)

    if (sum !== 0) {
      _countPathSumEqualTo(tree.left, 0)
      _countPathSumEqualTo(tree.right, 0)
    }
  }

  _countPathSumEqualTo(tree, 0)

  return pathCount
}

const range = (n, l = []) => {
  while (n--) l.push(n)
  return l
}

const tree = arrayToBST(range(10))

printTree(tree)

console.log(countPathSumEqualTo(tree, 11))
