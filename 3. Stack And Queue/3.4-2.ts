import Stack from './stack'

// Lazy Double Stack Queue
class MyQueue<T> {
  stackNewest: Stack<T>
  stackOldest: Stack<T>

  constructor() {
    this.stackNewest = new Stack()
    this.stackOldest = new Stack()
  }

  get isEmpty(): boolean {
    return this.stackNewest.isEmpty || this.stackOldest.isEmpty
  }

  add(item: T) {
    this.stackNewest.push(item)
  }

  remove(): T {
    this.shiftStack()

    return this.stackOldest.pop()
  }

  private shiftStack() {
    if (this.stackOldest.isEmpty)
      while (!this.stackNewest.isEmpty)
        this.stackOldest.push(this.stackNewest.pop())
  }

  peek(): T {
    this.shiftStack()

    return this.stackOldest.peek()
  }

  print() {
    console.log(this.stackNewest.data, this.stackOldest.data)
  }
}

const myQueue = new MyQueue()

console.log('Add value: ')
for (let i = 0; i < 20; i++) {
  myQueue.add(i)

  if (Math.random() <= 0.5) myQueue.remove()
  myQueue.print()
}

console.log('\nPeek value: ')
console.log(myQueue.peek())

myQueue.print()
