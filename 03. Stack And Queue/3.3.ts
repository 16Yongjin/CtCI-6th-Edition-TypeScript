import Stack from './stack'

class SetOfStacks<T> {
  stacks: Stack<T>[]
  CAPACITY = 3

  constructor(capacity: number) {
    this.CAPACITY = capacity
    this.stacks = [new Stack()]
  }

  get lastStack(): Stack<T> {
    return this.stacks[this.stacks.length - 1]
  }

  get isEmpty(): boolean {
    return !(this.stacks[0] && this.stacks[0].data.length)
  }

  pop(): T {
    if (this.isEmpty) throw new Error('Empty Stack Error')

    if (this.lastStack.isEmpty) this.stacks.pop()

    return this.lastStack.pop()
  }

  push(item: T) {
    if (this.lastStack.data.length >= this.CAPACITY) {
      this.stacks.push(new Stack())
    }

    this.lastStack.push(item)
  }

  print() {
    console.log(
      '[',
      this.stacks.map(stack => `[${stack.data.join(', ')}]`).join(', '),
      ']'
    )
  }
}

const setOfStacks = new SetOfStacks(3)

console.log('Push 0 .. 9')
for (let i = 0; i < 10; i++) {
  setOfStacks.push(i)
  setOfStacks.print()
}

console.log('\nPop 0 .. 9')
for (let i = 0; i < 10; i++) {
  setOfStacks.pop()
  setOfStacks.print()
}
