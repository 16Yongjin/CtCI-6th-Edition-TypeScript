class Node {
  data: number = null
  next: Node = null

  constructor(data: number) {
    this.data = data
  }

  static fromArray(...data): Node {
    if (!data.length) return null

    let head: Node = new Node(data[0])
    let node: Node = head

    for (let datum of data.slice(1)) {
      node.next = new Node(datum)
      node = node.next
    }

    return head
  }

  appendToTail(data: number): Node {
    const end: Node = new Node(data)

    let node: Node = this
    while (node.next) {
      node = node.next
    }
    node.next = end

    return this
  }

  // 2.1
  static unique(head: Node): Node {
    const newNode = new Node(head.data)
    const checkData = { [head.data]: true }

    head.next &&
      head.next.forEachData(data => {
        if (checkData[data]) return

        newNode.appendToTail(data)
        checkData[data] = true
      })

    return newNode
  }

  index(n: number): Node {
    let node: Node = this

    for (let i = 0; i < n; i++) {
      node = node.next
      if (!node) return null
    }

    return node
  }

  // 2.2
  static fromBehind(head: Node, k: number): Node {
    return head.index(head.length - k)
  }

  static nthToLast(head: Node, k: number): Node {
    let p1: Node = head
    let p2: Node = head

    // p1을 k 만큼 이동
    for (let i = 0; i < k; i++) {
      if (!p1) return null
      p1 = p1.next
    }

    // p1이 끝에 도달할 때 까지 p1와 p2을 동시에 움직임
    // p2는 length - k
    while (p1) {
      p1 = p1.next
      p2 = p2.next
    }

    return p2
  }

  // 2.3
  static deleteMiddle(head: Node): Node {
    const length = head.length

    if (length <= 2) return head

    const middle = Math.floor(length / 2)
    Node.deleteAt(head, middle)

    return head
  }

  // 2.4
  static unstableSplit(head: Node, splitPoint: number): Node {
    let frontList: Node = null
    let backList: Node = null

    head.forEachData(data => {
      if (data < splitPoint)
        frontList = frontList
          ? Node.appendToHead(frontList, data)
          : new Node(data)
      else
        backList = backList ? Node.appendToHead(backList, data) : new Node(data)
    })

    return frontList.concat(backList)
  }

  static appendToHead(head: Node, data: number): Node {
    return new Node(data).concat(head)
  }

  static deleteNode(head: Node, data: number): Node {
    let node = head
    if (node.data === data) {
      return head.next
    }

    while (node.next) {
      if (node.next.data === data) {
        node.next = node.next.next
        return head
      }
      node = node.next
    }

    return head
  }

  toDecimal(): number {
    return this.toArray().reduce((acc, v) => acc * 10 + v, 0)
  }

  toDecimalRevered(): number {
    return this.toArray()
      .reverse()
      .reduce((acc, v) => acc * 10 + v, 0)
  }
  // 2.5
  static addReversedNumberRepresentation(node1: Node, node2: Node): number {
    const num1 = node1.toDecimalRevered()
    const num2 = node2.toDecimalRevered()

    return num1 + num2
  }

  static addNumberRepresentation(node1: Node, node2: Node): number {
    const num1 = node1.toDecimal()
    const num2 = node2.toDecimal()

    return num1 + num2
  }

  // 2.6
  isPalindrome(): boolean {
    const array = this.toArray()

    const halfEnd = Math.floor(array.length / 2)
    const halfStart = Math.ceil(array.length / 2)

    const front = array
      .slice(0, halfEnd)
      .reverse()
      .join('')

    const behind = array.slice(halfStart).join('')

    return front === behind
  }

  drop(n: number): Node {
    return this.index(n)
  }

  // 2.7
  static findUnionNode(node1: Node, node2: Node): Node {
    const node1Length = node1.length
    const node2Length = node2.length

    const searchLength = Math.min(node1.length, node2.length)

    let n1 = node1.drop(node1Length - searchLength)
    let n2 = node2.drop(node2Length - searchLength)

    while (n1 && n2) {
      if (n1 === n2) return n1

      n1 = n1.next
      n2 = n2.next
    }

    return null
  }

  static findCircularCycleNodeStart(head: Node): Node {
    const visitCheck = {}
    for (let node: Node = head; node; node = node.next) {
      if (!visitCheck[node.data]) {
        visitCheck[node.data] = true
      } else {
        return node
      }
    }
  }

  // 2.8
  static findBegginningOfCircle(head: Node): Node {
    let slow: Node = head
    let fast: Node = head

    while (fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
      if (slow === fast) break
    }

    if (!fast || !fast.next) return null

    slow = head
    while (slow !== fast) {
      slow = slow.next
      fast = fast.next
    }

    return fast
  }

  forEachNode(f: (v: Node) => any): void {
    for (let node: Node = this; node; node = node.next) {
      f(node)
    }
  }

  forEachData(f: (v: number) => any): void {
    for (let node: Node = this; node; node = node.next) {
      f(node.data)
    }
  }

  get length() {
    let length = 0
    this.forEachNode(_ => ++length)

    return length
  }

  static deleteAt(head: Node, n: number): Node {
    const frontNode = head.index(n - 1)

    if (frontNode && frontNode.next) {
      frontNode.next = frontNode.next.next
    }

    return head
  }

  static concat(node1: Node, node2: Node): Node {
    Node.fromBehind(node1, 1).next = node2

    return node1
  }

  concat(node: Node): Node {
    return Node.concat(this, node)
  }

  toArray(): number[] {
    const array = []
    this.forEachData(data => array.push(data))
    return array
  }

  print(): void {
    const dataList: number[] = []
    let node: Node = this
    while (true) {
      dataList.push(node.data)

      if (node.next === null) break
      else node = node.next
    }

    console.log(dataList.join(' '))
  }
}

export default Node
