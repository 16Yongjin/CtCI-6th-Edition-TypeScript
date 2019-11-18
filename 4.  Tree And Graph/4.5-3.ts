import TreeNode from './treeNode'

// 각 노드마다 최대 최소를 정해서 그 범위 안에 들어가는 지 확인

function checkBST(node: TreeNode): boolean {
  function _checkBST(node: TreeNode, min: number, max: number): boolean {
    if (!node) return true

    if ((min !== null && node.data <= min) || (max !== null && node.data > max))
      return false

    if (
      !_checkBST(node.left, min, node.data) ||
      !_checkBST(node.right, node.data, max)
    )
      return false

    return true
  }

  return _checkBST(node, null, null)
}
