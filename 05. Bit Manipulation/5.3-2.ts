function flipBit(n: number): number {
  if (!~n) return 64

  let [currentLength, previoutLength, maxLength] = [0, 0, 1]

  while (n !== 0) {
    if ((n & 1) === 1) {
      currentLength++
    } else if ((n & 1) === 0) {
      previoutLength = (n & 2) === 0 ? 0 : currentLength
      currentLength = 0
    }
    maxLength = Math.max(previoutLength + currentLength + 1, maxLength)
    console.log(previoutLength, currentLength, maxLength)

    n >>>= 1
  }

  return maxLength
}

console.log(flipBit(Number.parseInt('110111001111', 2)))
