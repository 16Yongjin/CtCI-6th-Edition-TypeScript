function paint(board: number[][], x: number, y: number, color: number) {
  const originalColor = board[y][x]

  function paintHelper(x: number, y: number) {
    if (board[y][x] === originalColor) {
      board[y][x] = color

      paintHelper(x - 1, y)
      paintHelper(x, y - 1)
      paintHelper(x + 1, y)
      paintHelper(x, y + 1)
    }
  }

  paintHelper(x, y)

  return board
}
