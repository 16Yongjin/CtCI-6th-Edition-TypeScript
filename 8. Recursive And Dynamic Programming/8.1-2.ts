function countWays(n: number): number {
  const memo = Array(n + 1).fill(-1)
  return _countWays(n, memo)
}

function _countWays(n: number, memo: number[]): number {
  if (n < 0) return 0

  if (n === 0) return 1

  if (memo[n] > -1) return memo[n]

  memo[n] =
    _countWays(n - 1, memo) + _countWays(n - 2, memo) + _countWays(n - 3, memo)

  return memo[n]
}
