import TreeNode from './treeNode'

function isSubTree(tree1: TreeNode, tree2: TreeNode): boolean {
  if (!tree2) return true
  else return subTree(tree1, tree2)
}

function subTree(tree1: TreeNode, tree2: TreeNode): boolean {
  if (!tree1) return false
  else if (tree1.data === tree2.data && matchTree(tree1, tree2)) return true
  else return subTree(tree1.left, tree2) || subTree(tree1.right, tree2)
}

function matchTree(tree1: TreeNode, tree2: TreeNode): boolean {
  if (!tree1 && !tree2) return true
  else if (!tree1 || !tree2) return false
  else if (tree1.data !== tree2.data) return false
  else
    return (
      matchTree(tree1.left, tree2.left) && matchTree(tree1.right, tree2.left)
    )
}
