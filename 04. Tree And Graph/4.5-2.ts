import TreeNode from './treeNode'

/*
BST의 전위순회는 크기 순으로 순회와 같다.
순회한 데이터가 정렬이면 BST이다.
데이터의 중복이 없을 때만 유효하다
*/

function checkBST(node: TreeNode) {
  let lastVisited = null

  function _checkBST(node: TreeNode): boolean {
    if (!node) return true

    if (!_checkBST(node.left)) return false

    if (lastVisited && node.data <= lastVisited) return false

    lastVisited = node.data

    if (!_checkBST(node.right)) return false

    return true
  }

  return _checkBST(node)
}
