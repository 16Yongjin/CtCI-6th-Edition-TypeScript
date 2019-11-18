import TreeNode from './treeNode'
import arrayToBST from './4.2-1'
import printTree from './printTree'

/*
  두 노드의 높이를 구하고 높이를 맞춘다.
  높이가 같아진 두 노드가 같은 부모를 만날 때까지 위로 올린다.
*/

function depth(node: TreeNode) {
  let depth = 0
  while (node) {
    node = node.parent
    depth++
  }

  return depth
}

function goUpBy(node: TreeNode, delta: number): TreeNode {
  while (delta > 0 && node) {
    node = node.parent
    delta--
  }
  return node
}

function findCommonAncestor(node1: TreeNode, node2: TreeNode): TreeNode {
  const delta = depth(node1) - depth(node2)
  let first = delta > 0 ? node1 : node2
  let second = delta > 0 ? node2 : node1
  second = goUpBy(second, Math.abs(delta))

  while (first && second && first !== second) {
    first = first.parent
    second = second.parent
  }

  return first && second ? first : second
}

const root = arrayToBST([
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17
])
printTree(root)

console.log(
  findCommonAncestor(root.left.left.right, root.right.right.left).data
)
