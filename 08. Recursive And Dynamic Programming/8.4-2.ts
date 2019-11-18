function convertIntToSet<T>(x: number, set: T[]): T[] {
  const subset = []
  let index = 0
  for (let i = x; i > 0; i >>= 1, index++) {
    if ((i & 1) === 1) subset.push(set[index])
  }

  return subset
}

function subset2<T>(arr: T[]): T[][] {
  const subsets: T[][] = []
  const max = 1 << arr.length
  for (let i = 0; i < max; i++) {
    const subset = convertIntToSet(i, arr)
    subsets.push(subset)
  }

  return subsets
}

console.log(subset2([1, 2, 3]))
