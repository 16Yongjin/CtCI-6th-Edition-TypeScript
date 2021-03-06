function getNext(n: number) {
  let [c, c0, c1] = [n, 0, 0]

  while ((c & 1) === 0 && c !== 0) {
    c0++
    c >>= 1
  }

  while ((c & 1) === 1) {
    c1++
    c >>= 1
  }

  if (c0 + c1 === 31 || c0 + c1 === 0) {
    return -1
  }

  const p = c0 + c1

  n |= 1 << p
  n &= ~((1 << p) - 1)
  n |= (1 << (c1 - 1)) - 1

  return n
}

function getPrev(n: number) {
  let [temp, c0, c1] = [n, 0, 0]

  while ((temp & 1) === 1) {
    c1++
    temp >>= 1
  }

  if (temp === 0) return -1

  while ((temp & 1) === 0 && temp !== 0) {
    c0++
    temp >>= 1
  }

  const p = c0 + c1
  n &= ~0 << (p + 1)
  const mask = (1 << (c1 + 1)) - 1
  n |= mask << (c0 - 1)
  return n
}
