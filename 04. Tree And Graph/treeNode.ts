class TreeNode {
  data: number
  left: TreeNode
  right: TreeNode
  parent: TreeNode
  private _size: number = 0

  constructor(data: number) {
    this.data = data
    this._size = 1
  }

  get size(): number {
    return this._size
  }

  insertInOrder(data: number) {
    if (data < this.data) {
      if (!this.left) {
        this.setLeftChild(new TreeNode(data))
      } else {
        this.left.insertInOrder(data)
      }
    } else {
      if (!this.right) {
        this.setRightChild(new TreeNode(data))
      } else {
        this.right.insertInOrder(data)
      }
    }
    this._size++
  }

  find(data: number): TreeNode {
    if (data === this.data) {
      return this
    } else if (data < this.data) {
      return this.left ? this.left.find(data) : null
    } else if (data > this.data) {
      return this.right ? this.right.find(data) : null
    }

    return null
  }

  static inOrderTraverse(node: TreeNode) {
    if (node) {
      TreeNode.inOrderTraverse(node.left)
      console.log(node.data)
      TreeNode.inOrderTraverse(node.right)
    }
  }

  static toInOrderArray(node: TreeNode): number[] {
    const array = []

    function _toInOrderArray(node: TreeNode) {
      if (node) {
        _toInOrderArray(node.left)
        array.push(node.data)
        _toInOrderArray(node.right)
      }
    }

    _toInOrderArray(node)

    return array
  }

  static preOrderTraverse(node: TreeNode) {
    if (node) {
      console.log(node.data)
      TreeNode.inOrderTraverse(node.left)
      TreeNode.inOrderTraverse(node.right)
    }
  }

  static postOrderTraverse(node: TreeNode) {
    if (node) {
      TreeNode.inOrderTraverse(node.left)
      TreeNode.inOrderTraverse(node.right)
      console.log(node.data)
    }
  }

  setLeftChild(left: TreeNode) {
    this.left = left
    if (left) left.parent = this
  }

  setRightChild(right: TreeNode) {
    this.right = right
    if (right) right.parent = this
  }
}

export default TreeNode
