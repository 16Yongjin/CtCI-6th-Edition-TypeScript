import { dec2bin } from './util'

function findSameBitMaxMin(n: number) {
  const oneCount = Array.from(n.toString(2)).reduce(
    (acc, v) => (v === '1' ? acc + 1 : acc),
    0
  )

  const min = -1 << (32 - oneCount)
  const max = min >>> 1

  return [max, min]
}

findSameBitMaxMin(123)
