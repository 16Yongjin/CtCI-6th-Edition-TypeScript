/*
  left.data <=  current.data < right.data 를 만족하지만 
  모든 노드에 대해 
  현재 노드가 모든 왼쪽 노드보다 크거나 같고 모든 오른쪽 노드보다 작다는 
  조건을 만족하는지 확인 불가
*/

import TreeNode from './treeNode'

function isBST(tree: TreeNode): boolean {
  if (!tree) return true

  if (tree.left && tree.data <= tree.left.data) return false

  if (tree.right && tree.data >= tree.right.data) return false

  return isBST(tree.left) && isBST(tree.right)
}

const tree = new TreeNode(3)

for (let v of [1, 5, 0, 2, 4, 6]) {
  tree.insertInOrder(v)
}

console.log(isBST(tree))
