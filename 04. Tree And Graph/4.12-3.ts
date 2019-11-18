import TreeNode from './treeNode'
import arrayToBST from './4.2-1'
import printTree from './printTree'

function countPathsWithSum(root: TreeNode, targetSum: number): number {
  return _countPathsWithSum(root, targetSum, 0, new Map<number, number>())
}

function _countPathsWithSum(
  node: TreeNode,
  targetSum: number,
  runningSum: number,
  pathCount: Map<number, number>
): number {
  if (!node) return 0

  runningSum += node.data
  const sum = runningSum - targetSum
  let totalPaths = pathCount.get(sum) || 0

  if (runningSum === targetSum) totalPaths++

  incrementHashTable(pathCount, runningSum, 1)
  totalPaths += _countPathsWithSum(node.left, targetSum, runningSum, pathCount)
  totalPaths += _countPathsWithSum(node.right, targetSum, runningSum, pathCount)
  incrementHashTable(pathCount, runningSum, -1)

  return totalPaths
}

function incrementHashTable(
  hashTable: Map<number, number>,
  key: number,
  delta: number
) {
  const newCount = (hashTable.get(key) || 0) + delta
  if (newCount === 0) hashTable.delete(key)
  else hashTable.set(key, newCount)

  console.log(hashTable)
}

// TEST CODE BELOW

const range = (n: number, l = []): number[] => {
  while (n--) l.push(n)
  return l
}

const tree = arrayToBST(range(10))

printTree(tree)

console.log(countPathsWithSum(tree, 11))
