import TreeNode from './treeNode'
import arrayToBST from './4.2-1'

/*
  아래 답은 node1의 하위 노드 중 node2의 루트노트가 있는지만 확인해서 틀렸다
  주소가 달라도 트리 내부 데이터가 같은지 확인해야한다.
*/

function findNodeInOrder(node1: TreeNode, node2: TreeNode) {
  if (node1) {
    return findNodeInOrder(node1.left, node2) ||
      findNodeInOrder(node1.right, node2) ||
      node1 === node2
      ? node1
      : null
  }

  return null
}

function isSubTree(node1: TreeNode, node2: TreeNode): boolean {
  return !!findNodeInOrder(node1, node2)
}

const tree = arrayToBST([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

console.log(isSubTree(tree, tree.right.right))
