function printBinary(num: number): string {
  if (num >= 1 || num <= 0) return 'ERROR'

  let binary = '.'

  while (num > 0) {
    if (binary.length >= 32) return 'ERROR'

    const r = num * 2
    if (r >= 0) {
      binary += 1
      num = r - 1
    } else {
      binary += 0
      num = r
    }
  }

  return binary
}

function printBinary2(num: number): string {
  if (num >= 1 || num <= 0) return 'ERROR'

  let binary = '.'
  let frac = 0.5

  while (num > 0) {
    if (binary.length >= 32) return 'ERROR'

    if (num >= frac) {
      binary += '1'
      num -= frac
    } else {
      binary += '0'
    }

    frac /= 2
  }

  return binary
}
