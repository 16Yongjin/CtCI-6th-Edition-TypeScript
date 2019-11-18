import TreeNode from './treeNode'
import printTree from './printTree'

function treeSize(tree: TreeNode) {
  const leftTreeSize = tree.left ? treeSize(tree.left) : 0
  const rightTreeSize = tree.right ? treeSize(tree.right) : 0

  return 1 + leftTreeSize + rightTreeSize
}

function isBalanced(tree: TreeNode): boolean {
  if (!tree) return true

  const leftTreeSize = tree.left ? treeSize(tree.left) : 0
  const rightTreeSize = tree.right ? treeSize(tree.right) : 0

  return Math.abs(leftTreeSize - rightTreeSize) <= 1
}

const tree = new TreeNode(3)

for (let v of [1, 5, 0, 2, 4, 6, 8, 9]) {
  tree.insertInOrder(v)
}

printTree(tree)
console.log(treeSize(tree))
console.log(isBalanced(tree))
