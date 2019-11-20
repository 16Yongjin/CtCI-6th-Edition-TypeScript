function search(arr: string[], str: string): number {
  if (!str) return -1

  return _search(arr, str, 0, arr.length - 1)
}

function _search(
  arr: string[],
  str: string,
  first: number,
  last: number
): number {
  if (first > last) return -1

  let mid = ~~((first + last) / 2)

  if (!arr[mid]) {
    let left = mid - 1
    let right = mid + 1

    while (true) {
      if (left < first && right > last) return -1
      else if (right <= last && arr[mid]) {
        mid = right
        break
      } else if (left >= first && arr[mid]) {
        mid = left
        break
      }
      right++
      left--
    }
  }

  if (arr[mid] === str) return mid
  else if (arr[mid].localeCompare(str) < 0)
    return _search(arr, str, mid + 1, last)
  else return _search(arr, str, first, mid - 1)
}

console.log(
  search(
    ['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', ''],
    'ball'
  )
)
