function merge(a: number[], b: number[], lastA: number, lastB: number) {
  let [indexA, indexB] = [lastA - 1, lastB - 1]
  let indexMerged = lastB + lastA - 1

  while (indexB >= 0) {
    if (indexA >= 0 && a[indexA] > b[indexB]) {
      a[indexMerged] = a[indexA]
      indexA--
    } else {
      a[indexMerged] = b[indexB]
      indexB--
    }
    indexMerged--
  }
}
