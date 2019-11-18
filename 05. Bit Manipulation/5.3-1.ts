const sum = (arr: number[]) => arr.reduce((acc, v) => acc + v)

function flipOne(num: number): number {
  const oneLengths = num
    .toString(2)
    .split('0')
    .map(i => i.length)

  return Math.max(...chuck(oneLengths, 2).map(sum)) + 1
}

function chuck(arr: any[], n: number): any[][] {
  if (arr.length < n) return [arr]

  const res = []
  for (let i = 0; i < arr.length - n + 1; i++) {
    res.push(arr.slice(i, i + n))
  }

  return res
}

console.log(flipOne(Number.parseInt('11011101111', 2)))
