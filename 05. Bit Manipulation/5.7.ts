/*
  101010... 홀수 마스크로 홀수 비트만 가져와서 오른쪽으로
  010101... 짝수 마스크로 짝수 비트만 가져와서 왼쪽으로
*/

function swapOddEven(n: number): number {
  return ((n & 0xaaaaaaaa) >>> 1) | ((n & 0x55555555) << 1)
}
