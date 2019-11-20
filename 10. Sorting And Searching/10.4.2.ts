class Listy {
  private value = null

  constructor(...elems: number[]) {
    this.value = elems
  }

  elementAt(index: number) {
    return this.value[index] !== undefined ? this.value[index] : -1
  }
}

function search(listy: Listy, value: number): number {
  let index = 1

  while (listy.elementAt(index) !== -1 && listy.elementAt(index) < value)
    index *= 2

  return binarySearch(listy, value, index / 2, index)
}

function binarySearch(
  listy: Listy,
  value: number,
  low: number,
  high: number
): number {
  let mid

  while (low <= high) {
    mid = ~~((low + high) / 2)
    const middle = listy.elementAt(mid)

    if (middle > value || middle === -1) high = mid - 1
    else if (middle < value) low = mid + 1
    else return mid
  }
  return -1
}

console.log(
  search(
    new Listy(13, 15, 24, 43, 55, 69, 101, 304, 444, 553, 653, 777, 992, 1004),
    777
  ) === 11
)

export {}
