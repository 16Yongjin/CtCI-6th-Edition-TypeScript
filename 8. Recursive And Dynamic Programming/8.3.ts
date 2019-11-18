function magicIndex(arr: number[]): number {
  return _magicIndex(arr, 0, arr.length - 1)
}

function _magicIndex(arr: number[], start: number, end: number): number {
  if (end < start) return -1

  const mid = (start + end) / 2

  if (arr[mid] === mid) return mid
  else if (arr[mid] > mid) return _magicIndex(arr, start, mid - 1)
  else return _magicIndex(arr, mid - 1, end)
}

console.log(magicIndex([-10, -5, 2, 2, 2, 3, 5, 7, 9, 12, 13]))
