function sortValleyPeak(arr: number[]): number[] {
  arr.sort()

  for (let i = 1; i < arr.length - 1; i++)
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]

  return arr
}

console.log(sortValleyPeak([5, 3, 1, 2, 3]))

export {}
