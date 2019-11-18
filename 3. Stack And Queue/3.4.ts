import Stack from './stack'

class MyQueue<T> {
  stack1: Stack<T>
  stack2: Stack<T>

  constructor() {
    this.stack1 = new Stack()
    this.stack2 = new Stack()
  }

  get isEmpty(): boolean {
    return this.stack1.isEmpty
  }

  add(item: T) {
    this.stack1.push(item)
  }

  remove(): T {
    if (this.isEmpty) throw new Error('No Such Element')

    while (!this.stack1.isEmpty) {
      this.stack2.push(this.stack1.pop())
    }

    const removeValue = this.stack2.pop()

    while (!this.stack2.isEmpty) {
      this.stack1.push(this.stack2.pop())
    }

    return removeValue
  }

  peek(): T {
    if (this.isEmpty) throw new Error('No Such Element')

    while (!this.stack1.isEmpty) {
      this.stack2.push(this.stack1.pop())
    }

    const peekValue = this.stack2.data[0]

    while (!this.stack2.isEmpty) {
      this.stack1.push(this.stack2.pop())
    }

    return peekValue
  }

  print() {
    console.log(this.stack1.data)
  }
}

const myQueue = new MyQueue()

console.log('Add value: ')
for (let i = 0; i < 10; i++) {
  myQueue.add(i)
  myQueue.print()
}

console.log('\nPeek value: ')
console.log(myQueue.peek())

console.log('\nRemove value: ')
for (let i = 0; i < 10; i++) {
  myQueue.remove()
  myQueue.print()
}
