function findDuplicate(arr: number[]) {
  const flags = Array(3200).fill(0)

  for (let i = 0; i < arr.length; i++) {
    if (flags[i]) console.log(arr[i])
    else flags[i] = 1
  }
}
