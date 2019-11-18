import TreeNode from './treeNode'
import arrayToBST from './4.2-1'
import printTree from './printTree'

function findCommonParent(node1: TreeNode, node2: TreeNode): TreeNode {
  for (let p1 = node1.parent; p1; p1 = p1.parent) {
    for (let p2 = node2.parent; p2; p2 = p2.parent) {
      if (p1 === p2) return p1
    }
  }

  return null
}

const root = arrayToBST([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
printTree(root)

console.log(findCommonParent(root.left.left.right, root.right.right.left).data)
