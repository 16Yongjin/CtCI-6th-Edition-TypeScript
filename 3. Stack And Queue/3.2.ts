import Stack from './stack'

class StackWithMin<T> extends Stack<T> {
  _minStack: Stack<T>

  constructor(...values: T[]) {
    super()

    this._minStack = new Stack()

    for (let value of values) {
      this.push(value)
    }
  }

  get isEmpty(): boolean {
    return !this.data.length
  }

  get min(): T {
    if (this.isEmpty) throw new Error('Empty Stack Error')

    return this._minStack.peek()
  }

  pop(): T {
    if (this.isEmpty) throw new Error('Empty Stack Error')

    const popValue = super.pop()

    if (this._minStack.peek() === popValue) {
      this._minStack.pop()
    }

    return popValue
  }

  push(item: T) {
    if (this._minStack.isEmpty || item < this._minStack.peek()) {
      this._minStack.push(item)
    }

    super.push(item)
  }

  print() {
    if (this.isEmpty) console.log('Empty Stack!')
    else console.log(`data: [${this.data}],  min: ${this.min}`)
  }
}

const stack = new StackWithMin(30, 21, 13, 43)

stack.print()

stack.pop()
stack.print()

stack.pop()
stack.print()

stack.pop()
stack.print()

stack.pop()
stack.print()

console.log(stack)
