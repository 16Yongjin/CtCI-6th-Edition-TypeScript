import TreeNode from './treeNode'

export default function printTree(tree: TreeNode) {
  let indent = 1

  function walk(tree: TreeNode) {
    if (!tree) return

    console.log('  '.repeat(indent) + 'ㄴ', tree.data)

    indent++
    walk(tree.left)
    walk(tree.right)
    indent--
  }

  walk(tree)
}
