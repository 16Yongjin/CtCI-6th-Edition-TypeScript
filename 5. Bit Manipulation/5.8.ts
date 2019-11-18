function toByte(n: number): number {
  return new Uint8Array([n])[0]
}

function drawLine(
  screen: number[],
  width: number,
  x1: number,
  x2: number,
  y: number
): number[] {
  const from = width * y + x1
  const to = width * y + x2

  const fromIndex = Math.floor(from / 8)
  const toIndex = Math.floor(to / 8)

  const fromIndexBit = 0xff >> from % 8
  const toIndexBit = toByte(~(0xff >> ((to % 8) + 1)))

  if (fromIndex === toIndex) {
    screen[fromIndex] |= fromIndexBit & toIndexBit
  } else {
    screen[fromIndex] = fromIndexBit
    screen[toIndex] = toIndexBit
  }

  for (let i = fromIndex + 1; i < toIndex; i++) screen[i] = 255

  return screen
}

function byteToDot(byte) {
  let dots = []

  for (let i = 0; i < 8; i++) {
    dots.unshift(byte & 1 ? '■' : '□')
    byte >>>= 1
  }

  return dots.join('')
}

function printScreen(screen: number[], width: number) {
  const dots = screen.map(byteToDot)

  for (let i = 0; i < screen.length; i += width / 8) {
    console.log(dots.slice(i, i + width / 8).join(''))
  }
}

const range = (n, l = []) => {
  while (n--) l.unshift(n)
  return l
}

printScreen(drawLine(range((32 * 10) / 8).map(_ => 0), 32, 4, 27, 3), 32)
