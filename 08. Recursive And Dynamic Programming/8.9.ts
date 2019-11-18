function addParen(
  n: number,
  str: string,
  open: number,
  close: number,
  res: string[]
) {
  if (n === close) return res.push(str)

  if (open < n) addParen(n, str + '(', open + 1, close, res)

  if (close < open) addParen(n, str + ')', open, close + 1, res)
}

function paren(n: number) {
  const res = []

  addParen(n, '', 0, 0, res)

  return res
}

console.log(paren(3))
