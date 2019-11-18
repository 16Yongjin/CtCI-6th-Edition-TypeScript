function rotateMatrix(input: number[][]) {
  const n = input.length

  const output: number[][] = new Array(n).fill(0).map(_ => new Array(n).fill(0))

  for (let x = 0; x < n; x++)
    for (let y = 0; y < n; y++) output[x][n - y - 1] = input[y][x]

  return output
}

// console.table(
//   rotateMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])
// )

var rotateMatrix2 = function(matrix) {
  var edge = matrix.length - 1

  var movePixels = function(row, col) {
    // starts at m[row][col]
    // moves to m[col][edge - row]
    var fromRow
    var fromCol
    var fromPixel

    // first transformation
    var toRow = row // 0
    var toCol = col // 1
    var toPixel = matrix[row][col]

    // Do rotational transformation 4 times
    for (var i = 0; i < 4; i++) {
      fromRow = toRow
      fromCol = toCol
      toRow = fromCol
      toCol = edge - fromRow

      fromPixel = toPixel
      toPixel = matrix[toRow][toCol]
      matrix[toRow][toCol] = fromPixel
    }
  }

  for (var i = 0; i < matrix.length / 2; i++) {
    for (var j = i; j < edge - i; j++) {
      console.log(i, j)
      movePixels(i, j)
      console.table(matrix)
    }
  }
}

// var testMatrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
// console.table(testMatrix)
// rotateMatrix2(testMatrix)
// console.table(testMatrix)

var testMatrix2 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]
console.table(testMatrix2)
rotateMatrix2(testMatrix2)
console.table(testMatrix2)
