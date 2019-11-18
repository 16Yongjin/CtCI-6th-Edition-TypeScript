const GRID_SIZE = 8

function placeQueens(row: number, columns: number[], results: number[][]) {
  if (row === GRID_SIZE) {
    results.push([...columns])
  } else {
    for (let col = 0; col < GRID_SIZE; col++) {
      if (checkValid(columns, row, col)) {
        columns[row] = col
        placeQueens(row + 1, columns, results)
      }
    }
  }
}

// 같은 열이나 대각선에 다른 퀸이 있는지 확인
function checkValid(columns: number[], row1: number, column1: number): boolean {
  for (let row2 = 0; row2 < row1; row2++) {
    const column2 = columns[row2]

    if (column1 === column2) return false

    // 두 퀸이 행열 간 거리가 같다 === 대각선에 놓여져있다
    const columnDistance = Math.abs(column2 - column1)
    const rowDistance = row1 - row2 // for문 조건이 row2 < row1
    if (columnDistance === rowDistance) return false
  }

  return false
}
