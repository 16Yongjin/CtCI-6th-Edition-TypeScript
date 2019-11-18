import Stack from '../stackAndQueue/stack'

class Tower {
  disks: Stack<number>
  index: number

  constructor(index: number) {
    this.disks = new Stack()
    this.index = index
  }

  add(disk: number) {
    if (!this.disks.isEmpty && this.disks.peek() <= disk)
      console.log('Error placing disk', disk)

    this.disks.push(disk)
  }

  moveTopTo(tower: Tower) {
    const top = this.disks.pop()
    tower.add(top)
  }

  moveDisks(n: number, destination: Tower, buffer: Tower) {
    if (n <= 0) return

    this.moveDisks(n - 1, buffer, destination) // 1 ... n - 1을 기둥 2로 옮긴다.

    this.moveTopTo(destination) // n을 기둥 3으로 옮긴다.

    buffer.moveDisks(n - 1, destination, this) // 1 ... n - 1을 기둥 3으로 옮긴다.
  }
}

function main() {
  const n = 3
  const towers = [new Tower(0), new Tower(1), new Tower(2)]

  for (let i = n - 1; i >= 0; i--) {
    towers[0].add(i)
  }

  towers[0].moveDisks(n, towers[2], towers[1])

  console.log(towers[0])
  console.log(towers[2])
}

main()
