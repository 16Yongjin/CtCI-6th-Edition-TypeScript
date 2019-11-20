class Listy {
  private value = null

  constructor(...elems: number[]) {
    this.value = elems
  }

  elementAt(index: number) {
    return this.value[index] !== undefined ? this.value[index] : -1
  }
}

function indexOf(listy: Listy, n: number): number {
  if (listy.elementAt(0) === -1) return -1

  let length = 2

  while (listy.elementAt(length) !== -1) length *= 2
  length /= 2

  while (listy.elementAt(length) !== -1) length += 1

  return search(listy, 0, length, n)
}

function search(listy: Listy, left: number, right: number, n: number): number {
  const mid = ~~((left + right) / 2)

  if (listy.elementAt(mid) === n) return mid

  if (left > right) return -1

  if (listy.elementAt(mid) < n) return search(listy, mid + 1, right, n)

  if (listy.elementAt(mid) > n) return search(listy, left, mid - 1, n)

  return -1
}

console.log(
  indexOf(
    new Listy(13, 15, 24, 43, 55, 69, 101, 304, 444, 553, 653, 777, 992, 1004),
    777
  )
)

export {}
