Number.prototype[Symbol.iterator] = function*() {
  for (var i = 0; i < this; i++) yield i
}

function toZeroIfZero(matrix) {
  const [m, n] = [matrix.length, matrix[0].length]
  const [zeroY, zeroX] = [{}, {}]

  for (const y of m) {
    for (const x of n) {
      if (matrix[y][x] === 0) {
        zeroY[y] = zeroX[x] = true
      }
    }
  }

  Object.keys(zeroY).forEach(y => [...n].forEach(x => (matrix[y][x] = 0)))
  Object.keys(zeroX).forEach(x => [...m].forEach(y => (matrix[y][x] = 0)))

  return matrix
}

console.table(
  toZeroIfZero([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 0, 12], [13, 14, 15, 16]])
)

console.table(
  toZeroIfZero([[1, 1, 1, 1], [1, 1, 0, 1], [1, 1, 1, 1], [1, 1, 1, 1]])
)
