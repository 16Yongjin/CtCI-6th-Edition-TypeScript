import TreeNode from './treeNode'
import printTree from './printTree'
import arrayToBST from './4.2-1'

function countPathsWithSum(root: TreeNode, targetSum: number): number {
  if (!root) return 0

  const pathsFromRoot = countPathsWithSumFromNode(root, targetSum, 0)
  const pathsFromLeft = countPathsWithSum(root.left, targetSum)
  const pathsFromRight = countPathsWithSum(root.right, targetSum)

  return pathsFromRoot + pathsFromLeft + pathsFromRight
}

function countPathsWithSumFromNode(
  node: TreeNode,
  targetSum: number,
  currentSum: number
): number {
  if (!node) return 0

  currentSum += node.data

  let totalPaths = 0
  if (currentSum === targetSum) totalPaths++

  totalPaths += countPathsWithSumFromNode(node.left, targetSum, currentSum)
  totalPaths += countPathsWithSumFromNode(node.right, targetSum, currentSum)

  return totalPaths
}

// TEST CODE

const range = (n, l = []) => {
  while (n--) l.push(n)
  return l
}

const tree = arrayToBST(range(10))

printTree(tree)

console.log(countPathsWithSum(tree, 11))
