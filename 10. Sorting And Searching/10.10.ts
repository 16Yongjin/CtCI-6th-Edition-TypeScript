/*
  왼쪽 노드에 더 작은 값이 들어가는 이진 탐색 트리의 특성을 이용

  중위 순회 돌면서 개수 세면 순위 구할 수 있는데 그럼 매번 순회해야돼서 비효율적임

  left_size 를 통해 데이터를 삽입할 때마다 왼쪽 노드의 개수를 구해둠

  루트에서부터 찾고자 하는 노드까지 왼쪽 노드들의 개수를 더하면 순위를 알 수 있음
*/

class RankNode {
  left_size = 0
  left: RankNode
  right: RankNode
  data = 0

  constructor(data: number) {
    this.data = data
  }

  insert(data: number) {
    if (data < this.data) {
      if (this.left) this.left.insert(data)
      else this.left = new RankNode(data)
      this.left_size++
    } else {
      if (this.right) this.right.insert(data)
      else this.right = new RankNode(data)
    }
  }

  getRank(data: number): number {
    if (data === this.data) {
      return this.left_size
    } else if (data < this.data) {
      if (this.left) return this.left.getRank(data)
      else return -1
    } else {
      const right_rank = this.right ? this.right.getRank(data) : -1
      if (right_rank === -1) return -1
      else return this.left_size + 1 + right_rank
    }
  }
}

let root: RankNode = null

function track(number: number) {
  if (!root) root = new RankNode(number)
  else root.insert(number)
}

for (const n of [5, 1, 4, 4, 5, 9, 7, 13, 3]) {
  track(n)
}

console.log(root.getRank(1))
console.log(root.getRank(3))
console.log(root.getRank(9))
