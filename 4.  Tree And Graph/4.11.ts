class Tree {
  root: TreeNode = null

  get size() {
    return this.root ? this.root.size : 0
  }

  getRandomNode() {
    if (!this.root) return null

    const index = Math.floor(Math.random() * this.size)

    return this.root.getRandomNode(index)
  }

  insertInOrder(data: number) {
    if (this.root) this.root.insertInOrder(data)
    else this.root = new TreeNode(data)
  }
}

class TreeNode {
  data: number
  left: TreeNode
  right: TreeNode
  size: number = 0

  constructor(data: number) {
    this.data = data
    this.size = 1
  }

  insertInOrder(data) {
    if (data < this.data) {
      if (this.left) this.left.insertInOrder(data)
      else this.left = new TreeNode(data)
    } else {
      if (this.right) this.right.insertInOrder(data)
      else this.right = new TreeNode(data)
    }

    this.size++
  }

  find(data: number): TreeNode {
    if (data === this.data) return this
    else if (data < this.data && this.left) return this.left.find(data)
    else if (data >= this.data && this.right) return this.right.find(data)
    else return null
  }

  remove(data: number) {
    if (data === this.data) {
    }
  }

  getRandomNode(index: number): TreeNode {
    const leftSize = this.left ? this.left.size : 0

    if (index < leftSize) {
      return this.left.getRandomNode(index)
    } else if (index === leftSize) {
      return this
    } else {
      return this.right.getRandomNode(index - (leftSize + 1))
    }
  }
}
