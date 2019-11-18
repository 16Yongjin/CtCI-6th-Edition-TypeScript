import TreeNode from './treeNode'
import printTree from './printTree'

/*
  이진 탐색 트리에서 주어진 노드 다음 노드는 
  주어진 노드의 값보다 한 단계 큰 값을 가진 노드이다.
  
  1. 오른쪽 자식 노드가 있으면 오른쪽 자식의 마지막 왼쪽 자식이 다음 노드,

  오른쪽 자식 노드가 없을 시
  2. 현재 노드가 부모의 왼쪽 자식 노드면 현재 노드의 부모 노드가 다음 노드

  3. 현재 노드가 부모의 오른쪽 자식 노드면
  부모 노드 중에 아직 순회 못한 노드를 찾는다.
  계속 부모 노드로 올라가서 부모.부모.left === 부모 인 노드를 찾는다.
*/

function leftMostChild(node: TreeNode): TreeNode {
  if (!node) return null

  while (node.left) node = node.left

  return node
}

function findSuccessor(node: TreeNode): TreeNode {
  if (node.right) {
    return leftMostChild(node.right)
  } else {
    let n = node
    let p = node.parent

    while (p && p.left !== n) {
      n = p
      p = n.parent
    }

    return p
  }
}

const tree = new TreeNode(3)

for (let v of [1, 5, 0, 2, 4, 6]) {
  tree.insertInOrder(v)
}

printTree(tree)

console.log('Successor of', tree.data, 'is', findSuccessor(tree).data)
console.log(
  'Successor of',
  tree.right.left.data,
  'is',
  findSuccessor(tree.right.left).data
)
console.log(
  'Successor of',
  tree.right.right.data,
  'is',
  findSuccessor(tree.right.right)
)
