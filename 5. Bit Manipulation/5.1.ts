import { dec2bin } from './util'

function updateBits(n: number, m: number, i: number, j: number): number {
  const allOnes = ~0 // or - 1
  const left = allOnes << (j + 1)
  const right = (1 << i) - 1
  const mask = left | right

  const n_cleared = n & mask
  const m_shifted = m << i

  return n_cleared | m_shifted
}

console.log(dec2bin(updateBits(0b10000000000, 0b10011, 2, 6)))
