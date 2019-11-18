function countEval(s: string, result: boolean): number {
  if (s.length === 0) return 0
  if (s.length === 1) return (s === '1') === result ? 1 : 0

  let ways = 0

  for (let i = 1; i < s.length; i += 2) {
    const op = s[i]
    const left = s.substring(0, i)
    const right = s.substring(i + 1)

    const leftTrue = countEval(left, true)
    const leftFalse = countEval(left, false)
    const rightTrue = countEval(right, true)
    const rightFalse = countEval(right, false)
    const total = (leftTrue + leftFalse) * (rightTrue + rightFalse)

    let totalTrue = 0
    if (op === '^') totalTrue = leftTrue * rightFalse + leftFalse * rightTrue
    if (op === '&') totalTrue = leftTrue * rightTrue
    if (op === '|')
      totalTrue =
        leftTrue * rightFalse + leftFalse * rightTrue + leftTrue * rightTrue

    const subWays = result ? totalTrue : total - totalTrue

    ways += subWays
  }

  return ways
}

console.log(countEval('1^0|0|1', false))
