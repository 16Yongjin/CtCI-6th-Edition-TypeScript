function search(arr: number[], left: number, right: number, x: number): number {
  const mid = ~~((left + right) / 2)

  if (x === arr[mid]) return mid

  if (right < left) return -1

  if (arr[left] < arr[mid])
    if (x >= arr[left] && x < arr[mid]) return search(arr, left, mid - 1, x)
    else return search(arr, mid + 1, right, x)
  else if (arr[mid] < arr[left])
    if (x > arr[mid] && x <= arr[right]) return search(arr, mid + 1, right, x)
    else return search(arr, left, mid - 1, x)
  else if (arr[left] === arr[mid])
    if (arr[mid] !== arr[right]) return search(arr, mid + 1, right, x)
    else {
      const result = search(arr, left, mid - 1, x)
      if (result === -1) return search(arr, mid + 1, right, x)
      else result
    }

  return -1
}

console.log(search([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 0, 11, 5) === 8)

export {}
