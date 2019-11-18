import Stack from './stack'

function delay(time: number) {
  return new Promise(resolve => setTimeout(resolve, time))
}

async function stackSort(stack: Stack<number>): Promise<Stack<number>> {
  const buffer = new Stack<number>()

  async function delayAndPrint() {
    await delay(100)
    process.stdout.write('\u001b[2J\u001b[0;0H')
    console.log(stack.data, buffer.data)
  }

  while (!stack.isEmpty) {
    const target = stack.pop()

    while (!buffer.isEmpty && target < buffer.peek()) {
      stack.push(buffer.pop())

      await delayAndPrint()
    }

    buffer.push(target)

    await delayAndPrint()
  }

  while (!buffer.isEmpty) {
    stack.push(buffer.pop())
    await delayAndPrint()
  }

  return stack
}

function randomInt(range): number {
  return Math.floor(Math.random() * range)
}

const stack = new Stack<number>()

for (let i = 0; i < 20; i++) {
  stack.push(randomInt(100))
}

stackSort(stack).then(s => console.log(s.data))
