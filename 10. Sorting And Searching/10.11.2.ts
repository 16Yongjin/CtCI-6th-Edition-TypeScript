function sortValleyPeak(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i += 2) {
    const biggest = findBiggestIndex(arr, i - 1, i, i + 1)
    if (i !== biggest) [arr[i], arr[biggest]] = [arr[biggest], arr[i]]
  }

  return arr
}

function findBiggestIndex(
  arr: number[],
  a: number,
  b: number,
  c: number
): number {
  const aVal = arr[a] !== undefined ? arr[a] : Number.MIN_VALUE
  const bVal = arr[b] !== undefined ? arr[b] : Number.MIN_VALUE
  const cVal = arr[c] !== undefined ? arr[c] : Number.MIN_VALUE

  const max = Math.max(aVal, bVal, cVal)
  switch (max) {
    case aVal:
      return a
    case bVal:
      return b
    case cVal:
      return c
  }
}

console.log(sortValleyPeak([5, 3, 1, 2, 3]))
