function minProduct(a: number, b: number): number {
  const bigger = a < b ? b : a
  const smaller = a < b ? a : b
  return minProductHelper(smaller, bigger)
}

function minProductHelper(smaller: number, bigger: number): number {
  if (smaller === 0) return 0
  if (smaller === 1) return bigger

  const s = smaller >> 1 // smaller을 반으로 나눔
  const halfProd = minProductHelper(s, bigger)
  if (smaller % 2 === 0) return halfProd + halfProd
  else return halfProd + halfProd + bigger // 홀수면 bigger 한 번 더함
}

console.log(minProduct(10, 5))
