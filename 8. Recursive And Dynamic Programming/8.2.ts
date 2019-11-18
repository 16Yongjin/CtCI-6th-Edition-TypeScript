interface Point {
  row: number
  col: number
}

function hasPath(maze: number[][]): Point[] {
  if (!maze || maze.length === 0) return null

  const path: Point[] = []
  const failedPoints: Set<Point> = new Set([])

  if (_hasPath(maze, maze.length - 1, maze[0].length - 1, path, failedPoints)) {
    return path
  }

  return null
}

function _hasPath(
  maze: number[][],
  row: number,
  col: number,
  path: Point[],
  failedPoints: Set<Point>
): boolean {
  if (col < 0 || row < 0 || !maze[row][col]) return false

  const p: Point = { row, col }

  if (failedPoints.has(p)) return false

  let isAtOrigin = row === 0 && col === 0

  if (
    isAtOrigin ||
    _hasPath(maze, row, col - 1, path, failedPoints) ||
    _hasPath(maze, row - 1, col, path, failedPoints)
  ) {
    path.push({ row, col })
    return true
  }

  failedPoints.add(p)
  return false
}
