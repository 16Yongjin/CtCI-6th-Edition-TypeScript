import Stack from './stack'

class SortedStack<T> {
  stack: Stack<T>
  buffer: Stack<T>

  constructor() {
    this.stack = new Stack()
    this.buffer = new Stack()
  }

  get isEmpty(): boolean {
    return this.stack.isEmpty
  }

  pop(): T {
    return this.stack.pop()
  }

  push(item: T) {
    if (this.stack.isEmpty) return this.stack.push(item)

    while (!this.stack.isEmpty)
      if (this.stack.peek() < item) this.buffer.push(this.stack.pop())
      else break

    this.buffer.push(item)

    while (!this.buffer.isEmpty) this.stack.push(this.buffer.pop())
  }

  peek(): T {
    return this.stack.peek()
  }

  print() {
    console.log('Stack data:', this.stack.data)
  }
}

function randomInt(range): number {
  return Math.floor(Math.random() * range)
}

const sortedStack = new SortedStack()

for (let i = 0; i < 10; i++) {
  const pushValue = randomInt(10)
  console.log('Pushing', pushValue)
  sortedStack.push(pushValue)
  sortedStack.print()
}
