class Queue<T> {
  data: T[]

  constructor() {
    this.data = []
  }

  get isEmpty(): boolean {
    return !this.data.length
  }

  add(item: T) {
    this.data.unshift(item)
  }

  remove(): T {
    if (this.isEmpty) throw new Error('No Such Element')

    return this.data.shift()
  }

  peek(): T {
    if (this.isEmpty) throw new Error('No Such Element')

    return this.data[0]
  }
}

export default Queue
