function countFlip(a: number, b: number): number {
  let count = 0

  for (let n = a ^ b; n > 0; n >>= 1) count += n & 1

  return count
}

console.log(countFlip(15, 29))
