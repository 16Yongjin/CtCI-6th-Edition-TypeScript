function subset1<T>(arr: T[]): T[][] {
  return arr.reduce((acc, v) => acc.concat(acc.map(s => s.concat(v))), [[]])
}

console.log(subset1([1, 2, 3]))
