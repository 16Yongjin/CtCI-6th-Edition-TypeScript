class Stack<T> {
  data: T[]

  constructor() {
    this.data = []
  }

  get isEmpty(): boolean {
    return !this.data.length
  }

  pop(): T {
    if (this.isEmpty) throw new Error('Empty Stack Error')

    return this.data.pop()
  }

  push(item: T) {
    this.data.push(item)
  }

  peek(): T {
    if (this.isEmpty) throw new Error('Empty Stack Error')

    return this.data[this.data.length - 1]
  }
}

export default Stack
